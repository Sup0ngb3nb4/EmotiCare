import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";

import {Ionicons} from '@expo/vector-icons';
import LottieView from "lottie-react-native";

import { sendChatMessage, loadChatHistory } from "../../../api/api";

const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [botTyping, setBotTyping] = useState(false);

  const flatListRef = useRef(null);
  const gender = route?.params?.gender || "Male";

  const scrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    if (route?.params?.history?.length) {
      setHistory(route.params.history);
    } else {
      fetchHistory();
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const fetchHistory = async () => {
    try {
      const data = await loadChatHistory();
      if (data) setHistory(data);
    } catch (err) {
      console.error("Failed to load history:", err);
    }
  };

  const getUserAvatar = () => {
    return gender === "Female"
      ? require("../../../../assets/female.png")
      : require("../../../../assets/male.png");
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    setHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);
    setBotTyping(true);

    try {
      const data = await sendChatMessage(userMessage.message);
      const botMessage = {
        sender: "bot",
        message: data?.reply || "Sorry, I couldn't generate a reply.",
        timestamp: new Date().toISOString(),
      };

      setHistory((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
      setBotTyping(false);
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={{
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-end",
          marginVertical: 6,
        }}
      >
        <Image
          source={
            isUser
              ? getUserAvatar()
              : require("../../../../assets/emoticare_avatar.png")
          }
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginHorizontal: 6,
          }}
        />
        <View
          style={{
            backgroundColor: isUser ? "#0ABAB5" : "#FFBF78", //86b9b0
            borderRadius: 10,
            padding: 10,
            maxWidth: "75%",
          }}
        >
          <Text>{item.message}</Text>
          <Text style={{ fontSize: 10, color: "#666", marginTop: 4 }}>
            {new Date(item.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, padding: 10, backgroundColor: "#FFEEA9" }}
    >
      <FlatList
        ref={flatListRef}
        data={history}
        keyExtractor={(item, index) => `msg-${index}`}
        renderItem={renderMessage}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {botTyping && (
        <View style={{ width: 60, marginBottom: 10 }}>
          <LottieView
            source={require("../../../../assets/lottie/typing.json")}
            autoPlay
            loop
            style={{ width: 200, height: 100 }}
          />
        </View>
      )}

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#7B4019",
            borderRadius: 15,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginRight: 10,
          }}
        />
        <TouchableOpacity onPress={handleSend} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#007AFF" />
          ) : (
            <Ionicons name="paper-plane" size={33} color="#7B4019" />
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

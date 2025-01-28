import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ChatInput, ChatContainer, Container, IconWrapper } from "./Styles";
import { useState } from "react";

const ChatScreen = ({ handlePress }) => {
  const [message, setMessage] = useState("");
  return (
    <Container>
      <ChatContainer>
        <IconWrapper>
          <MaterialCommunityIcons name="volume-high" color="#000" size={24} />
        </IconWrapper>

        <ChatInput
          placeholder="Write your message"
          value={message}
          onChange={setMessage}
        />

        <IconWrapper onPress={handlePress}>
          <MaterialCommunityIcons name="send" color="#007AFF" size={24} />
        </IconWrapper>
      </ChatContainer>
    </Container>
  );
};

export default ChatScreen;

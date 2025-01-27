import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./Styles";

const CustomDatePicker = ({ value, onDateChange, placeholder, isFocused, onFocus, onBlur, icon }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false); // Close the date picker
    if (selectedDate) {
      onDateChange(selectedDate.toISOString().split("T")[0]); // Format date to YYYY-MM-DD and pass it back
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {icon && icon()}
        <Text style={{ color: value ? "#000" : "#6b7280" }}>
          {value ? value : placeholder}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default CustomDatePicker;

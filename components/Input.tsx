import { View, Text } from "react-native";
import React, { FC } from "react";
import { TextInput } from "react-native-gesture-handler";
import tw from "twrnc";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  children?: React.ReactNode;
  style?: any;
}

export const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  children,
  style,
}) => {
  return (
    <View style={tw`w-full ${style}`}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        placeholderTextColor={"#9ca3af"}
        selectionColor={"#9ca3af"}
        style={tw`bg-gray-50 text-[16px] border-gray-400 border text-gray-600 rounded-lg p-[16px]`}
      >
        {children}
      </TextInput>
    </View>
  );
};

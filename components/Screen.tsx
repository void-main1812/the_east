import { View, Text } from "react-native";
import React, { FC } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "expo-vector-icons";
import tw from "twrnc";

interface ScreenProps {
  label?: string;
  icon?: string;
  name?: string;
  props?: any;
}

export const Label: FC<ScreenProps> = ({ label, props }) => {
  return (
    <Text
      style={tw`${
        props.focused ? "text-amber-500" : "text-gray-400"
      } text-[16px] font-base mb-2 `}
    >
      {label}
    </Text>
  );
};

export const Icon: FC<ScreenProps> = ({ icon, props }) => {
  return (
    <View
      style={tw`h-[40px] w-[40px] flex justify-center items-center ${
        props.focused ? "bg-amber-50 rounded-lg" : ""
      }`}
    >
      <Ionicons
        name={icon}
        size={24}
        color={props.focused ? "#f59e0b" : "#b8b8b8"}
      />
    </View>
  );
};

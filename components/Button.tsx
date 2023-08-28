import { Text, Pressable, View } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { Ionicons } from "expo-vector-icons";

interface ButtonProps {
  text?: string;
  onPress?: () => void;
  secondary?: boolean;
  icon?: string;
  wfull?: boolean;
  ghost?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  onPress,
  secondary,
  icon,
  wfull,
  ghost,
}) => {
  return (
    <Pressable
      style={tw`${
        secondary
          ? "bg-zinc-100 border border-zinc-500 px-8 "
          : "bg-zinc-900 px-8 "
      } ${wfull ? "w-[100%]" : ""} ${
        ghost ? "px-4 bg-transparent" : ""
      } flex justify-center items-center py-4 rounded-md`}
      onPress={onPress}
    >
      <View style={tw`flex flex-row justify-center items-center gap-[20px]`}>
        {text && (
          <Text
            style={tw`${
              secondary ? " text-zinc-900 " : " text-zinc-100 "
            } text-base font-semibold`}
          >
            {text}
          </Text>
        )}
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={secondary ? "#18181b" : ghost ? "#18181b" : "#f4f4f5"}
          />
        )}
      </View>
    </Pressable>
  );
};

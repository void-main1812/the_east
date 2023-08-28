import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";

interface RadioButtonProps {
  label: string;
  onPress?: () => void;
  selected: boolean;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  onPress,
  selected,
}) => {
  return (
    <Pressable
      style={tw`flex flex-row justify-center items-center gap-2`}
      onPress={onPress}
    >
      <View
        style={tw`h-[12px] w-[12px] border-[2px] rounded-full ${
          selected
            ? "bg-amber-500 border-amber-400"
            : "bg-zinc-400 border-transparent"
        } `}
      />
      <Text
        style={tw`text-base font-normal ${
          selected ? "text-amber-500" : "text-zinc-400"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
};

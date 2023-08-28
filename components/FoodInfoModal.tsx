import { View, Text, Modal, Pressable } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { Ionicons } from "expo-vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface FoodInfoModalProps {
  description?: string;
  ingredients?: string[];
  onPress?: () => void;
}

export const FoodInfoModal: FC<FoodInfoModalProps> = ({
  description,
  ingredients,
  onPress,
}) => {
  return (
    <Modal animationType="fade" transparent>
      <View
        style={tw`h-[100%] w-[100%] bg-white/30 flex justify-center items-center`}
      >
        <View
          style={tw`p-8 flex gap-[24px] justify-start items-start shadow-2xl shadow-zinc-500 border-[2px] border-gray-200 bg-white w-[80%] rounded-md`}
        >
          {/* Detailed Description of food */}
          <View style={tw`flex gap-[16px]`}>
            <Text style={tw`text-xl font-black text-zinc-900`}>
              Description
            </Text>
            <Text style={tw`text-zinc-500 text-left`}>{description}</Text>
          </View>

          {/* Ingridients for the food */}
          <View style={tw`flex gap-[16px] w-[100%] `}>
            <Text style={tw`text-xl font-black text-zinc-900`}>
              Ingridients
            </Text>
            <View style={tw`flex flex-row flex-wrap gap-[8px] w-[100%]`}>
              {ingredients?.map((item) => {
                return (
                  <Text
                    style={tw`text-zinc-500 text-left py-[4px] px-[8px] bg-zinc-200 rounded-sm`}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
          </View>
          {/* Close Button for Modal */}
          <Pressable
            onPress={onPress}
            style={tw`h-[${hp(0.75)}] w-[${hp(
              0.75
            )}] flex justify-center items-center absolute right-8 rounded-sm border border-zinc-300 top-8 bg-zinc-100`}
          >
            <Ionicons name={"ios-close"} size={24} color={"#27272a"} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

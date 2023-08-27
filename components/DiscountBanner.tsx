import { View, Text } from "react-native";
import React, { FC } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

interface DiscountBannerProps {
  discount: number;
  image: string;
  code?: string;
}

export const DiscountBanner: FC<DiscountBannerProps> = ({
  discount,
  image,
  code,
}) => {
  return (
    <LinearGradient
      colors={["#3f3f46", "#18181b"]}
      end={{ x: 1, y: 0 }}
      style={tw`p-8 w-full rounded-md mx-8 flex flex-row justify-between items-center`}
    >
      <Image source={image} style={tw`h-[150px] w-[150px]`} />
      <View style={tw`flex gap-8 justify-end `}>
        <Text style={tw`text-gray-400 text-base font-light`}>
          Enjoy your favourate Food
        </Text>
        <View style={tw`flex flex-row gap-2`}>
          <Text style={tw`text-6xl font-black text-zinc-100`}>{discount}%</Text>
          <Text style={tw`font-light text-zinc-100`}>off</Text>
        </View>
        {code && (
          <Text
            style={tw`border border-white text-center border-dashed rounded-md p-2 text-base text-white`}
          >
            use code <Text style={tw`font-black`}>{code}</Text>
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

import { Image } from "expo-image";
import React, { useEffect } from "react";

import { Text, View } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }, []);

  return (
    <View style={tw`h-full w-full`}>
      <Image
        source={require("../assets/images/noodles.png")}
        style={tw`h-[80%] rounded-[30px] w-[100%]`}
        contentPosition={"left"}
        contentFit="cover"
      />
      <View style={tw`flex flex-col gap-[8px] p-8`}>
        <Text style={tw`text-amber-500 text-[24px] font-semibold`}>
          Flavours <Text style={tw`text-gray-400`}>from</Text>
        </Text>
        <Text style={tw`text-[72px] font-black text-gray-800`}>The East</Text>
      </View>
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import tw from "twrnc";
import { Button } from "../../../components/Button";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const index = () => {
  const router = useRouter();

  return (
    <View
      style={tw`h-[100%] w-[100%] bg-white flex gap[24px] justify-center items-center`}
    >
      <Image
        source={require("../../../assets/images/illstrations/undergoing.svg")}
        style={tw`h-[${hp(5)}] w-[${hp(10)}]`}
        contentFit="contain"
      />
      <Text style={tw`text-[24px] font-bold text-gray-800`}>
        Page Under Process
      </Text>
      <View style={tw`w-[80%]`}>
        <Button text="Go Home" onPress={() => router.push("/home")} />
      </View>
    </View>
  );
};

export default index;

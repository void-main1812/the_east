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
        source={require("../../../assets/images/illstrations/empty-cart.svg")}
        style={tw`h-[${hp(5)}] w-[${hp(10)}]`}
        contentFit="contain"
      />
      <Text style={tw`text-[24px] font-bold text-gray-800`}>Cart is Empty</Text>
      <View style={tw`w-[80%]`}>
        <Button
          wfull
          text="Add something to your cart"
          onPress={() => router.push("/home")}
        />
      </View>
    </View>
  );
};

export default index;

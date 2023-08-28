import { Stack, useRouter } from "expo-router";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Text, View } from "../components/Themed";
import { Image } from "expo-image";
import { Button } from "../components/Button";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={tw`h-[100%] w-[100%] flex gap[24px] justify-center items-center`}
      >
        <Image
          source={require("../assets/images/illstrations/Error.svg")}
          style={tw`h-[${hp(5)}] w-[${hp(10)}]`}
          contentFit="contain"
        />
        <Text style={tw`text-[24px] font-bold text-gray-800`}>
          Page not found
        </Text>
        <Button text="Go Home" onPress={() => router.push("/home")} />
      </View>
    </>
  );
}

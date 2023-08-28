import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";

import { Image } from "expo-image";
import { Input } from "../../../../components/Input";
import { Ionicons } from "expo-vector-icons";
import productData from "../../../../data/products";
import { ScrollView } from "react-native-gesture-handler";
import { DiscountBanner } from "../../../../components/DiscountBanner";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from "expo-router";

const index = () => {

  const router = useRouter()

  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`h-full w-full flex flex-col gap-[40px] p-8 items-center`}>
        {/* Heading */}
        <View style={tw`flex flex-col gap-[8px] w-full `}>
          <Text style={tw`text-amber-500 text-[24px] font-semibold`}>
            Flavours <Text style={tw`text-gray-400`}>from</Text>
          </Text>
          <Text style={tw`text-[72px] font-black text-gray-800`}>The East</Text>
        </View>
        <View style={tw`flex flex-row gap-2 mx-8`}>
          {/* Search */}
          <Input placeholder="Search any food item"></Input>

          {/* Filter */}
          <Pressable
            style={tw`p-4 bg-amber-500 rounded-lg shadow-lg shadow-amber-500`}
          >
            <Ionicons name="ios-funnel" size={24} color="white" />
          </Pressable>
        </View>

        {/* Products */}
        <View style={tw`flex flex-row justify-between flex-wrap gap-8 `}>
          {productData.map((item) => {
            return (
              <Pressable key={item.id} onPress={() => router.push(`/food/${item.id}`)} >
              <View style={tw`flex flex-col gap-1`} >
                <Image source={item.image} style={[{height: hp(16), width: hp(16)}, tw`rounded-md`]} />
                <Text
                  style={tw`p-2 bg-amber-500 text-white text-[16px] rounded-md absolute right-[${wp(1)}] top-2`}
                >
                  <Ionicons name="ios-star" color="white" size={16} />{" "}
                  {item.rating}
                </Text>
                <Text style={tw`text-2xl font-black text-zinc-900`}>
                  {item.name}
                </Text>
                <Text style={tw`text-base text-zinc-500`}>
                  {item.nationality} | $ {item.price}
                </Text>
              </View>
              </Pressable>
            );
          })}
        </View>

        {/* Discount Banner */}
        <DiscountBanner
          image={require("../../../../assets/images/food_items/banner_sushi.png")}
          discount={20}
          code="FD20YO"
        />
      </View>
    </ScrollView>
  );
};

export default index;

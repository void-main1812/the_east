import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";

import { Image } from "expo-image";
import { Input } from "../../../../components/Input";
import { Ionicons } from "expo-vector-icons";
import productData from "../../../../data/products";
import { ScrollView } from "react-native-gesture-handler";

const index = () => {
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

        {/* Search */}
        <Input placeholder="Search any food item"></Input>

        {/* Products */}
        <View style={tw`flex flex-row justify-between flex-wrap gap-8 `}>
          {productData.map((item) => {
            return (
              <View style={tw`flex flex-col gap-1`}>
                <Image source={item.image} style={tw`h-48 w-48 rounded-md`} />
                <Text style={tw`text-3xl font-black text-zinc-900`}>
                  {item.name}
                </Text>
                <Text style={tw`text-lg text-zinc-500`}>
                  {item.nationality} | $ {item.price}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Filter */}
        <Pressable
          style={tw`p-4 absolute bottom-[24px] right-[16px] bg-amber-500 rounded-lg shadow-lg shadow-amber-500`}
        >
          <Ionicons name="ios-funnel" size={24} color="white" />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  PikingDuck,
  FriedNoodles,
  Sushi,
  FriedRice,
} from "../../data/foodInfo";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "expo-vector-icons";
import { Button } from "../../components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { FoodInfoModal } from "../../components/FoodInfoModal";

const DetailsPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { id } = useLocalSearchParams();

  const router = useRouter();

  // mappping the id to the food to get the details
  const food =
    id == "1"
      ? PikingDuck
      : id == "2"
      ? FriedNoodles
      : id == "3"
      ? Sushi
      : FriedRice;

  // destructuring the food object
  const {
    description,
    image,
    suggestions,
    nationality,
    name,
    rating,
    price,
    ingredients,
  } = food;

  return (
    <ScrollView>
      <View style={tw`flex gap-[40px] mb-8`}>
        <Stack.Screen options={{ headerShown: false }} />
        <Image source={image} style={tw`w-[100%] h-[${hp(10)}] rounded-lg`} />

        {/* Name & Rating for the food */}
        <View style={tw`mx-[16px] flex gap-[32px] `}>
          <View style={tw`flex gap-[16px]`}>
            <Text style={tw`text-3xl font-black text-zinc-900`}>{name}</Text>
            <Text style={tw`text-zinc-400`}>
              {nationality} |{" "}
              <Text style={tw`text-amber-500`}>
                <Ionicons name={"ios-star"} size={16} /> {rating}
              </Text>
            </Text>
          </View>

          {/* Description */}
          <View style={tw`flex gap-[16px]`}>
            <Text style={tw`text-xl font-black text-zinc-900`}>
              Description
            </Text>
            <View style={tw`flex gap-[8px]`}>
              <Text style={tw`text-zinc-500 text-left h-[${hp(2.4)}]`}>
                {description}
              </Text>
              <Text
                onPress={() => setShowModal(true)}
                style={tw`text-amber-500`}
              >
                Read More
              </Text>
            </View>
          </View>

          {/* Price & Order Summary */}
          <Text style={tw`text-4xl font-black `}>$ {price}</Text>
          <View style={tw`flex flex-row gap-4`}>
            <Button text="Order Now" icon="ios-gift" />
            <Button text="Add to Cart" icon="ios-cart" secondary />
            <Button icon="ios-bookmark" ghost />
          </View>

          {/* Similar Items */}
          <View style={tw`flex gap-[16px]`}>
            <Text style={tw`text-xl font-black text-zinc-900`}>
              Similar Items
            </Text>
            <View style={tw`flex flex-row gap-8`}>
              {suggestions.map((item) => {
                return (
                  <Pressable
                    onPress={() => router.push(`/food/${item.id}`)}
                    key={item.id}
                  >
                    <Image
                      source={item.image}
                      style={tw`h-[${hp(2.75)}] w-[${hp(2.75)}] rounded-md`}
                    />
                    <Text style={tw`text-lg py-2 font-semibold text-zinc-800`}>
                      {item.name}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </View>

      {/* Home Button */}
      <Pressable
        style={tw`absolute h-[${hp(1)}] w-[${hp(
          1
        )}] m-2 bg-zinc-800 rounded-md flex justify-center items-center`}
        onPress={() => router.push("/home")}
      >
        <Ionicons name={"ios-arrow-back"} color={"white"} size={32} />
      </Pressable>

      {/* Food Description & ingridients modal */}
      {showModal && (
        <FoodInfoModal
          description={description}
          onPress={() => setShowModal(false)}
          ingredients={ingredients}
        />
      )}
    </ScrollView>
  );
};

export default DetailsPage;

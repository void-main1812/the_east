import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Stack } from 'expo-router'
import { Image } from 'expo-image'
import { PikingDuck, FriedNoodles, Sushi, FriedRice } from '../../data/foodInfo' 
import tw from "twrnc"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from 'expo-vector-icons'

const DetailsPage = () => {

  const {id} = useLocalSearchParams()

  const food = id == "1" ? PikingDuck : id == "2" ? FriedNoodles : id == "3" ? Sushi : FriedRice 

    const image = food.image
    const name = food.name
    const description = food.description
    const ingredients = food.ingredients
    const price = food.price
    const nationality = food.nationality
    const rating = food.rating

  return (
    <View style={tw`flex gap-[40px]`} >
      <Stack.Screen options={{headerShown: false}} />
      <Image source={image} style={tw`w-[100%] h-[${hp(10)}] rounded-lg`} />
      <View style={tw`mx-[16px] flex gap-[24px] `} >
        <View style={tw`flex gap-[16px]`} >
          <Text style={tw`text-3xl font-black text-zinc-900`} >{name}</Text>
          <Text style={tw`text-zinc-400`} >{nationality} |  <Text style={tw`text-amber-500`} ><Ionicons name={"ios-star"} size={16} />{" "}{rating}</Text></Text>
        </View>

        <View style={tw`flex gap-[16px]`}>
          <Text style={tw`text-xl font-black text-zinc-900`} >Description</Text>
          <View style={tw`flex gap-[8px]`} >
            <Text style={tw`text-zinc-500 text-left h-[${hp(2.4)}]`}>{description}</Text>
            <Text onPress={() => {}} style={tw`text-amber-500`} >Read More</Text>
          </View> 
        </View>
      </View>
    </View>
  )
}

export default DetailsPage
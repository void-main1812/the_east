import { View, Text, Modal, Pressable } from "react-native";
import React, { FC, useState } from "react";
import tw from "twrnc";
import { Ionicons } from "expo-vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Slider from "@react-native-community/slider";
import { RadioButton } from "./RadioButton";
import { Button } from "./Button";

interface FilterProps {
  onPress?: () => void;
  onApply?: () => void;
}

export const Filter: FC<FilterProps> = ({ onPress, onApply }) => {
  const [range, setRange] = useState<number>(0);
  const [selected, setSelected] = useState<string>("All");

  return (
    <Modal animationType="fade" transparent>
      <View
        style={tw`h-[100%] w-[100%] flex bg-white/30 justify-center items-center`}
      >
        <View
          style={tw`p-8 flex gap-[24px] justify-start items-start shadow-2xl shadow-zinc-500 border-[2px] border-gray-200 bg-white w-[80%] rounded-md`}
        >
          <Text style={tw`text-3xl font-bold text-zinc-800`}>Filters</Text>
          <View style={tw`h-[2px] w-[100%] bg-zinc-100`} />
          {/*----- Price Slider ------ */}
          <View style={tw`flex gap-[8px] w-[100%]`}>
            <Text style={tw`text-xl font-semibold text-zinc-800`}>
              Set Price
            </Text>
            <View style={tw`flex gap-2`}>
              <Slider
                onValueChange={(value) => setRange(Math.floor(value))}
                maximumValue={20}
                style={tw`w-[100%] h-4`}
                minimumTrackTintColor="#f59e0b"
                thumbTintColor="#d4d4d4"
              />
              <Text style={tw`text-sm font-light text-zinc-500`}>
                $ {range}
              </Text>
            </View>
          </View>

          {/* Food Category */}
          <View style={tw`flex gap-[8px]`}>
            <Text style={tw`text-xl font-semibold text-zinc-800`}>
              Category
            </Text>
            <View
              style={tw`flex flex-row gap-[16px] justify-start items-start`}
            >
              <RadioButton
                label="All"
                selected={selected === "All"}
                onPress={() => setSelected("All")}
              />
              <RadioButton
                label="Veg"
                selected={selected === "Veg"}
                onPress={() => setSelected("Veg")}
              />
              <RadioButton
                label="Non-Veg"
                selected={selected === "Non-Veg"}
                onPress={() => setSelected("Non-Veg")}
              />
            </View>
          </View>

          {/* Apply Button */}
          <Button text="Apply" onPress={onApply} wfull secondary />

          {/* Modal Close */}
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

import { Text, Pressable } from 'react-native'
import React, {FC} from 'react'
import tw from "twrnc"
import { Ionicons } from 'expo-vector-icons'

interface ButtonProps {
    text: string
    onPress?: () => void
    secondary?: boolean
    icon?: string
}

export const Button: FC<ButtonProps> = ({
    text,
    onPress,
    secondary,
    icon
}) => {
  return (
    <Pressable style={tw`${secondary ? "bg-zinc-100 border border-zinc-500" : "bg-zinc-900" } px-8 py-4 rounded-md`} onPress={onPress} >
        <Text style={tw`${secondary ? " text-zinc-900 ": " text-white "}`} >{text} {" "} <Ionicons name={icon} size={16} color={secondary ? " #f5f5f5" : " white "} /> </Text>
    </Pressable>
  )
}
import React from "react";
import {  Text, View, TouchableOpacity } from "react-native";
import Styles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";

export default function Heading({view, icon, title, headed, off, color = "blue", image, onPress}) {
  return (
    <View style={{...Styles.view, ...view}}>
        <TouchableOpacity  onPress={onPress}>
        {icon && (<MaterialCommunityIcons name={icon} size={14}  color={colors.lightGray}  />)}
        </TouchableOpacity>
        <Text style={{...Styles.Offers, ...headed}}>{title}</Text>
        {icon && (<MaterialCommunityIcons name={image} size={24}  color={colors[color]} style={{...Styles.Off, ...off}} />)}
    </View>
  );
}


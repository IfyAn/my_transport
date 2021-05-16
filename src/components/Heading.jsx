import React from "react";
import {  Text, View, TouchableOpacity } from "react-native";
import Styles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";

export default function Heading({view, icon, title, headed, onPress}) {
  return (
    <View style={{...Styles.view, ...view}}>
        <TouchableOpacity  onPress={onPress}>
        {icon && (<MaterialCommunityIcons name={icon} size={20}  color={colors.black}  />)}
        </TouchableOpacity>
        <Text style={{...Styles.Offer, ...headed}}>{title}</Text>
    </View>
  );
}


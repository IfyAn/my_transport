import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./colors";
import { wp, hp } from "../config/Responsive";

export default function ListItemSeperator({itemSeperator}) {
  return <View style={{...styles.separator, ...itemSeperator}} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: hp(7),
    backgroundColor: colors.light_grey,
  },
});

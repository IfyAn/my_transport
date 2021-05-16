import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import Styles from "../config/styles";
import colors from "./colors";
import ApText from "./ApText";
import { wp, hp } from "../config/Responsive";

export default function Title({title, first, second, third, left, center, right}) {
  return (
    <View style={{...Styles.title, ...title}}>
        <ApText textStyle={{...styles.first, ...first}}>{left}</ApText>
        <ApText textStyle={{...styles.second, ...second}}>{center}</ApText>
        <ApText textStyle={{...styles.second, ...third}}>{right}</ApText>
    </View>
  );
}

const styles = StyleSheet.create({
  first:{
    borderBottomColor:colors.blue, 
    borderBottomWidth: 2, 
    width:40, 
    top:hp(3), 
    color:colors.blue 
  },
  second:{
    color:colors.gray
  }
});

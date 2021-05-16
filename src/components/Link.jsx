import React from "react";
import { View, Text,  StyleSheet, TouchableOpacity } from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Link ({
  contain, head, title, middle, end,
  color='blue', onPress, image
}) {
  return (
    <View style={{...styles.container, ...contain}}>
          <TouchableOpacity  onPress={onPress} style={styles.icon}>
             <MaterialCommunityIcons name={image} size={28}  color={colors[color]} />
             <View style={styles.text}>
                <Text style={{...styles.head, ...head}}>{middle}</Text>
             </View>
          </TouchableOpacity>
          <Text style={{...styles.title, ...title}}>{end}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginLeft:wp(27),
    marginTop:hp(26),
  },
  head:{
    left:wp(16),
    paddingTop:hp(6),
    color:colors.newBlack,
    fontSize:15,
    lineHeight:hp(20)
  },
  icon:{
    flexDirection:'row',
  },
  title:{
    left:wp(127),
    paddingTop:hp(6),
    color:colors.newRed,
    fontSize:14,
    lineHeight:hp(20)
  },
  text:{
    height:hp(20)
  }
});


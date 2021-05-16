import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function Write({first, second, third, image, Contain, firstText, secondText, textSecond,thirdText}) {
  return (
    <View style={{...styles.container,...Contain}}> 
        <Text style={{...styles.first, ...firstText}}>{first}</Text>
        <View style={{...styles.secon, ...secondText}}>
            <Image source={image} style={styles.image} />
        <Text style={{...styles.second, ...textSecond}}>{second}</Text>
        </View>
        <Text style={{...styles.third, ...thirdText}}>{third}</Text>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop:hp(18.5),
    alignItems: 'center',
    marginLeft: wp(83),
    flexDirection:'row'
  },
 first:{
     fontSize:16,
     color:colors.newBlack,
 },
 image:{
   top:hp(5)
 },
 secon:{
     flexDirection:'row',   
     left:wp(73.96),
},
 second:{
    left:wp(2),
     fontSize:16,
     color:colors.newBlack,
 },
 third:{
    left:wp(184),
     fontSize:16,
     color:colors.newBlack,
 }
});



import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function Write({Contain, image, row, secondText, thirdText, second, third}) {
  return (
    <View style={{...styles.container,...Contain}}> 
      <Image source={image} style={styles.image} />
        <TouchableOpacity style={{...styles.row, ...row}}> 
         <Text style={{...styles.second, ...secondText}}>{second}</Text>
        <Text style={{...styles.third, ...thirdText}}>{third}</Text>   
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop:hp(53),
    //alignItems: 'center',
    marginLeft: wp(32),
    width:wp(311),
    height:hp(158),
    backgroundColor:colors.ash
  },
 image:{
   top:hp(5),
   left:wp(6),
   width:wp(297),
   height:hp(118)
 },
 row:{
     flexDirection:'row',   
    paddingLeft:wp(19),
    paddingTop:hp(8),
    justifyContent:'space-between'
},
 second:{
   fontSize:14,
    color:colors.brown,
    lineHeight:hp(16.5)
 },
 third:{
    fontSize:14,
    color:colors.grayThird,
    lineHeight:hp(16.5),
    paddingRight:hp(9)
 }
});



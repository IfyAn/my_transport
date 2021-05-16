import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";
import ListItemSeperator from "../components/ListItemSeperator"
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Management({
  first, second, third, fourth, fifth,
  image, Contain, box, iconic, avater, color='blue',
  firstText, secondText, thirdText ,fourthText,fifthText
}) {
  return (
    <View>
      <ListItemSeperator itemSeperator={styles.line} />
      <View style={{...styles.container,...Contain}}> 
        <Image source={image} style={styles.image} />
          <View style={{...styles.box, ...box }}>
            <Text style={{...styles.first, ...firstText}}>{first}</Text>
            <Text style={{...styles.second, ...secondText}}>{second}</Text>
            <Text style={{...styles.third, ...thirdText}}>{third}</Text>
            <Text style={{...styles.fourth, ...fourthText}}>{fourth}</Text>
          </View>
          <View style={styles.mark}>
            <MaterialCommunityIcons name={avater} size={24}  color={colors[color]} style={{...styles.iconic, ...iconic}} />
            <Text style={{...styles.fifth, ...fifthText}}>{fifth}</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop:hp(16),
    flexDirection:'row'
  },
  box:{
    paddingLeft:wp(18),
},
 first:{
     fontSize:18,
     height:hp(22),
     lineHeight:hp(21),
     color:colors.brown,
 },
 fifth:{
  paddingTop:hp(4),
  fontSize:13,
   lineHeight:hp(15.23),
  color:colors.grayThird,
 },
 fourth:{
  paddingTop:hp(4),
  fontSize:13,
   lineHeight:hp(15.23),
  color:colors.grayThird,
 },
 iconic:{
 paddingLeft:wp(6)
 },
 image:{
  width:wp(100),
  height:hp(100),
  paddingLeft: wp(23),
  borderRadius:50
 },
 line: {
  marginTop: wp(22),
 height:hp(7)
},
mark:{
  paddingLeft:wp(71)
},
 second:{
    paddingTop:hp(7),
    fontSize:13,
    lineHeight:hp(15.23),
    color:colors.grayThird,
 },
 third:{
  paddingTop:hp(4),
  fontSize:13,
   lineHeight:hp(15.23),
  color:colors.grayThird,
 }
});



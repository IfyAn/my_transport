import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";
import { MaterialCommunityIcons, AntDesign, Fontisto } from "@expo/vector-icons";
import ListItemSeperator from "./ListItemSeperator"

export default function Setting({
 second, third, image,
  icon, Card, textFourth, 
  firstText, textSecond, row,
  iconStyle,  seperator,onPress
}) {
  return (
    <View style={{...styles.container,...Card}}> 
         <View style={{...styles.first, ...firstText}}>
             <View style={styles.image}>
                  <Image source={image}  />
            </View>
            <View style={{...styles.row,...row}}>
                <Text style={{...styles.second, ...textSecond}}>{second}</Text>
                <Text style={{...styles.third, ...textFourth}}>{third}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={{...styles.icon, ...iconStyle}} >
            <Fontisto
                  name={icon}
                  color={colors.blue}
                  size={30}
                />     
            </TouchableOpacity>
        </View>
        <ListItemSeperator itemSeperator={{...styles.seperator, ...seperator}}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:hp(14),
    height:hp(65)
  },
 first:{
   flexDirection:'row',
   marginLeft:wp(18),
 },
 icon:{
  alignSelf:'center',
 left:wp(50)
 },
 image:{
   top:hp(7),
   width:wp(23),
   height:hp(23),
 },
 row:{
     left:wp(17)
 },
 second:{
     fontSize:15,
     fontWeight:'500',
     color:colors.newBlack,
 },
 seperator:{
    width:wp(330),
    height: hp(1),
    marginLeft:wp(18),
    marginTop:hp(17)
},
third:{
    fontSize:13,
    fontWeight:'200',
    color:colors.newGray
},
});

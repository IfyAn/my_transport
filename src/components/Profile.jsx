import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";
import ListItemSeperator from "./ListItemSeperator"

export default function Profile({
  first, second, third, image, avater, source, 
  icon,  fourth, fifth, Card, textFourth, 
  firstText, fifthText, secondText, textSecond, 
  iconStyle, seperat, seperator,onPress
}) {
  return (
    <View style={{...styles.container,...Card}}> 
        <Text style={{...styles.first, ...firstText}}>{first}</Text>
         <TouchableOpacity style={{...styles.secon, ...secondText}}>
             <View style={styles.image}>
               <Image source={image}  />
            </View>
            <View style={styles.row}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{...styles.second, ...textSecond}}>{second}</Text>
                  <Image source={source} style={styles.imag} />
               </View>
              <Text style={{...styles.fourth, ...textFourth}}>{third}</Text>
            </View>
            <Image source={icon} style={{...styles.icon, ...iconStyle}}  />
        </TouchableOpacity>
        <ListItemSeperator itemSeperator={{...styles.seperator, ...seperator}}  />
         <TouchableOpacity style={{...styles.secon, ...fifthText}}>
            <View style={styles.image}>
               <Image source={avater}  />
            </View>
            <View style={styles.row}>
                <Text style={{...styles.second, ...textSecond}}>{fourth}</Text>
                <Text style={{...styles.fourth, ...textFourth}}>{fifth}</Text>
            </View>
            <Image source={icon}  style={{...styles.icon, ...iconStyle}}  />
        </TouchableOpacity>
        <ListItemSeperator itemSeperator={{...styles.seperat,...seperat}}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:hp(18),
    height: hp(214),
  },
 first:{
     fontSize:18,
     color:colors.newBlack,
     marginLeft: wp(23),
    
 },
 fourth:{
     fontSize:13,
     fontWeight:'400',
     color:colors.newGray
 },
 icon:{
  alignSelf:'center',
  justifyContent:'flex-end'
 },
 imag:{
   top:hp(10),
   width:wp(18),
   height:hp(10),
 },
 image:{
   top:hp(6),
   width:wp(23),
   height:hp(23),
   marginLeft:wp(2.5),
   marginLeft: wp(23),
 },
 row:{
     left:wp(16)
 },
 secon:{
     flexDirection:'row',   
     marginTop:hp(24),
},
 second:{
     fontSize:15,
     fontWeight:'400',
     color:colors.newBlack,
 },
 seperat:{
    width:wp(375),
    height: hp(7),
    marginTop:hp(25)
},
 seperator:{
    width:wp(330),
    height: hp(1),
    marginLeft:wp(22),
    marginTop:hp(29)
},
 third:{
    left:wp(184),
     fontSize:16,
     color:colors.newBlack,
 }
});

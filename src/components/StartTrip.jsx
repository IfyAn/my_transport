import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ApText from "./ApText";
import Styles from "../config/styles"
import colors from "./colors";
import { wp, hp } from "../config/Responsive";

export default function StartTrip({
  container, right, center, left, 
  car, carText, Seat, price, touch, 
  untouch, start, cancel, head,
  middle, header, motor, seats,
  naira, begin, end, avater
}) {
  return (
    <View style={{...Styles.Containerr, ...container}}>
            <View style={Styles.detaill}>
                <ApText textStyle={{...styles.right, ...right}}>{head}</ApText>
                <Text style={{...styles.center, ...center}}>{middle}</Text>
                <Text style={{...styles.left, ...left}}>{header}</Text>
            </View>
            <View style={Styles.detaills}>
                <View style={Styles.imagee}>
                    <Image  source={avater} style={{...styles.car, ...car}} />
                    <ApText textStyle={{...styles.carText, ...carText}}>{motor}</ApText>
                </View>   
                <View style={Styles.Image} >
                    <Image  source={require("../../assets/front.png")}  />
                    <Text style={{...Styles.Seat, ...Seat}}>{seats}</Text>
                </View>
                    <Text style={{...styles.price, ...price}}>{naira}</Text>  
            </View>
            <View style={Styles.Wit}>
              <TouchableOpacity style={{...styles.touch, ...touch}} onPress={() =>console.log('Go ahead')}>
                <Text style={{...styles.start, ...start}}>{begin}</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.untouch, ...untouch}} onPress={() =>console.log('Cancel')}>
                <Text style={{...styles.cancel, ...cancel}}>{end}</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cancel:{
    alignSelf:'center',
    fontSize:12,
    color:colors.blue
    },
  car:{
    width:wp(43),
    height:hp(50)
  },
  carText:{
    width:wp(50),
    height:hp(44),
    left:5, 
    color:colors.gray
  },
  center:{
    fontSize:14,
    left:wp(70),
    lineHeight:hp(16.4),
    color:colors.newBlack,
    top:hp(2)
  },
  left:{
    fontWeight:'bold', 
    fontSize:17,
    left:wp(140),
    lineHeight:hp(22),
    color:colors.newBlack,
  },
  price:{
    top:hp(20),
    color:colors.gray,
    left:wp(80),
    fontSize:17
  },
  right:{
  fontWeight:'bold', 
  fontSize:17,
  color:colors.newBlack,
  lineHeight:hp(22)
},
start:{
  alignSelf:'center',
  justifyContent:'center',
  fontSize:12,
  color:colors.white
  },
touch:{  
  height:hp(35), 
  width:wp(134), 
  backgroundColor: colors.blue,  
  borderRadius: wp(5),
  justifyContent:'center',
},
untouch:{
  height:hp(35), 
  width:wp(134), 
  backgroundColor: colors.white, 
  borderWidth: 1, 
  borderColor: colors.blue,
  borderRadius: wp(5),
  left:wp(35),
  justifyContent:'center',
}
})
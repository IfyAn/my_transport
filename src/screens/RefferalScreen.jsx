import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import colors from "../components/colors";
import AppButton from "../components/AppButton";
import { wp, hp } from "../config/Responsive";

export default function RefferalScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/art.png")}  />
      </View>
      <View style={styles.styleText} >
        <Text style={styles.texts}>Invite your Friends and Earn upto N1000 off your Next trip with us</Text>
      </View>
      <Text style={styles.text}>
        When your friend sign up with your refferal code, you can receive up to N1000 daily
      </Text>
      <View style={styles.button}>
              <AppButton
               buttonStyle={styles.buttonStyle}    
               onPress={() =>console.log('Go ahead')}
               title='0567893'
               textStyle={styles.textButton}
                 />
              <AppButton
                buttonStyle={styles.styleButton}
                onPress={() =>console.log('Cancel')}
                title='Share'
                textStyle={styles.buttonText}
              />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    marginTop:hp(88),
    marginLeft:wp(45),
  },
  buttonStyle:{
    height:hp(45), 
    width:wp(285),
    backgroundColor: colors.rgba_blue,  
    borderRadius:8
  },
  buttonText:{
    fontSize:16,
    lineHeight:18.8
  },
  container: {
    flex: 1,
  },
  image:{
    marginTop:hp(176),
    marginLeft:wp(92),
    width:wp(190),
    height:hp(190)
  },
  styleButton:{ 
    height:hp(45), 
    width:wp(285),
    backgroundColor: colors.blue, 
    borderRadius:8
  },
  styleText:{
    marginLeft:wp(37),
    marginTop:hp(40),
    height:hp(46),
    width:wp(320)
  },
  text:{
    marginLeft:wp(60),
    marginTop:hp(17),
    height:hp(64),
    width:wp(255),
    color:colors.grayThird
  },
  textButton:{
    color:colors.blue,
    fontSize:16,
    lineHeight:18.8
  },
  texts:{
    fontSize: 18,
    color:colors.newBlack,
    lineHeight:21,
    

  }
});


import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import colors from "../components/colors";
import Headed from "../components/Headed";
import { wp, hp } from "../config/Responsive";

export default function DriverLicenseScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Headed 
        icon='keyboard-backspace' title='Add a Driver License' image='information' 
        headed={styles.view}
        onPress={() => navigation.navigate("Scheduled")} /> 
        <ScrollView>
        <Text  style={styles.styling} >Vehicle Image</Text>
        <Text  style={styles.text} >(Add Two images, may display license plate)</Text>
        
        <TouchableOpacity> 
            <Image source={require("../../assets/cross.png")} style={styles.box}  />
        </TouchableOpacity>
        
            <Text style={styles.firstName}>Card Number</Text>
            <TextInput placeholder='123 456 7890' style={styles.boxx} />
            <Text style={styles.firstNames}>Expiry Date</Text>
            <TextInput placeholder='DD/MM/YYYY' style={styles.boxx} />
            
        <TouchableOpacity style={styles.icon} >
        <Text  style={styles.icons} >Continue</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box:{
    width:wp(343),
    height:hp(137),
     marginLeft:wp(16),
     marginRight:wp(16),
      marginTop:hp(7),
    
  },
  boxx:{
    marginTop:hp(6),
    marginLeft:wp(16),
    width:wp(335),
    height:hp(46),
    backgroundColor:colors.ground,
    borderRadius:5
  },
  firstName:{
    height: hp(20),
    marginLeft:wp(16),
    marginTop:hp(41),
    fontSize:15,
    lineHeight:hp(20)
  },
  firstNames:{
    height: hp(20),
    marginLeft:wp(20),
    marginTop:hp(10),
    fontSize:15,
    lineHeight:hp(20)
  },
  icon:{
    marginLeft:wp(16),
    alignContent:'center',
    marginTop:hp(245),
    marginBottom:hp(36),
    width:wp(346),
    height:hp(50),
    backgroundColor:colors.blue,
    justifyContent:'center',
    borderRadius:hp(10)
  },
  icons:{
    fontSize:17,
    fontWeight:'600',
    lineHeight: 22,
    alignSelf:'center',
    color:colors.white
  },
  image:{
      height:hp(90),
      width:wp(90)
  },
  styling:{
      marginTop:hp(18),
      marginLeft:wp(16),
      fontSize:15,
      lineHeight:20,
      color: '#4F4F4F'
  },
  text:{
      marginTop:hp(2),
      marginLeft:wp(16),
      fontSize:13,
      lineHeight:18,
      color: colors.lowGray,
      opacity:6
  },
  view:{
    fontSize:18,
    color:colors.brown,
}
});


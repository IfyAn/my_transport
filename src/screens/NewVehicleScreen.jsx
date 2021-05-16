import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import colors from "../components/colors";
import Headed from "../components/Headed";
import { wp, hp } from "../config/Responsive";

export default function NewVehicleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Headed 
        icon='keyboard-backspace' title='Add a New Vehicle' image='information' 
        headed={styles.view}
        onPress={() => navigation.navigate("Scheduled")} /> 
        <ScrollView>
        <Text  style={styles.styling} >Vehicle Image</Text>
        <Text  style={styles.text} >(Add Two images, may display license plate)</Text>
        <View  style={styles.box} >
        <TouchableOpacity> 
            <Image source={require("../../assets/bigplus.png")} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.image} > 
            <Image source={require("../../assets/bigplus.png")} />
        </TouchableOpacity> 
        <TouchableOpacity  style={styles.image} > 
            <Image source={require("../../assets/bigplus.png")}  />
        </TouchableOpacity> 
        </View>
            <Text style={styles.firstName}>Vehicle Brand</Text>
            <TextInput placeholder='Toyota' style={styles.boxx} />
            <Text style={styles.firstNames}>Model</Text>
            <TextInput placeholder='Camry' style={styles.boxx} />
            <Text style={styles.firstNames}>Year</Text>
            <TextInput placeholder=' 2018' style={styles.boxx} />
            <Text style={styles.firstNames}>License Plate</Text>
            <TextInput placeholder=' 430 2A5@' style={styles.boxx} />
            <Text style={styles.firstNames}>Color</Text>
            <TextInput placeholder=' Blue' style={styles.boxx} />
            <Text style={styles.firstNames}>Number of Seats</Text>
            <TextInput placeholder=' 7 seats' style={styles.boxx} />
        <TouchableOpacity style={styles.icon} >
        <Text  style={styles.icons} >Add Vehicle</Text>
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
      flexDirection:'row',
     // marginLeft:wp(33),
      marginTop:hp(7),
      justifyContent:'space-evenly'
  },
  boxx:{
    marginTop:hp(6),
    marginLeft:wp(16),
    width:wp(335),
    height:hp(46),
    backgroundColor:colors.lightAsh,
    borderRadius:5
  },
  firstName:{
    height: hp(20),
    marginLeft:wp(16),
    marginTop:hp(31),
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
    marginTop:hp(47),
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


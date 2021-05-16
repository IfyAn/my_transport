import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator"
import Title from "../components/Title";
import StartTrip from "../components/StartTrip";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function SecondScheduledScreen() {
  return (
    <View style={styles.container}>
    <Heading  image={require("../../assets/Menu.png")}  title='Schedule' />
    <Title left='All' center='Scheduled' right='Completed' first={styles.first} second={styles.second} />
    <StartTrip head='Festac' middle='7.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='5 seats' naira='N500' begin='Start Trip' end='Cancel Trip'
      />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTrip head='Festac' middle='7.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='5 seats' naira='N500' begin='Start Trip' end='Cancel Trip'
      />
     <ListItemSeperator itemSeperator={styles.line} />
     <View style={styles.view}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:{
    color:colors.gray,
    borderBottomWidth: 0, 
  },
  line: {
    marginTop: wp(13)
  },
  second:{
    borderBottomColor:colors.blue, 
    borderBottomWidth: 3, 
    width:90, 
    top:hp(3), 
    color:colors.blue 
  },
  view:{
    backgroundColor:colors.ash,
     height:hp(221), 
     //marginTop:hp(7)
    }
});

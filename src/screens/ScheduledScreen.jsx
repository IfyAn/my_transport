import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator"
import Title from "../components/Title";
import StartTrip from "../components/StartTrip";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";


export default function ScheduledScreen() {
  return (
    <View style={styles.container}>
    <Heading  icon='menu' title='Scheduled' />
     <Title left='All' center='Scheduled' right='Completed' />
     <StartTrip head='Festac' middle='7.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='5 seats' naira='N500' begin='Start Trip' end='Cancel Trip'
      />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTrip container={styles.contain} untouch={styles.untouch} cancel={{color:colors.lightGray}}
     head='Festac' middle='6.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Honda'
      seats='4 seats' naira='N600' begin='Start Trip' end='Cancel Trip'
     />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTrip container={styles.contain} untouch={styles.untouch} cancel={{color:colors.lightGray}} 
     head='Ojo' middle='9.00pm' header='Obalande' touch={styles.touch}
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='4 seats' naira='N1000' begin='Start Trip' end='Cancel Trip'
     />
     <ListItemSeperator itemSeperator={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  contain:{
    marginTop:hp(10),
  },
  container: {
    flex: 1,
  },
  line: {
    marginTop: wp(6)
  },
  touch:{ 
  backgroundColor: colors.lightGray,
  },
  untouch:{ 
  borderColor: colors.lightGray,
  },
});

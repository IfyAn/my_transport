import React from "react";
import { View,  StyleSheet, } from "react-native";
import Heading from "../components/Heading";
import Title from "../components/Title";
import ListItemSeperator from "../components/ListItemSeperator"
import StartTrip from "../components/StartTrip";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function ThirdScheduledScreen() {
  return (
    <View style={styles.container}>
     <Heading  image={require("../../assets/Menu.png")}  title='Schedule' />
     <Title left='All' center='Scheduled' right='Completed' first={styles.first} third={styles.third} />
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
  third:{
    borderBottomColor:colors.blue, 
    borderBottomWidth: 3, 
    width:90, 
    top:hp(3), 
    color:colors.blue 
  },
  touch:{ 
    backgroundColor: colors.lightGray,
    },
    untouch:{ 
    borderColor: colors.lightGray,
    },
});

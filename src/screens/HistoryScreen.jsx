import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import colors from "../components/colors";
import ListItemSeperator from "../components/ListItemSeperator"
import Heading from "../components/Heading";
import Title from '../components/Title';
import { wp, hp } from "../config/Responsive";

export default function HistoryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading icon='menu' title='Ride History' headed={styles.head} onPress={() => navigation.navigate("Scheduled")} />
      <Title left='All' center='Intercity' right='Interstate' />
      <View style={styles.seperators}>
       <ListItemSeperator itemSeperator={styles.line} />
       <ListItemSeperator itemSeperator={styles.lines} />
       </View>
      <View style={styles.box} >
        <Text style={styles.ApText}>No rides yet</Text>
      </View>
      <View style={styles.boxes} >
        <Text style={styles.AppText}>You don't have any  completed ride for us to show yet. Take your first ride today</Text>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ApText: {
    fontSize: 18,
    color: colors.newBlack,
    lineHeight: 20,
    fontWeight:'600',
  },
  AppText: {
    fontSize: 13,
    color: colors.grayThird,
    lineHeight: 15.3,
    fontWeight:'400',
    alignSelf:'center'
  },
  box: {
    height:hp(22),
    marginTop: hp(184),
    marginLeft: wp(138),
  },
  boxes: {
   width:wp(280),
    height:hp(22),
    marginTop: hp(12),
    marginLeft: wp(47),
  },
  container: {
    flex: 1,
  },  
  head:{
    left:wp(24)
  },
  line: {
    height:hp(73),
    width:wp(46),
    backgroundColor:colors.grey
  },
  lines: {
    height:hp(73),
    width:wp(46),
    left:wp(16),
    backgroundColor:colors.grey
  },
  seperators: {
    flexDirection:'row',
    marginLeft: wp(23),
    marginTop:hp(13.5),
  },
});


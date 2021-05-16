import React from "react";
import { View, Text, Button, StyleSheet, Image, SafeAreaView } from "react-native";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";
import ListItemSeperator from "../components/ListItemSeperator"
import Heading from "../components/Heading";
import Link from "../components/Link";

export default function LinkedScreen () {
  return (
    <SafeAreaView style={styles.container}>
       <Heading icon='keyboard-backspace' title='Linked accounts' headed={styles.view}
        onPress={() => navigation.navigate("Scheduled")} 
        />
       <Link image='facebook' middle='Balogun Adeleke' end='Remove' />
       <ListItemSeperator itemSeperator={styles.line} />
       <Link image='transit-connection' middle='Connect to facebook'  contain={styles.contain} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contain:{
        marginTop:hp(16)
    },
  container: {
    flex: 1,
  },
  line: {
    marginTop: wp(16),
    marginLeft:wp(16),
    width:wp(342),
    height:hp(1)
  },
  view:{
      left:wp(26),
      fontSize:18,
      top:hp(0)
  }
});


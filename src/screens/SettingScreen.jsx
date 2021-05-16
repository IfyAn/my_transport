import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import colors from "../components/colors";
import ListItemSeperator from "../components/ListItemSeperator"
import Setting from "../components/Setting";
import Heading from "../components/Heading";
import { wp, hp } from "../config/Responsive";
export default function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading icon='menu' title='Settings' onPress={() => navigation.navigate("Scheduled")} />
      <ListItemSeperator itemSeperator={styles.line} />
      <Setting
        second='Balogun' third='August 2020' image={require("../../assets/up.png")}
        onPress />
      <Setting
        second='myapp@gmail.com' image={require("../../assets/up.png")}
        textSecond={{ top: wp(8) }}
        onPress />
      <Setting
        second='+23490 080 0909 ' image={require("../../assets/up.png")}
        textSecond={{ top: wp(8) }}
        onPress />
      <Setting
        second='Driving Profile' third='Sign up as a Driver' image={require("../../assets/up.png")}
        onPress />
      <Setting
        second='Redeem' image={require("../../assets/up.png")}
        textSecond={{ top: wp(8) }} seperator={styles.seperator}
        onPress />
      <View style={styles.textBox}>
        <Text style={styles.text}>System Settings</Text>
      </View>
      <Setting
        second='Dark Mode' image={require("../../assets/up.png")}
        textSecond={{ top: wp(8) }} seperator={styles.seperator} icon='toggle-on'
        iconStyle={styles.iconStyle} firstText={styles.firstText} seperator={styles.seperators}
        onPress />
      <Setting
        second='Push Notifications' image={require("../../assets/up.png")}
        textSecond={{ top: wp(8) }} seperator={styles.seperator} icon='toggle-on'
        iconStyle={styles.iconStyles} seperator={styles.seperate}
        onPress />
      <View style={styles.card} >
        <Text style={styles.ApText}>Legal</Text>
        <Text style={styles.AppText}>Read out terms and conditions</Text>
      </View>
      <ListItemSeperator itemSeperator={styles.line} />
      <View style={styles.box} >
        <Text style={styles.ApText}>Log out</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ApText: {
    fontSize: 15,
    color: colors.newBlack,
    lineHeight: 20
  },
  AppText: {
    fontSize: 13,
    color: colors.newGray,
    lineHeight: 20
  },
  box: {
    marginTop: hp(15),
    marginLeft: wp(18),
  },
  card: {
    marginTop: hp(22),
    marginLeft: wp(18),
  },
  container: {
    flex: 1,
  },
  firstText: {
    marginTop: hp(8)
  },
  iconStyle: {
    paddingLeft: wp(173),
    paddingRight: wp(18)
  },
  iconStyles: {
    paddingLeft: wp(118),
    paddingRight: wp(18)
  },
  line: {
    marginTop: wp(22)
  },
  seperate: {
    height: hp(3),
    width: wp(375),
  },
  seperator: {
    width: wp(375),
    height: hp(7),
    marginTop: hp(15)
  },
  seperators: {
    width: wp(330)
  },
  text: {
    fontSize: 18,
    color: colors.newBlack,
    letterSpacing: 0.1,
    fontWeight: '600'
  },
  textBox: {
    marginTop: hp(16),
    marginLeft: wp(16),
    width: wp(140),
    height: hp(20)
  }
});


import React from "react";
import { View, Text,  FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import colors from "../components/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Management from "../components/Management"
import Headed from "../components/Headed";
import { wp, hp } from "../config/Responsive";

const manage = [
  {
    id: 1,
    image: require("../../assets/bigcar.png"),
    first:'Mazda',
    second: "License: 43A 257.0",
    third:'Booking type: 4 seats',
    fourth:'Color: Black',
   avater: "checkbox-marked-circle",
    fifth:'Active'
  },
  {
    id: 2,
    image: require("../../assets/vehicle.png"),
    first:'Innoson',
    second: "License: 43A 257.0",
    third:'Booking type: 10 seats',
    fourth:'Color: Black',
   avater: "checkbox-blank-circle-outline",
    fifth:'Inactive'  
  },
];

export default function ManagementScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Headed 
        icon='keyboard-backspace' title='Vehicle Management' image='information' 
        headed={styles.view}
        onPress={() => navigation.navigate("Scheduled")} /> 
      <View>
        <FlatList
          data={manage}
          renderItem={({ item }) => (
            <Management
              image={item.image}
              first={item.first}
              second={item.second}
              third={item.third}
              fourth={item.fourth}
              avater={item.avater}
              fifth={item.fifth}
              onPress={() => setModalVisible(true)}
            />
          )}
        />
        </View>
        <TouchableOpacity style={styles.icon} >
        <MaterialCommunityIcons name='plus-circle' size={60}  color={colors.blue} />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon:{
    marginLeft:wp(157),
    alignContent:'flex-end',
    marginTop:hp(347)
  },
  view:{
    fontSize:18,
    color:colors.brown,
}
});


import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList,} from "react-native";
import colors from "../components/colors";
import Headed from "../components/Headed";
import Document from "../components/Document";

const information = [
  {
    id: 1, 
    second:'Identification Cards',
    third:'Edit',
    image: require("../../assets/Rectangle.png"),
    
  },  
  {
    id: 2, 
    second:'Driver License',
    third:'Edit',
    image: require("../../assets/Rectangle.png"),
    
  },  
];

export default function DocumentScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Headed 
        icon='keyboard-backspace' title='Document Management' 
        headed={styles.view}
        onPress={() => navigation.navigate("Scheduled")} /> 
        <View>
            <FlatList
              data={information}
              renderItem={({ item }) => (
              <Document
              second={item.second}
              third={item.third}
              image={item.image}
              onPress={() =>console.log('show')}
            />
          )}
          /> 
           </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view:{
    fontSize:18,
    color:colors.brown,
}
});


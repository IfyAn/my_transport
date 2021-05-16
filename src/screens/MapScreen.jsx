import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,  Button, TouchableOpacity, SafeAreaView} from 'react-native';
import AppText from "../components/AppText";
import InputText from "../components/InputText";
import AppMap from "../components/AppMap";
import colors from "../components/colors";
import Styles from "../config/styles"
import AppButton from "../components/AppButton";


export default function MapScreen() {
    return (
        <SafeAreaView >
            {/* <View style={styles.container}>
                <AppMap />
            </View> */}
            
            <ScrollView >
            <AppMap />
             <View style={styles.text}>
                <Text style={Styles.tests}>Where To?</Text>
            </View>
            <View>
              <InputText style={Styles.search} placeholder='Enter Address' image={require("../../assets/search.png") } />
            </View>
            <View style={Styles.work}>
              <View style={Styles.home}>
              <Image source={require("../../assets/home1.png")} />
              <Text style={Styles.homes}> Destination</Text>
              </View>
              {/* <View style={Styles.home}>
              <Image source={require("../../assets/work.png")} />
              <Text style={Styles.homes}> Work Address</Text>
              </View> */}
            </View>
          <Text style={Styles.word}>Recent</Text>
            <View style={Styles.address}>
              <Image source={require("../../assets/timing.png")}  />
              <Text style={Styles.homes}>6391 Elgin St. Celina,Delaware 10299</Text>
              </View>
              <View style={styles.ride}>
                <TouchableOpacity style={Styles.customBtn1}>
                    <Text style={Styles.customText}>Book Ride</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
    text:{
      paddingTop: 30,
      paddingLeft: 25
    },
    texts:{
      fontSize: 23,
      fontWeight: "bold"
    },
    ride:{
      justifyContent:'center',
      alignItems:'center'
    }
  });




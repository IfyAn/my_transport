import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput} from 'react-native';
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator"
import AppButton from "../components/AppButton"
import Styles from "../config/styles";
import { wp, hp } from "../config/Responsive";
import colors from "../components/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EditScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <Heading icon='keyboard-backspace'  title='Edit info'  headed={styles.view}
           onPress={() =>console.log('Go ahead')}  
           />
           <Text style={Styles.profileText}>Profile photo</Text>
           <View style={Styles.avater}>
              <Image source={require("../../assets/round.png")} />
            </View>
             <ListItemSeperator itemSeperator={styles.seperator}  />
             <Text style={Styles.personalText}>Personal details</Text>
             <Text style={styles.firstName}>First Name</Text>
             <TextInput placeholder='First Name' style={styles.box} />
             <Text style={styles.firstNames}>Last Name</Text>
             <TextInput placeholder='Last Name' style={styles.box} />
             <Text style={styles.firstNames}>Email</Text>
             <TextInput placeholder='Email' style={styles.box} />
             <Text style={styles.firstNames}>Phone</Text>
             <TextInput placeholder='Phone' style={styles.box} />
             <AppButton buttonStyle={styles.buttonStyle} title='Update Details'
                    textStyle={styles.textStyle}
              />
           {/* <TouchableOpacity style={styles.buttonStyle}>
             <Text></Text>
           </TouchableOpacity> */}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  box:{
    marginTop:hp(6),
    marginLeft:wp(20),
    width:wp(335),
    height:hp(46),
    backgroundColor:colors.lightAsh,
    borderRadius:5
  },
  buttonStyle:{
    top:hp(82),
    width:wp(343),
    height:hp(50),
    left:wp(16),
    backgroundColor:colors.blue
  },
    container: {
        flex: 1,
      },
      firstName:{
        height: hp(20),
        marginLeft:wp(20),
        marginTop:hp(22),
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
      seperator:{
          width:wp(375),
          height: hp(7),
          marginTop:hp(18)
      },
      textStyle:{
        fontSize:17,
        color:colors.white,
        fontWeight:'600',
        lineHeight:22
      },
    view:{
      left:wp(31),
      fontSize:18,
      bottom:hp(3),
      color:colors.brown,
  }
  });
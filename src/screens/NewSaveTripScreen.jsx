import React, { useState }from 'react';
import { View, Text, StyleSheet, Image, Modal,  TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import Styles from "../config/styles";
import colors from "../components/colors";
import InputText from "../components/InputText";
import ApText from '../components/ApText';
import AppButton from "../components/AppButton";
import Headed from "../components/Headed";
import { wp, hp } from "../config/Responsive"

export default function NewSaveTripScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.Image}>
               <Image source={require("../../assets/trip.png")}  />
            </View>
            <Text style={styles.modalText}>New Trip Save</Text>
            <View style={styles.modalStyle}>
              <Text style={styles.textStyle}>Your new saved trip has been created you can 
                activate from the saved trips panel from the sidebar</Text>
            </View>
              <AppButton buttonStyle={styles.openButton} title='Done' textStyle={{fontSize:12}}
              onPress={() => { setModalVisible(!modalVisible) }}
               />
            </View>
        </View>
      </Modal>
      <Headed icon='keyboard-backspace' title='New Saved Trip' onPress={() => navigation.navigate("Scheduled")}  />
     <View style={Styles.seperator1}>
            <View style={Styles.Icon1}>
                <View style={{paddingTop:20}}>
                <Image source={require("../../assets/fieldCircle.png")}  />
                </View>
                <View style={{width: 300, alignItems: 'center'}}>
                <InputText  placeholder= 'Enter Your Starting Post'   boxStyle={{height:50, width: 280, right:10}} />
                </View>
            </View>
            <View style={{paddingLeft:38, paddingTop:35}}>
            <Image source={require("../../assets/dotLine.png")}  />
            </View>
            <View style={Styles.Icon2}>
                <View style={{paddingTop:20}}>
                <Image source={require("../../assets/inlineCircle.png")}  />
                </View>
                <View style={{width: 300, alignItems: 'center'}}>
                 <InputText  placeholder= 'Enter Drop off Post'  boxStyle={{height:50, width: 280, right:10}}/>
                </View>
             </View>
            </View>
        <Text style={styles.depart}>Departure Time</Text>
        <View style={styles.departure}>
            <Image source={require("../../assets/timee.png")} style={{top:hp(7)}}/>
            <View style={styles.departCon}>
              <TextInput />
              <View style={styles.line} />
              <Image source={require("../../assets/calender.png")} style={{left:hp(12.5)}} />
            </View>
        </View>
        <Text style={styles.vehicle}>Vehicle (change vehicle from profile)</Text>
        <View style={styles.departure}>
            <Image source={require("../../assets/timee.png")} style={{top:hp(7)}}/>
            <View style={styles.departCon}>
              <TextInput placeholder='Audi 950 2020' />
            </View>
        </View>
        <Text style={styles.vehicles}>Available Seats</Text>
        <View style={styles.departure}>
            <Image source={require("../../assets/timee.png")} style={{top:hp(7)}}/>
            <View style={styles.departCon}>
              <TextInput placeholder='Select available seat' />
            </View>
        </View>
        <Text style={styles.vehicles}>Price</Text>
        <View style={styles.departure}>
            <Image source={require("../../assets/timee.png")} style={{top:hp(7)}}/>
            <View style={styles.departCon}>
              <TextInput placeholder='Enter Desire fare' />
            </View>
        </View>
        <Text style={styles.vehicles}>Any Notes</Text>
        <View style={styles.departure}>
            <Image source={require("../../assets/timee.png")} style={{top:hp(7)}}/>
            <View style={styles.departContainer}>
              <TextInput placeholder='Enter additional Notes' />
            </View>
        </View>
        <TouchableOpacity style={styles.button}  onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:colors.blue,
    width:wp(343),
    height:hp(50),
    marginTop:hp(44),
    borderRadius:5
  },
  buttonText:{
    color:colors.white,
    fontSize:17,
    fontWeight:'600',
    lineHeight:22
  },
centeredView: {
    flex: 1,
    shadowColor: colors.primary,
     backgroundColor:colors.newColors,
    opacity:0.8
  },
  container:{
    height:hp(883),
    flex:1
  },
depart:{
  marginTop:hp(37),
  marginLeft:wp(19),
  lineHeight:22,
  fontSize:17,
  color:colors.newColor
},
departCon:{
  flexDirection:'row', 
  paddingLeft:wp(16),
  borderRadius:5,
  height:hp(46),
  width:wp(299),
  left:wp(16),
  backgroundColor:colors.box
},
departContainer:{
  flexDirection:'row', 
  paddingLeft:wp(16),
  borderRadius:5,
  height:hp(116),
  width:wp(299),
  left:wp(16),
  backgroundColor:colors.box
},
departure:{
flexDirection: 'row', 
marginTop:hp(10), 
marginLeft:wp(16)
},
Image:{
  width:wp(36),
  height:hp(48),
  marginTop:hp(32),
  marginLeft:wp(151)
},
line:{
  borderStyle: 'dotted',
  borderEndWidth:1,
  borderEndColor:colors.blue,
  height:hp(35.5),
  alignSelf:'center',
  paddingLeft:wp(210)
},
  openButton:{   
    width:wp(134),
    height:hp(39), 
    backgroundColor: colors.blue, 
    alignSelf:'center'
},
  textStyle: {
    color:colors.new_gray,
    fontSize:15,
    textAlign: "center",
    lineHeight:20
  },
  modalText: {
    marginTop: hp(18.5),
    textAlign: "center",
    fontSize:20,
    lineHeight:23,
    color:colors.newBlack
  },
  modalStyle:{
    width:wp(284),
    height:hp(60),
    marginLeft:wp(25),
    marginTop:hp(7)
  },
  modalView:{
    marginTop:hp(266),
    marginLeft:wp(19),
    backgroundColor: "white",
    borderRadius: 10,
    height: hp(345),
    width:wp(336),
    // justifyContent: 'center',
    // alignItems: "center",
  },
  vehicle:{
    marginLeft:wp(19),
    marginTop:hp(19),
    fontSize:15,
    lineHeight:22
  },
  vehicles:{
    marginLeft:wp(19),
    marginTop:hp(19),
    fontSize:17,
    lineHeight:22
  }
});




import React, {useState, useContext} from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { wp, hp } from "../config/Responsive";
import colors from "../components/colors";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'

export default function DrawerContent(props) {
        const [user, setUser] = useContext(UserContext)
      const firebase=useContext(FirebaseContext)

      const logOut=async()=>{
        const loggedOut=await firebase.logOut();
        if(loggedOut){
          setUser((state)=>({...state, isLoggedIn:false}))
        }
      }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} >
        <View style={styles.drawerContent}>
          <View style={styles.userInfo}>
            <View style={styles.info}>
              {/* <Avatar.Image source={require("../../assets/eat.png")} size={52} /> */}
              <Avatar.Image source={
                user.profilePhotoUrl === 'default'
               ? require("../../assets/eat.png")
               : {uri:user.profilePhotoUrl}
                } size={52} />
              <View style={{ flexDirection: "column" }}>
                <View style={styles.titleBox}>
                   <Title style={styles.title}>Coldy Fisher</Title>
                </View>
                <Caption style={styles.caption}>View profile</Caption>
              </View>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()} >
            <Image source={require("../../assets/MenuX.png")}  />
            </TouchableOpacity>
            </View>
          </View> 
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({  size }) => (
                <MaterialCommunityIcons
                  name='car'
                  color={colors.newGray}
                  size={size}
                />
              )}
              label='Interstate Booking'
            />
            <DrawerItem
              icon={({  size }) => (
                <MaterialCommunityIcons
                  name='history'
                  color={colors.newGray}
                  size={size}
                />
              )}
              label='History'
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Image source={require("../../assets/love.png")} style={styles.safe} />
              )}
              label='Save Trip'
              /* onPress={() => {
                props.navigation.navigate("Save");
              }} */
            />
          
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name='person-pin'
                  color={colors.newGray}
                  size={size}
                />
              )}
              label='Refferal'
            />
          </Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign
                  name='setting'
                  color={colors.newGray}
                  size={size}
                />
              )}
              label='Setting'
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='account-question-outline'
                  color={colors.newGray}
                  size={size}
                />
              )}
              label='About'
            />
        </View>
          <View>
            <TouchableRipple onPress={() => Alert.alert("i will change later")} style={styles.preference}>
                <Text style={styles.paragraph}>Sign Up as a Driver</Text>
            </TouchableRipple>
            </View>
            <View >
              <TouchableOpacity style={styles.logout} onPress={logOut}>
                <Text style={styles.text}>Logout</Text>
                <Image source={require("../../assets/logout.png")} style={styles.icon} />
              </TouchableOpacity>
            </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    caption: {
        top:hp(4),
        fontSize: 12,
        width:wp(167),
        height:(15),
        left:wp(20),
      },
  container:{ 
    flex: 1, 
    width:wp(278)
  },
  drawerContent: {
    flex: 1,
    width:wp(273)
  },
  drawerSection: {
    marginTop: hp(10),
    opacity:7.5
  },
  icon:{
    left:wp(10),
    width:wp(13.3),
    height:hp(20)
  },
  info:{
     flexDirection: "row", 
     marginTop: hp(51) 
    },
    logout:{
      flexDirection:'row',
      marginTop:hp(45),
      marginLeft:wp(92),
    },
    paragraph: {
      width:wp(139),
      height:hp(20),
      alignSelf:'center',
      justifyContent:'center',
      textAlign:'center',
      color:colors.blue,
    },
    preference: {
      borderWidth:1,
      borderColor:colors.blue,
      borderRadius:7,
      width:wp(187),
       height:hp(40),
       justifyContent: "center",
       alignSelf:'center',
       alignItems:'center',
     marginTop:hp(57)
    },
    safe:{
      color:colors.newGray,
      height:hp(18.3),
      width:wp(21)
    },
    text:{
      width:wp(47),
      height:hp(18)
    },
  title: {
    color:colors.newBlack,
    fontSize: 18,
    left:wp(18),
  },
  titleBox: {
    width:wp(200),
    height:hp(23),
  },
  userInfo: {
    height: hp(135.5),
    borderBottomWidth:1,
    borderBottomColor:colors.newBlack
  },
  
});
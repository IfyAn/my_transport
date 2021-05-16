import React from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView, Image} from 'react-native';
import Heading from "../components/Heading";
import Write from "../components/Write";
import ListItemSeperator from "../components/ListItemSeperator"
import Profile from "../components/Profile";
import Styles from "../config/styles";
import { wp, hp } from "../config/Responsive";


const information = [
  {
    id: 1,
    first:'Account Settings',
    second:'Your Info',
    third:'Accounts, Personal Details',
    fourth:'LinInked accounts',
    fifth:'Lagos, Google',
    image: require("../../assets/id.png"),
    avater: require("../../assets/ids.png"),
    source: require("../../assets/right.png")
  },  
  {
    id: 2,
    first:'Driver Settings',
    second:'Vehicle',
    third:'Activities Address',
    fourth:'Document',
    fifth:'Lagos, Google',
    image: require("../../assets/id.png"),
    avater: require("../../assets/des.png"),
    source: require("../../assets/right.png"),
    
  },  
  {
    id: 3,
    first:'Shortcut',
    second:'Add Home',
    fourth:'Add Work',
    image: require("../../assets/home.png"),
    avater: require("../../assets/case.png"),
    
  },  
];
export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
          <Heading icon='menu'  title='Profile' onPress={() =>console.log('Go ahead')}  />
           <View style={Styles.avater}>
              <Image source={require("../../assets/round.png")} />
            </View>
             <View style={Styles.joView}> 
                <Text style={Styles.joText}>Jonathan doewell</Text>
             </View> 
             <ListItemSeperator itemSeperator={styles.seperator}  />
            <Write first='0' second='4.0' image={require("../../assets/star1.png")} third='1' />
            <Write 
              first='Total Rides' 
              second='Rating' 
              third='Day'
              textSecond={styles.second}
              Contain={styles.contain}
              firstText={styles.first}
              thirdText={styles.third}
              />
              <ListItemSeperator itemSeperator={styles.seperat}  />
             <View style={Styles.Note}>
            <FlatList
              data={information}
              renderItem={({ item }) => (
              <Profile
              first={item.first}
              second={item.second}
              third={item.third}
              fourth={item.fourth}
              fifth={item.fifth}
              image={item.image}
              avater={item.avater}
              source={item.source}
              icon={item.icon}
              onPress={() =>console.log('show')}
            />
          )}
          /> 
           </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      contain:{
          marginTop:hp(5),
          marginLeft:wp(42)
      },
      first:{
          fontSize:13
      },
      second:{
          fontSize:13
      },
      seperat:{
         marginTop:hp(14)
      },
      seperator:{
          width:wp(330),
          height: hp(1),
          marginLeft:wp(22),
          marginTop:hp(16.5)
      },
      third:{
        left:wp(158),
        fontSize:13
    },
  });
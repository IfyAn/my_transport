import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import { wp, hp } from "../Config/Responsive";
 import ActivityIndicator from "./ActivityIndicator";

/**
 * styles can be set for both the container of the map
 * and the map itself using
 * @param setMapContainer,
 * @param setMapStyle
 */

export default function AppMap() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      //let { status } = await Location.requestPermissionsAsync();
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
     <View style={styles.container}>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          //   mapType="hybrid"
          showsUserLocation={true}
          //  userLocationUpdateInterval="1000"
          userLocationAnnotationTitle='Iyana'
          //  followsUserLocation="true"
          showsTraffic={true}
          showsIndoors={true}
          showsIndoorLevelPicker={true}
          minZoomLevel={10}
          moveOnMarkerPress={true}
          toolbarEnabled={true}
          style={styles.mapStyle}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
          animateToRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // mapPadding={{top: 0, left: 0, right: 300, bottom: 0}}
        >
          <Marker
            title='Food place'
            description='see finish'
            pinColor='#f0cf'
            opacity={10.0}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <ActivityIndicator visible={true} />
      )}
      {/* // <Text>{text}</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f5fcff",
    justifyContent: "center",
    alignItems: "center",
    //position: "absolute",
  },
  mapStyle: {
    width: '100%',
    height: 319,
  },
  laoding: {
    fontSize: 24,
    fontWeight: "bold",
  },
});




// import React from 'react';
// import styles from '../assets/styles';
// import {
//   ScrollView,
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   FlatList
// } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

//  export default function AppMap({ props }) {
    
//       return (
//         <View style={{ flex:1}}>
          
//             <MapView
//               provider={PROVIDER_GOOGLE}
//               //   mapType="hybrid"
//               showsUserLocation={true}
//               //  followsUserLocation="true"
//               showsTraffic={true}
//               showsIndoors={true}
//               showsIndoorLevelPicker={true}
//               showsIndoorLevelPicker={true}
//               minZoomLevel={18}
//               moveOnMarkerPress={true}
//               toolbarEnabled={true}
//               region={{
//                 latitude: location.coords.latitude,
//                 longitude: location.coords.longitude,
//                 latitudeDelta: 0,
//                 longitudeDelta: 0.03,
//               }}
//               onRegionChange={(reg)=>props.onRegionChange(reg)}
//             >
//               <Marker
//                 pinColor='#f0cf'
//                 opacity={10.0}
//                 coordinate={props.region}
//               />
//             </MapView>
        
//         </View>
//       );
//     }
  
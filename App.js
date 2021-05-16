
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from './src/context/UserContext'
import { FirebaseProvider } from './src/context/FirebaseContext'

export default function App() {
  return (
    <FirebaseProvider>
    <UserProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </UserProvider>
    </FirebaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import AppNavigator from "./src/navigation/AppNavigator";

// export default function App() {
//   return <AppNavigator />
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

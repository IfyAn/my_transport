import React from 'react'
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen() {
      return (
            <View style={styles.container}>
                  <Text>This is About screen</Text>
            </View>
       );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

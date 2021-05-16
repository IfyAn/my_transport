import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      loop
      autoPlay
      source={require("../../assets/animation/loader.json")}
    />
  );
}

export default ActivityIndicator;

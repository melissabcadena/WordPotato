import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/potato.png")}
    >
      <Text style={styles.text}>Word Potato</Text>
      <View style={styles.container}>
        <Button 
        title="Start Game" 
        style={styles.startButton}
        color={colors.dark}></Button>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    bottom: 300,
    alignItems: "center",
  },

  startButton: {
      
  },
  text: {
    position: "absolute",
    top: 150,
    alignItems: "center",
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});

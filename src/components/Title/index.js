import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My IMC</Text>
      <Text style={styles.subtitleText}>Saiba informações sobre seu IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50', // Green color
    padding: 24,
    paddingTop: 30, // Adjust the paddingTop to move the title higher
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 80,
    marginTop: 20,
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff', // White color
  },
  subtitleText: {
    fontSize: 18,
    color: '#ffffff', // White color
    marginTop: 8, // Add margin between the title and subtitle
    textAlign: 'center', // Center the text
  },
});

import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box5}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'navy',
  },
  box2: {
    backgroundColor: 'darkslategray',
    height: 250
  },
  box3: {
    backgroundColor: 'rebeccapurple',
    height: 250
  },
  box4: {
    backgroundColor: 'violet',
    height: 250
  },
  box5: {
    backgroundColor: 'maroon',
    height: 250
  },
})

export default App;
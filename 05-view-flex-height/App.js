import React, { Component } from 'react';
import { View, Text } from 'react-native';
 
class App extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#FFD7CF'}}>
        <View style={{height: 65, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
        <View style={{height: 95, backgroundColor: 'red'}}></View>
      </View>
    );
  }
}
 
export default App;
 
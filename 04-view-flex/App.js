import React, { Component } from 'react';
import { View, Text } from 'react-native';
 
class App extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#FFD7CF'}}>
        <View style={{flex: 1, backgroundColor: 'black'}}></View>
        <View style={{flex: 1, backgroundColor: 'pink'}}></View>
        <View style={{flex: 2, backgroundColor: 'purple'}}></View>
      </View>
    );
  }
}
 
export default App;
 
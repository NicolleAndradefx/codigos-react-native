import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class App extends Component{
    render(){

        let nome = 'Kratos';

      return(
        <View>
        <Text>Olá mundo!</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>Olá novamente </Text>


        <Text style={{ fontSize: 40 }}>{nome}</Text>

        <Kleitao largura={500} altura={200} nomeando="God of War"/>
        </View>
      );
    }
}


export default App;

class Kleitao extends Component{   
render(){
let image = 'https://i.pinimg.com/736x/30/88/1e/30881eb12fb2f82cd0efdd63ea0c8807.jpg'


return(
  <View>
  <Image 
    source={{uri: image }}
    style={{ width: this.props.largura, height: this.props.altura}}
  />

  <Text>{this.props.nomeando}</Text>
  </View>
);   
}
}
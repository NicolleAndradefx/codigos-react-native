import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Pessoa from './src/Pessoas/index';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    feed: [
      {id: "1", nome: "Ana", idade: 36, email: 'ana@senac.com'},
      {id: "2", nome: "Michael Jackson", idade: 68, email: 'mjmoonwalk@gmail.com'},
      {id: "3", nome: "Lady Gaga", idade: 40, email: 'ladygaga@gmail.com'},
      {id: "4", nome: "Serj", idade: 59, email: 'serj@gmail.com'},
      {id: "5", nome: "Alanzoka", idade: 18, email: 'alanzoka@gmail.com'},
      {id: "6", nome: "Tyler", idade: 35, email: 'tyler@gmail.com'},
    ]
    }
    
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Pessoa data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Id: {this.props.data.id}</Text>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    areaPessoa:{
    backgroundColor: '#4b0082', //Indigo
    height: 250,
    marginBottom:20
  },
  textoPessoa:{
    color: "#ffffff",
    fontSize: 25
  }
})

export default Pessoa;
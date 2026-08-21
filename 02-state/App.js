import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      nome: ''
    };

    //deixando a função acessar as propriedades
    this.entrar = this.entrar.bind(this)

  }

  entrar(){
      this.setState({
        nome: 'Justin Bieber'
      })
  }


  render(){
    return(
      <View style={{ marginTop: 50 }}>
        <Text style={{ textAlign: 'center', marginBottom: 15 }}>Teste com Button</Text>

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={{ fontSize: 23, color: 'orange', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
  
}

export default App;
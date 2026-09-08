import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import api from './src/services/api';

export default function App(){

  const [cep, setCep] = useState('');
  const [cepUser, setcepUser] = useState({});

  async function buscar() {
    if(cep == ''){
      alert('Digite um cep válido');
      return;
    }
  
    try{
      const response = await api.get(`/${cep}/json`);
      setcepUser(response.data);
      Keyboard.dismiss();
    } catch (error){
      console.log('ERROR: ' + error);
    }
  }

  function limpar(){
    setCep('');
    setcepUser({});
  }
  
  return(
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Dígite o CEP desejado:</Text>

        <TextInput style={styles.input}
        placeholder="Exemplo 04700000" 
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        keyboardType="numeric"
        />
      </View>

      <View style={styles.areabtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#8FBC8F'}]} onPress={buscar}> {/*Darkseagreeen*/}
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#5F9EA0'}]} onPress={limpar}> {/*cadetblue*/}
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
      </View>


    </SafeAreaView>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop:25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areabtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  botao: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5
  },
  botaoText: {
    fontSize: 22,
    color: '#ffffff'
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 20
  },
});
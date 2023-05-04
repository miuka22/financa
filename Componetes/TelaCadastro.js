import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function TelaCadastro() {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>

      <TextInput placeholder = "Seu nome..." style={styles.textInput} onChangeText={text=>setNome(text)}/>
      <TextInput 
      placeholder = "Seu Email..." 
      style={styles.textInput} 
      onChangeText={text=>setEmail(text)}/>
      <TextInput 
      secureTextEntry={true} 
      placeholder = "Sua Senha..." 
      style={styles.textInput} 
      onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity style={styles.btnCadastro} onPress={('')}>
      <Text style={{color:'white', textAlign: 'center'}}>CADASTRAR!</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput:{
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius:20,
    paddingLeft: 10,
    marginBottom: 10,
    outlineStyle: 'none',
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#0A0541',
    borderRadius: 20,
    justifyContent: 'center'
  }
});
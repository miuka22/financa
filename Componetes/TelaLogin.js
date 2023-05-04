import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.nada}>
      <View style={styles.nada}>
        <Text style={styles.nada}>MONEY MIND</Text>
      </View>
      <View style={styles.nada}>
        <View style={styles.nada}>
          <TextInput
            style={styles.nada}
            placeholder="E-mail"
            placeholderTextColor="#6A6D6D"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.nada}>
          <TextInput
            style={styles.nada}
            placeholder="Senha"
            placeholderTextColor="#6A6D6D"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Esqueceu')}>
          <Text style={styles.nada}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.nada}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>
          <Text style={styles.nada}>Criar uma nova conta</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nada:{

  },
  //teste: {
    //position: 'relative',
    //top: 150,
  //},
  formulario:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundo: {
    flex: 1,
    background: '#ffffff',
    alignItems: 'center',
    ///justifyContent: 'center',
  },
  logo: {
    fontWeight:900,
    color: '#0A0541',
    fontSize: 32,
    justifyContent:'center'
  },
  inputView:{
    padding:5,
  },
  inputText: {
  backgroundColor: '#ffff00',
    //outlineStyle: 'none',
    width:300,
    height:43,
    background:'#d9d9d9',
    borderRadius: 16,
    padding:9,
    flex:1,
  },
senha:{
},
loginBtn:{
   width: 190,
    backgroundColor: '#0A0541',
    borderRadius: 25,
    height:48 ,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

},
loginText:{
  color:'#ffff'
},

criarText:{
     color:'#d9d9d',
    },
});
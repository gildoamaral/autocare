import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import logo from '../../assets/LogoAuto_1.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

function Cadastro() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit() {
    try {
      const response = await axios.post('http://192.168.0.44:3000/cadastro', {
        name: name,
        email: email,
        senha: senha
      });
      Alert.alert("Sucesso", "Usuário cadastrado");
      navigation.navigate('Login');
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", err.response ? err.response.data : "Erro ao cadastrar usuário");
    }
  }


  return (
    <View style={styles.cadastroContainer}>
      <View style={styles.welcomeText}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.cadastroForm}>
        <View style={styles.inputContainer}>
          <FontAwesome name="user-circle" size={20} color="white" style={styles.icon} />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="white"
            style={styles.cadastroInput}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
        <Fontisto name="email" size={20} color="white" style={styles.icon} />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="white"
          style={styles.cadastroInput}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        </View>
        <View style={styles.inputContainer}>
        <FontAwesome name="eye-slash" size={20} color="white" style={styles.icon} />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="white"
          style={styles.cadastroInput}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.cadastroButton}>
          <Text style={styles.buttonText}>Criar conta</Text>
          <FontAwesome name="sign-out" size={20} color="white" style={styles.icon2} />
        </TouchableOpacity>
        <View style={styles.separator}>
          <Text style={styles.linkText}>Já tem uma conta?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
          <Text style={styles.logintext}>Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cadastro;


const styles = StyleSheet.create({
  cadastroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cadastroForm: {
    width: '85%',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#111',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  cadastroInput: {
    width: '100%',
    height: 45,
    padding: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#313131',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    elevation: 5,
  },
  cadastroButton: {
    width: '100%',
    backgroundColor: '#db5856',
    color: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cadastroButtonHover: {
    backgroundColor: '#000',
  },
  loginLink: {
    width: '100%',
    backgroundColor: 'white',
    color: 'red',
    borderRadius: 15,
    fontSize: 18,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  welcomeText: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
  highlight: {
    color: '#D23C45',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  linkText: {
    color: '#db5856',
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: 20,
    fontSize: 18
  },
  logintext: {
    color: 'black',
    fontWeight: 'bold',
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    marginTop: 20,
    paddingTop: 10,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  icon: {
    position: 'absolute',
    left: 270,
    top: '40%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  icon2: {
    position: 'absolute',
    left: 275,
    top: '100%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
});

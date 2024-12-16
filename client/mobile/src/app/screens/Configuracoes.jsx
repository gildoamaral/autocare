import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        const decodedToken = JSON.parse(atob(storedToken.split('.')[1]));
        setUserId(decodedToken.id);
        setEmail(decodedToken.email);
        setName(decodedToken.name);
      }
    };

    fetchUserDetails();
  }, []);

  const handleUpdate = async () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await axios.put(
        `http://localhost:3000/usuarios/${userId}`,
        { name, email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Alert.alert('Sucesso', 'Informações atualizadas com sucesso!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Erro ao atualizar informações', error);
      Alert.alert('Erro', 'Erro ao atualizar informações.');
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: async () => {
            try {
              await axios.delete(`http://localhost:3000/usuarios/${userId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              Alert.alert('Sucesso', 'Conta excluída com sucesso!');
              await AsyncStorage.removeItem('token');
              navigation.navigate('Cadastro');
            } catch (error) {
              console.error('Erro ao excluir a conta', error);
              Alert.alert('Erro', 'Erro ao excluir a conta.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>Atualize suas informações</Text>
      <View style={styles.inputContainer}>
      <FontAwesome name="user-circle" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="white"
        value={name}
        onChangeText={setName}
      />
      </View>
      <View style={styles.inputContainer}>
      <Fontisto name="email" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      <View style={styles.inputContainer}>
      <FontAwesome name="eye-slash" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        placeholderTextColor="white"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      </View>
      <View style={styles.inputContainer}>
      <FontAwesome name="eye-slash" size={20} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Nova Senha"
        placeholderTextColor="white"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.buttonCont}>
        <TouchableOpacity onPress={handleUpdate} style={styles.buttonatt}>
        <FontAwesome name="refresh" size={20} color="white" style={styles.icon2} />
          <Text style={styles.buttonText}>Atualizar informações</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.buttondell}>
        <FontAwesome name="trash-o" size={20} color="white" style={styles.icon2} />
          <Text style={styles.buttonText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
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
  buttonCont: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttondell:{
    width: '100%',
    backgroundColor: '#db5856',
    color: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  buttonatt:{
    width: '100%',
    backgroundColor: '#2163bc',
    color: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
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
    left: 320,
    top: '38%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  icon2: {
    position: 'absolute',
    left: 320,
    top: '100%',
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  firstText:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 50,
  },
});

export default EditProfile;

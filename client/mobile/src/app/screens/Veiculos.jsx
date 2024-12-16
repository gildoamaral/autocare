import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VehicleApp() {
  const [formData, setFormData] = useState({
    placa: '',
    marca: '',
    modelo: '',
    anoFabricacao: '',
    anoModelo: '',
    cor: ''
  });
  const [veiculos, setVeiculos] = useState([]);

  // Função para capturar entrada de dados
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função de cadastro de veículo
  const handleSubmit = async () => {
    const updatedFormData = {
      ...formData,
      anoFabricacao: parseInt(formData.anoFabricacao, 10),
      anoModelo: parseInt(formData.anoModelo, 10)
    };
  
    try {
      // Recupera o token do AsyncStorage
      const token = await AsyncStorage.getItem('userToken');
  
      // Verifica se o token foi encontrado
      if (!token) {
        Alert.alert('Erro', 'Token de autenticação não encontrado. Faça login novamente.');
        return;
      }
  
      // Faz a requisição POST com o token no cabeçalho de autorização
      const response = await axios.post('http://192.168.1.12:3000/veiculos', updatedFormData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Exibe uma mensagem de sucesso e atualiza a lista de veículos
      Alert.alert('Sucesso', 'Veículo cadastrado com sucesso!');
      setVeiculos([...veiculos, response.data]);
  
    } catch (error) {
      console.error('Erro ao cadastrar o veículo:', error);
  
      // Verifica se o erro é de autenticação (401 Unauthorized)
      if (error.response && error.response.status === 401) {
        Alert.alert('Erro de Autorização', 'Não autorizado. Verifique o token de autenticação.');
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar o veículo');
      }
    }
  };  

  // Função para buscar veículos do usuário
  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        // Recupera o token e userId do AsyncStorage
        const token = await AsyncStorage.getItem('userToken');
        const userId = await AsyncStorage.getItem('userId');
  
        if (!token) {
          console.log("Token não encontrado. Faça login novamente.");
          return;
        }
  
        const response = await axios.get('http://192.168.1.12:3000/veiculos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        // Filtra veículos pelo userId recuperado
        const userVeiculos = response.data.filter(veiculo => veiculo.usuarioId === userId);
        setVeiculos(userVeiculos); // Salva os veículos na state
  
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      }
    };
  
    fetchVeiculos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Veículos</Text>
      
      {/* Formulário de Cadastro */}
      <TextInput
        placeholder="Placa"
        value={formData.placa}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('placa', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Marca"
        value={formData.marca}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('marca', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Modelo"
        value={formData.modelo}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('modelo', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Ano de Fabricação"
        value={formData.anoFabricacao}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('anoFabricacao', value)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Ano do Modelo"
        value={formData.anoModelo}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('anoModelo', value)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Cor"
        value={formData.cor}
        placeholderTextColor="#888"
        onChangeText={(value) => handleInputChange('cor', value)}
        style={styles.input}
      />
      <Button title="Cadastrar Veículo" onPress={handleSubmit} />

      {/* Lista de Veículos */}
      <Text style={styles.title}>Lista de Veículos</Text>
      <FlatList
        data={veiculos}
        keyExtractor={(item) => item.placa}
        renderItem={({ item }) => (
          <View style={styles.vehicleItem}>
            <Text>Placa: {item.placa}</Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Ano de Fabricação: {item.anoFabricacao}</Text>
            <Text>Ano do Modelo: {item.anoModelo}</Text>
            <Text>Cor: {item.cor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  vehicleItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#e0e0e0'
  }
});

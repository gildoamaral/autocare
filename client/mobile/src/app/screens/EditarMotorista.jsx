import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const EditarMotorista = ({ route, navigation }) => {
  const { motorista } = route.params;
  const [formData, setFormData] = useState({
    nome: motorista.nome,
    cnh: motorista.cnh,
    telefone: motorista.telefone,
    status: motorista.status,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://192.168.1.12:3000/motoristas/${motorista.id}`, formData);
      Alert.alert("Sucesso", "Motorista atualizado com sucesso!");
      navigation.goBack(); // Volta para a tela anterior
    } catch (error) {
      console.error('Erro ao atualizar motorista:', error);
      Alert.alert("Erro", "Não foi possível atualizar o motorista.");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Editar motorista</Text>
        <Text style={styles.subtitle}>Atualize os dados do motorista abaixo</Text>
      </View>
      <TextInput
        label="Nome"
        value={formData.nome}
        onChangeText={text => handleChange('nome', text)}
        mode="flat"
        style={styles.input}
      />
      <TextInput
        label="CNH"
        value={formData.cnh}
        onChangeText={text => handleChange('cnh', text)}
        mode="flat"
        style={styles.input}
      />
      <TextInput
        label="Telefone"
        value={formData.telefone}
        onChangeText={text => handleChange('telefone', text)}
        mode="flat"
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Status</Text>
        <Picker
          selectedValue={formData.status}
          onValueChange={(itemValue) => handleChange('status', itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="ATIVO" value="ATIVO" />
          <Picker.Item label="INATIVO" value="INATIVO" />
        </Picker>
      </View>
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Atualizar motorista
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    backgroundColor: "transparent",
  },
  pickerContainer: {
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    marginTop: 20,
    backgroundColor: "red",
    borderRadius: 5,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: 10,
  },
});

export default EditarMotorista;
import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const AddVehicleScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nome: '',
    cnh: '',
    telefone: '',
    // dataNascimento: '',
    status: 'ATIVO',
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // if (!placa.match(/[A-Z]{3}-\d{4}/)) {
    //   setErroPlaca(true);
    //   return;
    // }
    // setErroPlaca(false);

    // const updatedFormData = {
    //   ...formData,
    //   anoFabricacao: parseInt(formData.anoFabricacao, 10),
    //   anoModelo: parseInt(formData.anoModelo, 10)
    // };
    // setFormData(updatedFormData);

    await axios.post('http://192.168.1.12:3000/motoristas', formData)
      .then(response => {
        Alert.alert("Sucesso", "motorista cadastrado com sucesso!");
        console.log(response.data);
        navigation.goBack(); // Volta para a tela anterior
      })
      .catch(error => {
        console.error('Erro ao cadastrar motorista:', error);
        Alert.alert("Erro", "Não foi possível cadastrar o motorista.");
      });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Adicionar novo motorista</Text>
        <Text style={styles.subtitle}>Insira abaixo os dados do motorista que deseja cadastrar</Text>
      </View>
      <TextInput
        label="Nome"
        value={formData.marca}
        onChangeText={text => handleChange('nome', text)}
        mode="flat"
        style={styles.input}
      />
      <TextInput
        label="CNH"
        value={formData.modelo}
        onChangeText={text => handleChange('cnh', text)}
        mode="flat"
        style={styles.input}
      />
      <TextInput
        label="Telefone"
        value={formData.anoFabricacao}
        onChangeText={text => handleChange('telefone', text)}
        mode="flat"
        style={styles.input}
        keyboardType="numeric"
      />
      {/* <TextInput
        label="Ano do Modelo"
        value={formData.anoModelo}
        onChangeText={text => handleChange('anoModelo', text)}
        mode="flat"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        label="Cor"
        value={formData.cor}
        onChangeText={text => handleChange('cor', text)}
        mode="flat"
        style={styles.input}
      /> */}
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
        Criar motorista
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

export default AddVehicleScreen;
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Platform, View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useFocusEffect } from '@react-navigation/native';
import fotoPadrao from '../../assets/fotoPadrao.png';

export default function Motoristas({ navigation }) {
  const [motoristas, setMotoristas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMotoristas = () => {
    setLoading(true);
    axios.get('http://192.168.1.12:3000/motoristas')
      .then(response => {
        setMotoristas(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar motoristas:', error);
        setError(error);
        setLoading(false);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchMotoristas();
    }, [])
  );

  const handleDelete = (id) => {
    console.log("cheguei");
  
    const confirmDelete = () => {
      axios.delete(`http://192.168.1.12:3000/motoristas/${id}`)
        .then(response => {
          if (Platform.OS === 'web') {
            alert("Sucesso: Motorista excluído com sucesso!");
          } else {
            Alert.alert("Sucesso", "Motorista excluído com sucesso!");
          }
          fetchMotoristas(); // Atualiza a lista de motoristas
        })
        .catch(error => {
          console.error("Erro ao excluir motorista:", error);
          if (Platform.OS === 'web') {
            alert("Erro ao excluir motorista");
          } else {
            Alert.alert("Erro", "Erro ao excluir motorista");
          }
        });
    };
  
    if (Platform.OS === 'web') {
      if (window.confirm("Você tem certeza que deseja excluir este motorista?")) {
        confirmDelete();
      }
    } else {
      Alert.alert(
        "Confirmar Exclusão",
        "Você tem certeza que deseja excluir este motorista?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Excluir",
            onPress: confirmDelete
          }
        ]
      );
    }
  };

  const formatPhoneNumber = (text) => {
    const cleaned = ('' + text).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return text;
  };

  if (loading) {
    return (
      <View style={styles.containerError}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.containerError}>
        <Text style={styles.text}>Erro ao buscar motoristas</Text>
      </View>
    );
  }

  return (
    <MenuProvider>
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          data={motoristas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.fotoSpace}>
                <Image style={styles.fotoIcon} source={fotoPadrao} />
              </View>

              <View style={styles.content}>
                <Text style={styles.itemText}> {item.status}  </Text>
                <Text style={styles.itemText}> {item.nome} </Text>
                <Text style={styles.itemText}> CNH: {item.cnh} | TEL: {formatPhoneNumber(item.telefone)}</Text>
              </View>

              <Menu style={styles.icon}>
                <MenuTrigger>
                  <Icon name="more-vert" size={24} />
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                  <MenuOption onSelect={() => navigation.navigate('Editar Motorista', { motorista: item })} text="Editar" />
                  <MenuOption onSelect={() => handleDelete(item.id)} text="Excluir" />
                </MenuOptions>
              </Menu>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('Criar Motorista')}
        >
          <Icon name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerError: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginTop: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  fotoSpace: {
    width: 70,
    height: 60,
  },
  fotoIcon: {
    borderRadius: 10,
    width: "auto",
    height: "100%",
  },
  itemText: {
    fontSize: 12,
    color: 'black',
    width: '100%',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#f00',
    borderRadius: 30,
    elevation: 8,
  },
});

const optionsStyles = {
  optionsContainer: {
    marginTop: -40,
    marginLeft: -25,
    width: 120,
    backgroundColor: 'white', // Ajuste a cor de fundo do menu
    padding: 5,
  },
  optionWrapper: {
  },
  optionText: {
    color: 'black',
  },
};
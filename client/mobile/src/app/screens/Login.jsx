import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/AutoCare.png';
import Icon from 'react-native-vector-icons/Feather';
import { useFonts, Cairo_400Regular, Cairo_700Bold } from '@expo-google-fonts/cairo';
import * as SplashScreen from 'expo-splash-screen';


/* SplashScreen: utilizei esta ferramenta para carregar as fontes personalizadas "Cairo", sem ela, o app fica sujeito a erros visuais e travamentos */
SplashScreen.preventAutoHideAsync(); 

const LOGIN_URL = 'http://192.168.1.12:3000/login';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false); // Controle de switch da senha

  // Carregar a fonte
  const [fontsLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_700Bold,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        navigation.navigate('MainTabs');
      } else {
        Alert.alert('Erro', data.message || 'Credenciais inválidas');
      }
    } catch (error) {
      setLoading(false);
      console.error('Erro na requisição:', error);
      Alert.alert('Erro', 'Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={[styles.input , { marginLeft: 10}]}
          placeholder=' Usuário'
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Icon name="user" size={20} style={[styles.icon , { margin: 5}]} color="#CF3834"/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={[styles.input , { marginLeft: 10}]}
          placeholder=' Senha'
          placeholderTextColor="#000"
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
          secureTextEntry={!senhaVisivel} // Controla a visibilidade da senha
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Icon 
            name={senhaVisivel ? "eye" : "eye-off"} // Alterna os ícones de olhos do campo 'senha'
            size={20}
            style={[styles.icon , { margin: 5}]}
            color="#CF3834"
          />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FD332E" />
      ) : (
        <>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <View style={styles.buttonContent}>
              <Text style={styles.loginButtonText}>Login</Text>
              <Icon 
              name="log-in" size={20} style={styles.iconRight} color="#fff"/>
            </View>
          </TouchableOpacity>
          
          <View style={styles.separator} /*para separar o botão login do cadastro*/ />
          
          <Text style={styles.textCenter}>Não tem uma conta?</Text>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.secondaryButtonText}>Criar conta</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    marginBottom: 0,
    backgroundColor: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    padding: 5,
  },

  label: {
    fontSize: 14,
    color: '#ddd',
    fontFamily: 'Cairo_400Regular',
  },

  logo: {
    width: 210,
    height: 90,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 25,
  },

  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
    color: "#CF3834",
    fontFamily: 'Cairo_400Regular',
  },

  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#db4a4a',
    paddingVertical: 7,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2, 
    shadowRadius: 8,
    elevation: 6,
    padding: 5,
  },

  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#fff',
    fontFamily: 'Cairo_700Bold',
    fontSize: 15,
    marginRight: 5
  },

  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 60,
  },

  textCenter: {
    textAlign: 'center',
    fontSize: 14,
    color: '#CF3834',
    fontFamily: 'Cairo_400Regular',
    textDecorationLine: 'underline',
    marginBottom: 40,
  },

  secondaryButton: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },


  secondaryButtonText: {
    color: '#CF3834',
    fontFamily: 'Cairo_400Regular',
    fontSize: 15,
  },
});

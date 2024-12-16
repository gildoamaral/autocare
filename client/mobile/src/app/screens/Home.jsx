import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/LogoAuto_1.png')} // Substitua pelo caminho do logo
          style={styles.logo}
        />
        <Text style={styles.headerText}>Bem-vindo ao AutoCare!</Text>
      </View>

      {/* Conteúdo */}
      <ScrollView style={styles.content}>
        {/* Resumo Geral */}
        <View style={styles.summary}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>5</Text>
            <Text style={styles.summaryLabel}>Veículos</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>2</Text>
            <Text style={styles.summaryLabel}>Manutenções Pendentes</Text>
          </View>
        </View>

        {/* Próximas Manutenções */}
        <View style={styles.maintenance}>
          <Text style={styles.sectionTitle}>Próximas Manutenções</Text>
          <View style={styles.maintenanceCard}>
            <Text style={styles.maintenanceText}>Troca de óleo - Veículo X</Text>
            <Text style={styles.maintenanceDate}>22/11/2024</Text>
          </View>
          <View style={styles.maintenanceCard}>
            <Text style={styles.maintenanceText}>Revisão - Veículo Y</Text>
            <Text style={styles.maintenanceDate}>01/12/2024</Text>
          </View>
        </View>

        {/* Botões de Navegação */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Veículos')}
          >
            <Text style={styles.navButtonText}>Gerenciar Veículos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Motoristas')}
          >
            <Text style={styles.navButtonText}>Gerenciar Motoristas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Configurações')}
          >
            <Text style={styles.navButtonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#333333', // Fundo vermelho
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    backgroundColor: '#FFF', 
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  maintenance: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  maintenanceCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  maintenanceText: {
    fontSize: 16,
    color: '#333',
  },
  maintenanceDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  navigation: {
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#950606',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

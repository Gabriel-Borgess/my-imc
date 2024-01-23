import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultImc({ resultImc, messageResultImc, imcStatus }) {
  const getStatusColor = () => {
    switch (imcStatus) {
      case 'Abaixo do peso':
        return '#FF9800'; // Laranja
      case 'Peso normal':
        return '#4CAF50'; // Verde
      case 'Sobrepeso':
        return '#FFC107'; // Amarelo
      case 'Obesidade Grau I':
        return '#FF5722'; // Laranja escuro
      case 'Obesidade Grau II':
        return '#F44336'; // Vermelho
      case 'Obesidade Grau III':
        return '#B71C1C'; // Vermelho escuro
      default:
        return '#333'; // Cor padrão
    }
  };

  return (
    <View style={styles.container}>
      {resultImc !== null && (
        <>
          <Text style={styles.resultText}>Seu IMC é: {resultImc}</Text>
      
          <Text style={[styles.statusText, { color: getStatusColor() }]}>Status: {imcStatus}</Text>
        </>
      )}
      {resultImc === null && (
        <Text style={styles.messageText}>{messageResultImc}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', 
  },
  messageText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  statusText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
  },
});

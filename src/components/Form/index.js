import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import ResultImc from "./ResultImc/";

export default function Form() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [messageResultImc, setMessageResultImc] = useState("Preencha os dados para saber o resultado");
  const [imc, setImc] = useState(null);
  const [textoBotao, setTextoBotao] = useState("Calcular");

  function imcCalculator() {
    if (altura && peso) {
      const calculatedImc = (peso / (altura * altura)).toFixed(2);
      setImc(calculatedImc);
      setMessageResultImc(`Seu IMC é: ${calculatedImc}`);
      setTextoBotao("Calcular Novamente");
    }
  }

  function getImcStatus() {
    if (imc !== null) {
      if (imc < 18.5) {
        return 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
      } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade Grau I';
      } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade Grau II';
      } else {
        return 'Obesidade Grau III';
      }
    }
    return '';
  }

  function validationImc() {
    if (imc !== null) {
      setAltura("");
      setPeso("");
      setImc(null);
      setTextoBotao("Calcular");
      setMessageResultImc("Preencha os dados para saber o resultado");
    } else {
      imcCalculator();
    }
  }

  const imcStatus = getImcStatus();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAltura(text)}
          value={altura}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPeso(text)}
          value={peso}
          placeholder="Ex: 75"
          keyboardType="numeric"
        />
      </View>

      <Button
        title={textoBotao}
        onPress={validationImc}
        style={styles.button}
        color="#4CAF50" 
      />

      <ResultImc messageResultImc={messageResultImc} resultImc={imc} imcStatus={imcStatus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 26,
  },
  label: {
    fontSize: 24,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
  },
});

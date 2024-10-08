// RecuperarConta.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const RecuperarConta = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [matriculaCpf, setMatriculaCpf] = useState('');

  const handleAvancar = () => {
    console.log('Opção selecionada:', opcaoSelecionada);
    console.log('Matrícula ou CPF:', matriculaCpf);
    // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Conta</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionButton, opcaoSelecionada === 'senha' && styles.selectedOption]}
          onPress={() => setOpcaoSelecionada('senha')}
        >
          <Text style={styles.optionText}>Perdi a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionButton, opcaoSelecionada === 'email' && styles.selectedOption]}
          onPress={() => setOpcaoSelecionada('email')}
        >
          <Text style={styles.optionText}>Perdi o e-mail acadêmico</Text>
        </TouchableOpacity>
      </View>

      {opcaoSelecionada && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Digite sua matrícula ou CPF:</Text>
          <TextInput
            style={styles.input}
            placeholder="Matrícula ou CPF"
            value={matriculaCpf}
            onChangeText={setMatriculaCpf}
          />
          
          <TouchableOpacity 
            style={styles.neonButton} 
            onPress={handleAvancar} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  optionsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    width: '80%',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#007bff',
    backgroundColor: '#d4e6f1',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    width: '80%',
  },
  neonButton: {
    backgroundColor: '#359830',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#00ff00',
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RecuperarConta;

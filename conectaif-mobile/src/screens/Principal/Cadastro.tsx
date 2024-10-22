import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CadastroAluno = () => {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [status, setStatus] = useState('Ativo'); // Valor padrão "Ativo"

  const handleCadastro = () => {
    console.log('Aluno Cadastrado');
    console.log('Matrícula:', matricula);
    console.log('Nome:', nome);
    console.log('Responsável:', responsavel);
    console.log('Nascimento:', nascimento);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);
    console.log('Status:', status);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/ProjetoConnectaIF_Logo_ConectaIF_ColoridoNew.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Cadastro de Aluno</Text>

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Responsável (apenas menores)"
        value={responsavel}
        onChangeText={setResponsavel}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={nascimento}
        onChangeText={setNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Status:</Text>
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => setStatus(status === 'Ativo' ? 'Inativo' : 'Ativo')}
      >
        <Text style={styles.statusText}>{status}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.neonButton} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar Aluno</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -10,
  },
  logo: {
    width: 1000,
    height: 550,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    width: '85%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  statusButton: {
    backgroundColor: '#d4e6f1',
    padding: 10,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginBottom:10,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  neonButton: {
    backgroundColor: '#359830',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    marginVertical: 80,
    borderWidth: 2,
    borderColor: '#00ff00',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CadastroAluno;

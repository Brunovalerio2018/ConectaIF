import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native' 
import {auth, firebase} from '../../../firebase'


const CadastroAluno = () => {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [status, setStatus] = useState('Ativo'); // Valor padrão "Ativo"
  const handleCadastro = async () => {
    console.log('Aluno Cadastrado');
    console.log('Matrícula:', matricula);
    console.log('Nome:', nome);
    console.log('Responsável:', responsavel);
    console.log('Nascimento:', nascimento);
    console.log('Telefone:', telefone);
    console.log('Senha:', senha);
    console.log('Status:', status);


  
    const calcularIdade = (dataNascimento: string) => {
      const nascimentoDate = new Date(dataNascimento);
      const hoje = new Date();
      const idade = hoje.getFullYear() - nascimentoDate.getFullYear();
      const mes = hoje.getMonth() - nascimentoDate.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimentoDate.getDate())) {
        return idade - 1;
      }
      return idade;
    };
  
    const idadeAluno = calcularIdade(nascimento);
  
    try {
      // Validação se o aluno é menor de idade
      if (idadeAluno < 18 && !responsavel) {
        alert('Por favor, insira o nome do responsável prosseguir com o cadastro.');
        return; // Impede o cadastro se o responsável não for informado
      }
  
      // Se tudo estiver certo, criar o usuário no Firebase Authentication
      const CadCredential = await createUserWithEmailAndPassword(auth, matricula, senha);
      console.log('Aluno cadastrado com sucesso:', CadCredential.user);
  
      // Aqui você pode salvar as demais informações do aluno no Firestore ou outro banco
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error.message);
    }
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
        placeholder="    Email (Matrícula)"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="    Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="    Responsável (apenas menores)"
        value={responsavel}
        onChangeText={setResponsavel}
      />
      <TextInput
        style={styles.input}
        placeholder="    Data de Nascimento"
        value={nascimento}
        onChangeText={setNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="    Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="    Senha"
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

      {/* Remover margem inferior do botão de status */}
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
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -100,
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
    padding: 0,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    width: '85%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  statusButton: {
    backgroundColor: '#359830',
    padding: 10,
    borderRadius: 20,
    width: '49%',
    alignSelf: 'center',
    marginBottom: 5, // Ajustar a margem inferior
    alignItems: 'center',
    paddingVertical: 5
  },
  statusText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  neonButton: {
    backgroundColor: '#359830',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.0,
    shadowRadius: 10,
    justifyContent: 'center',
    marginVertical: 0, // Remover margem vertical
    borderWidth: 0,
    borderColor: '#00ff00',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '43%',
  },
});

export default CadastroAluno;

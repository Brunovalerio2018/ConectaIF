import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../app';

const LoginHome = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handlePress = async () => {
    const result = await api.post('autorizacao/login', { login: usuario, senha: senha });
    console.log(result.data);

    Animated.sequence([
      Animated.timing(opacityAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    console.log('Acessar Pressed');
  };

  const handleRecuperarSenha = () => {
    navigation.navigate('RecuperarConta');
  };

  const telaCadastro = () => {
    navigation.navigate('CadastroAluno');
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

      <Text style={styles.title}>Login ConectaIF</Text>

      <Text style={styles.label1}>Usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label2}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={!mostrarSenha}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={toggleMostrarSenha}>
          <Text style={styles.optionText}>
            {mostrarSenha ? 'Ocultar a senha' : 'Exibir a senha'}
          </Text>
        </TouchableOpacity>

        <View style={styles.spaceBetweenOptions} />

        <TouchableOpacity onPress={handleRecuperarSenha}>
          <Text style={styles.optionText}>
            Esqueceu ou deseja alterar sua senha?
          </Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ opacity: opacityAnim }}>
        <View style={styles.buttonContainerAcess}>
          <TouchableOpacity
            style={styles.neonButton}
            onPress={handlePress}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          </View>  
          <View style={styles.buttonContainerCad}>
          <TouchableOpacity
            style={styles.cadastroButton}
            onPress={telaCadastro}
          >
            <Text style={styles.cadastroButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>


      <Text style={styles.watermark}>SISTEMA UNIFICADO CONECTAIF</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -70,
  },
  logo: {
    width: 1000,
    height: 550,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  label1: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: -220,
    color: '#333',
  },
  label2: {
    fontSize: 15,
    marginBottom: 5,
    borderTopLeftRadius: 20,
    marginLeft: -229,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#eaeaea',
    width: '66%',
    maxWidth: 388,
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  spaceBetweenOptions: {
    height: 20,
  },
  optionText: {
    color: '#0066cc',
    marginBottom: 0,
  },
  buttonContainerAcess: {
    flexDirection: 'row', // Para alinhar os botões lado a lado
    justifyContent: 'space-between',
    width: '40%',
    maxWidth: 200, // Limite a largura total para os botões
  },
  buttonContainerCad: {
    flexDirection: 'row', // Para alinhar os botões lado a lado
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: 200, // Limite a largura total para os botões
  },
  neonButton: {
    backgroundColor: '#359830',
    borderRadius: 25,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 4,
    justifyContent: 'center',
    marginVertical: 30,
    borderColor: '#00ff00',
    flex: 1, // O botão de acessar vai ocupar a maior parte do espaço
    marginRight: 2, // Margem à direita para o espaçamento
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  watermark: {
    top: 20,
    right: 10,
    fontSize: 12,
    color: 'rgba(0, 0, 1, 0.2)',
  },
  cadastroButton: {
    backgroundColor: '#359830',
    borderRadius:20,
    flex: 1, // Ajuste o flex para reduzir a largura do botão
    marginTop: -25,
  },
  cadastroButtonText: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 1
  },
  
});

export default LoginHome;

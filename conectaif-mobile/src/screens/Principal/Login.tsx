import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation
import RecuperarConta from './RecuperarConta';

const LoginHome = () => {
  const navigation = useNavigation(); // Obtendo a navegação
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handlePress = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/Logo_ifsul_ConectaIF.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Login ConectaIF</Text>

      <Text style={styles.label}>Usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={!mostrarSenha}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={toggleMostrarSenha}>
          <Text style={styles.optionText}>{mostrarSenha ? 'Ocultar a senha' : 'Exibir a senha'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarConta')}>
          <Text style={styles.optionText}>Esqueceu ou deseja alterar sua senha?</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ opacity: opacityAnim }}>
        <TouchableOpacity 
          style={styles.neonButton} 
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -120,
  },
  logo: {
    width: 600,
    height: 600,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 10,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
  },
  optionsContainer: {
    flexDirection: 'column',
    marginBottom: 5,
    alignItems: 'center',

  },
  optionText: {
    color: '#0066cc',
    marginBottom: 15,
  },
  neonButton: {
    backgroundColor: '#359830',
    paddingVertical: 5,
    paddingHorizontal: 0,
    paddingStart: 0,
    borderRadius: 10,
    shadowColor: '#00ff00',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 10, // Diminua esse valor para menos brilho ao redor
    elevation: 10, // Pode diminuir também a elevação
    justifyContent: 'center',
    marginVertical: 5,
    borderWidth: 2, // Diminua esse valor para uma borda mais fina
    borderColor: '#00ff00',
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginHome;


/* codigo cor original verde ifsul #359830 */

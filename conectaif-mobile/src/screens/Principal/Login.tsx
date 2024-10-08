import   React, { useState, useRef }                                              from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, StyleSheet }   from 'react-native';
import   RecuperarConta                                                           from './RecuperarConta';

const LoginHome = () => {
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
        
        {/* Espaço adicionado entre as opções */}
        <View style={styles.spaceBetweenOptions} />
        
        <TouchableOpacity onPress={RecuperarConta}>
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
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: -10, // Aumentei a aproximação do título em relação ao logo
  },
  logo: {
    width: 1000, // Ajuste a largura da logo para melhor proporção
    height:550, // Ajuste a altura da logo para melhor proporção
  },
  title: {
    fontSize: 25,
    marginBottom: 10, // Diminuí a margem inferior para aproximar o título do logo
    textAlign: 'center',
    color: '#000',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
    width: '100%', // Faz com que o campo de entrada ocupe toda a largura disponível
    maxWidth: 300, // Limita a largura máxima para manter a proporção
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  spaceBetweenOptions: {
    height: 20, // Altura do espaço entre as opções
  },
  optionText: {
    color: '#0066cc',
    marginBottom: -10,
  },
  neonButton: {
    backgroundColor: '#359830',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0.10, height: 10 },
    shadowOpacity: 20,
    shadowRadius: 20,
    elevation: 30,
    justifyContent: 'center',
    marginVertical: 40,
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

export default LoginHome;

/* código cor original verde ifsul #359830 */

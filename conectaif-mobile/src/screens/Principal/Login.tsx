import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native'; 


export default function Login() {
  
  const navigation = useNavigation(); 
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = () => {
    if (usuario === "" || senha === "") {
      Alert.alert("Erro", "Usuário e senha são obrigatórios!");
      return;
    }

    try {
      navigation.replace('Main');  
    } catch (error) {

      Alert.alert("Erro de navegação", "Ocorreu um erro ao tentar navegar para a tela principal.");
      console.error("Erro na navegação:", error);  // Para fins de depuração
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo-if.png')} style={styles.logo} />
      <Text style={styles.title}>Login ConnectaIF</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#a6a6a6"
        value={usuario}
        onChangeText={setUsuario}  
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#a6a6a6"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}  
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu ou deseja alterar sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#006400',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#006400',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});


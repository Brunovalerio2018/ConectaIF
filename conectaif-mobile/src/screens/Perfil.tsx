import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil() {
  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    endereco: '',
    cpf: ''
  });
  const [image, setImage] = useState(null);

  // Função para selecionar uma imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    if (!result.cancelled) {  // Verifica se a seleção foi bem-sucedida
      setImage(result.assets[0].uri); // Define a URI da imagem selecionada
    }
  };

  // Função para abrir o Google Sala de Aula
  const openGoogleClassroom = () => {
    Linking.openURL('https://classroom.google.com/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text>Importar Foto</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: {userInfo.nome}</Text>
          <Text style={styles.infoText}>Email: {userInfo.email}</Text>
          <Text style={styles.infoText}>Endereço: {userInfo.endereco}</Text>
          <Text style={styles.infoText}>CPF: {userInfo.cpf}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusTitle}>Situação Sistêmica:</Text>
            <Text style={styles.status}>Matriculado no SUAP</Text>
          </View>
        </View>
      </View>

      <Button title="Google Sala de Aula" onPress={openGoogleClassroom} color="#359830" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Fundo de cor neutra e suave
    paddingHorizontal: 20,
    paddingTop: 40, // Mais espaço no topo
    alignItems: 'center', // Centraliza os itens
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30, // Distância maior entre o título e o conteúdo
  },
  profileContainer: {
    flexDirection: 'row', // Organiza a imagem e as informações em linha
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o conteúdo horizontalmente
    marginBottom: 40, // Espaço maior abaixo do perfil
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  infoContainer: {
    flex: 1, // Ocupa o restante do espaço à direita da imagem
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinha as informações à esquerda
  },
  infoText: {
    fontSize: 18,
    marginBottom: 12, // Espaçamento maior entre os itens
    color: '#333',
  },
  statusContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e9f7e5',
    borderRadius: 8,
    width: '100%', // Garante que o container tenha a largura total
  },
  statusTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  status: {
    color: '#359830',
    fontWeight: 'bold',
  },
});

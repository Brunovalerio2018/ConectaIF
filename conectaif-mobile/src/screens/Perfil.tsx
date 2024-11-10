import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Button, Linking, Image, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { BarChart } from 'react-native-chart-kit';

interface UserStatus {
  nome: string;
  email: string;
  endereco: string;
  cpf: string;
  matricula: string;
  dataNascimento: string;
  genero: string;
  curso: string;
  turma: string;
  responsavel: string;
  professorResponsavel: string;
  telefone: string;
}

const Perfil = () => {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [disciplinas, setDisciplinas] = useState([
    { nome: 'Matemática', nota: '8.0' },
    { nome: 'Português', nota: '7.5' },
    { nome: 'História', nota: '9.0' },
    { nome: 'Ciências', nota: '8.5' },
    { nome: 'Geografia', nota: '7.0' },
  ]);
  const [faltas, setFaltas] = useState([
    { nome: 'Matemática', faltas: '2' },
    { nome: 'Português', faltas: '1' },
    { nome: 'História', faltas: '0' },
    { nome: 'Ciências', faltas: '3' },
    { nome: 'Geografia', faltas: '1' },
  ]);
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGoogleClassroom = () => {
    Linking.openURL('https://classroom.google.com/');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulação de requisição para buscar os dados do usuário
        const response = await fetch('https://example.com/usuarios/1'); // Substitua com a URL real
        const data = await response.json();

        if (data) {
          setUserStatus({
            nome: data.nome || '',
            email: data.email || '',
            endereco: data.endereco || '',
            cpf: data.cpf || '',
            matricula: data.matricula || '',
            dataNascimento: data.dataNascimento || '',
            genero: data.genero || '',
            curso: data.curso || '',
            turma: data.turma || '',
            responsavel: data.responsavel || '',
            professorResponsavel: data.professorResponsavel || '',
            telefone: data.telefone || '',
          });
        } else {
          Alert.alert('Erro', 'Erro ao buscar dados do usuário');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        Alert.alert('Erro', 'Falha ao buscar os dados. Tente novamente mais tarde.');
      }
    };

    fetchUserData();
  }, []); // Carregar uma vez ao montar o componente

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#4CAF50',
    decimalPlaces: 4,
    color: (opacity = 2) => `rgba(55, 152, 8, ${opacity})`,
    labelColor: (opacity = 4) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 106,
    },
    propsForDots: {
      r: '20',
      strokeWidth: '10',
      stroke: '#ffa726',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileImageText}>Importar Foto</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.profileName}>{userStatus?.nome || 'Nome Não Disponível'}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email: {userStatus?.email || 'Não disponível'}</Text>
        <Text style={styles.infoText}>Matrícula: {userStatus?.matricula || 'Não disponível'}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Campos Pessoais</Text>
        <Text style={styles.infoText}>Telefone: {userStatus?.telefone}</Text>
        <Text style={styles.infoText}>Endereço: {userStatus?.endereco}</Text>
        <Text style={styles.infoText}>Nascimento: {userStatus?.dataNascimento}</Text>
        <Text style={styles.infoText}>Gênero: {userStatus?.genero}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Campos Acadêmicos</Text>
        <Text style={styles.infoText}>Curso: {userStatus?.curso}</Text>
        <Text style={styles.infoText}>Turma: {userStatus?.turma}</Text>
        <Text style={styles.infoText}>Responsável: {userStatus?.responsavel}</Text>
        <Text style={styles.infoText}>Professor: {userStatus?.professorResponsavel}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Grade Curricular e Notas</Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Disciplina</DataTable.Title>
            <DataTable.Title numeric>Nota</DataTable.Title>
          </DataTable.Header>

          {disciplinas.map((disciplina, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{disciplina.nome}</DataTable.Cell>
              <DataTable.Cell numeric>{disciplina.nota}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Faltas por Disciplina</Text>
        <BarChart
          data={{
            labels: faltas.map(falta => falta.nome),
            datasets: [
              {
                data: faltas.map(falta => falta.faltas),
              },
            ],
          }}
          width={300} // largura do gráfico
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Notas por Disciplina</Text>
        <BarChart
          data={{
            labels: disciplinas.map(disciplina => disciplina.nome),
            datasets: [
              {
                data: disciplinas.map(disciplina => disciplina.nota),
              },
            ],
          }}
          width={300} // largura do gráfico
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={openGoogleClassroom}>
        <Text style={styles.buttonText}>Abrir Google Sala de Aula</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageText: {
    color: '#777',
    fontSize: 14,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Perfil;

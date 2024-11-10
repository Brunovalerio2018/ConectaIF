// screens/Grupo.tsx

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Grupo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos</Text>
      <Button title="Criar Novo Grupo" onPress={() => {/* Navegar para tela de criação de grupo */}} />

      {/* Lista de grupos existentes */}
      <FlatList
        data={''}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Text>{item}</Text>
            <Button title="Enviar Comunicado" onPress={() => {/* Função de envio de comunicado */}} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  groupItem: { marginVertical: 10, padding: 15, backgroundColor: '#f2f2f2', borderRadius: 8 }
});

export default Grupo;

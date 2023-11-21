import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SampleSearchComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
      />
      {/* Otros elementos de tu componente */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 25, // Ajusta este valor según tus preferencias
    padding: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25, // Puedes ajustar este valor según tus preferencias
    padding: 5,
  },
  // Otros estilos para los demás elementos dentro de SampleSearchComponent
});

export default SampleSearchComponent;

  
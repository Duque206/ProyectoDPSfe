import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'; 
import { Picker } from '@react-native-picker/picker';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('categoria1');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./w.png')} 
        style={styles.banner}
      />

      <Text style={styles.title}>Crear Producto</Text>


      <View style={styles.inputContainer}>
        <Text>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          placeholder="Nombre del producto"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Descripción</Text>
        <TextInput
          style={styles.input}
          value={descripcion}
          onChangeText={(text) => setDescripcion(text)}
          placeholder="Descripción del producto"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Precio Unitario</Text>
        <TextInput
          style={styles.input}
          value={precio}
          onChangeText={(text) => setPrecio(text)}
          placeholder="Precio unitario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Cantidad</Text>
        <TextInput
          style={styles.input}
          value={cantidad}
          onChangeText={(text) => setCantidad(text)}
          placeholder="Cantidad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Categoría</Text>
        <Picker
          style={styles.picker}
          selectedValue={categoria}
          onValueChange={(itemValue) => setCategoria(itemValue)}
        >
          <Picker.Item label="Categoría 1" value="categoria1" />
          <Picker.Item label="Categoría 2" value="categoria2" />
          <Picker.Item label="Categoría 3" value="categoria3" />
          <Picker.Item label="Categoría 4" value="categoria4" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
       <View style={styles.roundedButton}>
         <Button title="Regresar" onPress={() => {}} 
         color="#666666"/>
        </View>
        <View style={styles.roundedButton}>
         <Button title="Crear Producto" onPress={() => {}} 
         color="#c00000"/>
         </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'gray',
    Textcolor: 'white',
    width: '100%',
    height: '100%',
  },
  banner: {
    padding: 20,
    marginTop: 50,
    width: '60%',
    height: 120,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
    color: 'white',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'darkgray',
    color: 'white',
  },
  Text: {
    color: 'white',
  },
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'darkgray',
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  roundedButton: {
    borderRadius: 15,
    overflow: 'hidden', 
    width: '45%',
    height: 'auto',
    marginTop: 30,
  }

});

export default CrearProducto;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CrearUsuarioScreen = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('usuario');
  const [deposito, setDeposito] = useState('Deposito1');

  const roles = ['Usuario', 'Administrador', 'Supervisor']; 
  const depositos = ['Deposito1', 'Deposito2', 'Deposito3']; 

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={require('./w.png')} 
        style={styles.banner}
      />

      <Text style={styles.title}>Crear Usuario</Text>

      <View style={styles.inputContainer}>
        <Text>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={(text) => setNombre(text)}
          placeholder="Nombre del usuario"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Correo electrónico"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Rol</Text>
        <Picker
          style={styles.picker}
          selectedValue={rol}
          onValueChange={(itemValue) => setRol(itemValue)}
        >
          {roles.map((rol, index) => (
            <Picker.Item label={rol} value={rol} key={index} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text>Depósito</Text>
        <Picker
          style={styles.picker}
          selectedValue={deposito}
          onValueChange={(itemValue) => setDeposito(itemValue)}
        >
          {depositos.map((dep, index) => (
            <Picker.Item label={dep} value={dep} key={index} />
          ))}
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
       <View style={styles.roundedButton}>
        <Button
          title="Regresar"
          onPress={() => {
          }}
          color="#666666"
        /> 
      </View>
      <View style={styles.roundedButton}>
        <Button
          title="Crear Usuario"
          onPress={() => {
          }}
          color="#c00000"
        />
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

export default CrearUsuarioScreen;

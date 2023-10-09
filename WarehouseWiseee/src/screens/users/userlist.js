import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ScrollView, Modal, Image } from 'react-native';

const UsuariosScreen = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com', rol: 'usuario1', deposito: 'deposito1' },
    { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com', rol: 'usuario2', deposito: 'deposito2' },
    { id: 3, nombre: 'Usuario 3', email: 'usuario2@example.com', rol: 'usuario3', deposito: 'deposito3' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleUserPress = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./w.png')}
        style={styles.banner}
      />

      <Text style={styles.title}>Lista de Usuarios</Text>

      <View style={styles.tableContainer}>
        <View style={styles.column}>
          {usuarios.map((user) => (
            <Text key={user.id} style={styles.userItemText}>
              {user.nombre}
            </Text>
          ))}
        </View>
        <View style={styles.column}>
          {usuarios.map((user) => (
            <View style={styles.roundedButton}>
              <Button
                key={user.id}
                title="Ver info"
                onPress={() => handleUserPress(user)}
                color="#c00000"
              />
            </View>
          ))}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <View>
              <Text style={styles.modalTitle}>Detalles del Usuario</Text>
              <Text>Nombre: {selectedUser.nombre}</Text>
              <Text>Email: {selectedUser.email}</Text>
              <Text>Rol: {selectedUser.rol}</Text>
              <Text>Depósito: {selectedUser.deposito}</Text>
              <Button
                title="Cerrar"
                onPress={() => setModalVisible(false)}
                color="#666666"
              />
            </View>
          )}
        </View>
      </Modal>

      <View style={styles.regresarButtonContainer}>
        <Button title="Regresar" onPress={() => {}} color="#666666" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    color: 'white',
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
  tableContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    flex: 2,
    alignItems: 'center',
  },
  userItemText: {
    color: 'white',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  roundedButton: {

  },
  regresarButtonContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden', 
    marginTop: 30,
  },
});

export default UsuariosScreen;
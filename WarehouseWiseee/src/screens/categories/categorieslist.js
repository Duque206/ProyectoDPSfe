import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Picker, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import SampleSearchComponent from './paginas/buscar';

import Logo from './imagenes/w.png';
import { Button } from 'react-native-elements';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('Opción 1'); 
  const tableData = [
    ['Nombre', 'Descripcion ', 'Modificar'],
    ['electronico', 'smartTv,laptos,smartphone', 'Editar'],
    ['electrodomesticos', 'microondas,refrigeradoras', 'Editar'],
    ['muebles', 'sillones,mesas', 'Editar'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={Logo} style={styles.logo} />

        

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Panel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Usuarios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Categorias</Text>
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={selectedOption}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedOption(itemValue)
          }
        >
          <Picker.Item label="Admin" value="Opción 1" style={{ width: 200 }} />
        </Picker>

      </View>

      <View style={styles.container4}>
      <View style={styles.tex_cont}>
      <Text style={styles.text_2}>Detalles Categorias</Text>
      </View>
      </View>

<View style={styles.container3}>
<View style={styles.buttonGroup}>
<TouchableOpacity style={styles.button_2}>
  <Text style={styles.buttonText_2}>Crear Categoria</Text>
</TouchableOpacity>
</View>

  <View style={styles.container5}>
  <SampleSearchComponent />
  </View>
  
</View>


<View style={styles.container2}>
  <Table borderStyle={{ borderWidth: 2, borderColor: 'white' }}>
    <Row data={tableData[0]} style={styles.head} textStyle={styles.text} />
    <Rows data={tableData.slice(1)} textStyle={styles.text} />
  </Table>
</View>



</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1 },
container1: { flexDirection: 'row',backgroundColor: 'gray', padding: 10},
container2: { backgroundColor: 'gray', flex: 1 },
container3: {flexDirection: 'row', backgroundColor: 'gray', padding: 10},
container4: {flexDirection: 'row', backgroundColor: '#696969',padding:5, justifyContent: 'center',alignItems: 'center',},
container5: {  flex: 1 },
logo: { width: 100, height: 100, alignSelf: 'center' },
picker: { backgroundColor: '#696969', marginBottom: 10, text:{color:'white',}, marginRight: 5, flex:1,borderRadius: 5 ,height:40,marginTop:20},

buttonGroup: { flexDirection: 'row', justifyContent: 'center' },
button: {
    padding: 10,
    backgroundColor: 'transparent', 
    borderRadius: 10, 
    margin: 5,
  },
  buttonText: { color: 'white', fontSize: 16, backgroundColor:'gray' },
  head: { height: 40, backgroundColor: '#696969' },
  text: { margin: 6, color: 'white' },
  text_2: { margin: 10, color: 'white',fontSize:30},
  tex_cont: { backgroundColor:'transparent',borderRadius: 10,flex:1},
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button_2: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  button_3: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 30,
    flex:1,
  
  },
  buttonText_2: { color: 'white', fontSize: 16, backgroundColor:'red' ,borderRadius:25,padding:10},
  buttonText_3: { color: 'white', fontSize: 16, backgroundColor:'darkgray' ,borderRadius:25,padding:10,flex:1},
  Button_Dim: {
    width: 100, 
    height: 20, 
  },

});


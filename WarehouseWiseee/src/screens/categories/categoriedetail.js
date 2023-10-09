import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Picker, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import SampleSearchComponent from './paginas/buscar';

import Logo from './imagenes/w.png';
import Logo_2 from './imagenes/e.png';
import { Button } from 'react-native-elements';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('Opción 1'); 
    const tableData = [
    ['Nombre', 'Unidades ', 'Precio'],
    ['SmartTV', '25', '$1500'],
    ['Horno Microondas', '30', '$300'],
    ['PlayStation 5', '28', '$1200'],
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
      <Text style={styles.text_2}>Categorias</Text>
      </View>
      </View>

      <View style={styles.container3}>
      <Image source={Logo_2} style={styles.logo} />

      <View style={styles.container7}>
      <View style={styles.tex_cont}>
      <Text style={styles.text_2}>Electronica</Text>
      </View>
      <View style={styles.tex_cont}>
      <Text style={styles.text}>
        Descripcion: SmartTV,laptos,smartphone
      </Text>
      </View>
     
      </View>
      <View style={styles.container6}>
      <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button_2}>
        <Text style={styles.buttonText_2}>Editar Categoria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_2}>
        <Text style={styles.buttonText_2}>   Desasociar   </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>

      <View style={styles.container4}>
      <View style={styles.tex_cont}>
      <Text style={styles.text_2}>Otras Categorias</Text>
      </View>
      </View>

      <View style={styles.container4}>
        
      <View style={styles.container7}>
      <View style={styles.tex_cont}>
      <Text style={styles.text_2}>Electrodomestico</Text>
      </View>
      <View style={styles.tex_cont}>
      <Text style={styles.text}>
        Descripcion: Microondas,refrigeradoras.
      </Text>
      </View>
     
      </View>
      <View style={styles.container7}>
      <View style={styles.tex_cont}>
      <Text style={styles.text_2}>Muebles</Text>
      </View>
      <View style={styles.tex_cont}>
      <Text style={styles.text}>
        Descripcion: sofas,mesas.
      </Text>
      </View>
    
      </View>
      </View>

      </View>
   
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  container1: { flexDirection: 'row',backgroundColor: 'gray', padding: 10},
  container2: { backgroundColor: 'gray', flex: 1 },
  container3: {flexDirection: 'row', backgroundColor: 'gray', padding: 10,justifyContent: 'space-between'},
  container4: {flexDirection: 'row', backgroundColor: '#696969',padding:5, justifyContent: 'center',alignItems: 'center',justifyContent: 'space-between',flex:1,height: 150},
  container5: {  flex: 1 },
  container6: {flexDirection: 'row', backgroundColor: 'gray',padding:5, justifyContent: 'center',alignItems: 'center'},
  container7: { backgroundColor: 'gray',width:470, justifyContent: 'center' ,borderBlockColor:"transparent",border: 30},
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
  text: { margin: 6, color: 'white',flex:1 },
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
  buttonText_4: { color: 'white', fontSize: 16, backgroundColor:'#e9967a' ,borderRadius:25,padding:10},
  buttonText_3: { color: 'white', fontSize: 16, backgroundColor:'darkgray' ,borderRadius:25,padding:10,flex:1},
  Button_Dim: {
    width: 100, 
    height: 20,  
  },

});


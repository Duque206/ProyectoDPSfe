import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/login';
import Categoria from './src/screens/categories/categoriedetail';
import Lista from './src/screens/categories/categorieslist';
import Home from './src/screens/homepage';
import CrearUsuario from './src/screens/users/createuser';
import CrearProducto from './src/screens/products/createproduct';
import DetalleProducto from './src/screens/products/detailproduct';
import ListaProducto from './src/screens/products/productlist';
const Stack = createStackNavigator();

const MyStack = () => {

  return(
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="login"  component={LoginScreen} />
  <Stack.Screen name="createuser"  component={CrearUsuario} />
  <Stack.Screen name="homepage"  component={Home} />
  <Stack.Screen name="categoriedetail"  component={Categoria} />
  <Stack.Screen name="categorieslist"  component={Lista} />
  <Stack.Screen name="createproduct"  component={CrearProducto} />
  <Stack.Screen name="detailproduct"  component={DetalleProducto} />
  <Stack.Screen name="productlist"  component={ListaProducto} />
</Stack.Navigator>
</NavigationContainer>
  );
};

export default MyStack
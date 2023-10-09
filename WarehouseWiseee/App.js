import React,{useEffect, useState} from 'react';
import { NativeWindStyleSheet } from "nativewind";

import { NavigationContainer } from '@react-navigation/native';
import { HomeStackNavigator } from './src/navigations/navigator';
import { LoginStackNavigator } from './src/navigations/navigator';
import { getAuthToken } from './src/context/AuthContext';

import { QueryClient, QueryClientProvider } from 'react-query';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  useEffect( () => {
    checkLoginStatus();
  },[]);
  
  const queryClient = new QueryClient();
  const [haveToken,setHaveToken] = useState(false);
  const checkLoginStatus = async () => {
    await axiosRoute.boot();
    try {
      const token = await getAuthToken();

      if (token) {
        setHaveToken(true);
      } else {
        setHaveToken(false);
      }
    } catch (error) {
      console.error('Error al verificar el estado de inicio de sesión: ', error);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {
        haveToken ? (
          <NavigationContainer>
            <HomeStackNavigator></HomeStackNavigator>
          </NavigationContainer>
        ):(
          <NavigationContainer>
            <LoginStackNavigator></LoginStackNavigator>
          </NavigationContainer>
        )
      }
    </QueryClientProvider>
  );
}
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { HomePage } from "../screens/homepage";
//import { CrearUsuarioS } from "../screens/users/createuser";   // Corregido el nombre del componente
import { NavigationContainer } from "@react-navigation/native";

//import { Login } from "../screens/login";



const Tab = createBottomTabNavigator();
const screenOptionsTabStyle = {
    headerShown:false,
    tabBarStyle:{
        backgroundColor:'#374A7A',
        height:60,
        borderTopWidth: 0,
    }
}
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={screenOptionsTabStyle}
        >
            <Tab.Screen
                name="homepage"
                component={HomePage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({focused}) => (
                        <AntDesign name="home" color={focused ? '#6987B7': 'white'} size={24} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

const MyStack = () => {
    return(
<NavigationContainer>
    <Stack.Navigator>
        <Stack>
            name="createuser"
            component={CrearUsuarioS}
        </Stack>
    </Stack.Navigator>
</NavigationContainer>
    );
}
export default MyStack

const screenOptionsStyle = {
    headerShown:false
}
export const HomeStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={screenOptionsStyle} >
            <Stack.Screen name="home" component={BottomTabNavigator} />
            <Stack.Screen name="login" component={Login} />
         
        </Stack.Navigator>
    )
};

export const LoginStackNavigator = () => {
    
    return (
        <Stack.Navigator screenOptions={screenOptionsStyle} >
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={BottomTabNavigator} />
          
        </Stack.Navigator>
    )
};



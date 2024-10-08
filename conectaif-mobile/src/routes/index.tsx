import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginHome from '../screens/Principal/Login';
import RecuperarConta from '../screens/Principal/RecuperarConta';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginHome} options={{ headerShown: false }} />
      <Stack.Screen name='ReConta' component={RecuperarConta} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Routes;

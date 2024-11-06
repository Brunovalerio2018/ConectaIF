import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Feather } from '@expo/vector-icons';

import Perfil from "../screens/Perfil";
import Grupo from "../screens/Grupo";
import Ocorrencias from "../screens/Ocorrencias";
import Reunioes from "../screens/Reunioes";
import Documentos from "../screens/Documento";
import Notificacoes from "../screens/Notificacoes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ title: '' }}>
      
      <Tab.Screen  
        name="Ocorrencias"
        component={Ocorrencias}
        options={{
          tabBarIcon: () => <Feather name="alert-triangle" size={24} color="black" />
        }}
      />

      <Tab.Screen 
        name="Grupos" 
        component={Grupo}
        options={{
          tabBarIcon: () => <Feather name="users" size={24} color="black" />
        }}
      />
      
      <Tab.Screen 
        name="Documentos"
        component={Documentos}
        options={{
          tabBarIcon: () => <Feather name="file-text" size={24} color="black" />
        }}
      />

      <Tab.Screen 
        name="Reunioes"
        component={Reunioes}
        options={{
          tabBarIcon: () => <Feather name="calendar" size={24} color="black" />
        }}
      />

      <Tab.Screen 
        name="Notificacoes"
        component={Notificacoes}
        options={{
          tabBarIcon: () => <Feather name="bell" size={24} color="black" />
        }}
      />

      <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />
        }}
      />
      
    </Tab.Navigator> 
  );
}

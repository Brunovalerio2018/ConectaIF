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


export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ title: ''}}>
            
            <Tab.Screen  
            name="Ocorrencias"
            component={Ocorrencias}
            options={{tabBarIcon: () => <Feather name="home"/>


            }}/>

            <Tab.Screen 
            name="Grupos" 
            component={Grupo}
            options={{tabBarIcon: () => <Feather name="home"/>

            }}/>
            
            <Tab.Screen 
            name="Documentos"
            component={Documentos}
            options={{tabBarIcon: () => <Feather name="home"/>}}
            />

            <Tab.Screen 
            name="Reunioes"
            component={Reunioes}
            options={{tabBarIcon: () => <Feather name="home"/>}}
            />


            <Tab.Screen 
            name="Notificacoes"
            component={Notificacoes}
            options={{tabBarIcon: () => <Feather name="home"/>}}
            />

            <Tab.Screen 
            name="Perfil"
            component={Perfil}
            options={{tabBarIcon: () => <Feather name="home"/>}}
            />

            




        </Tab.Navigator> 
    )
}

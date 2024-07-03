import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import MainTela from '../telas/MainTela';
import QuestionarioTela from '../telas/QuestionarioTela';
import ResumoTela from '../telas/ResumoTela';
import RelatorioTela from '../telas/RelatorioTela';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const container = (
<NavigationContainer>
  <StatusBar barStyle="light-content"/>
  <Tab.Navigator
    initialRouteName="MainTela"
    screenOptions={{
      headerStyle: {backgroundColor: '#242424'},
      headerTintColor: 'white',
      title: 'Projeto ChatGPT - IMT'
    }}
  >
    <Tab.Screen
      name="MainTela"
      component={MainTela}
      options={{
        tabBarLabel: 'Início',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" color={color} size={size}/>
        )
      }}
    />
    <Tab.Screen
      name="QuestionarioTela"
      component={QuestionarioTela}
      options={{
        tabBarLabel: 'Gerador',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="sync-circle-outline" color={color} size={size}/>
        )
      }}
    />
    <Tab.Screen
      name="ResumoTela"
      component={ResumoTela}
      options={{
        tabBarLabel: 'Logs',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="terminal-outline" color={color} size={size}/>
        )
      }}
    />
    <Tab.Screen
      name="RelatorioTela"
      component={RelatorioTela}
      options={{
        tabBarLabel: 'Estatísticas',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="analytics-outline" color={color} size={size}/>
        )
      }}
    />
  </Tab.Navigator>
</NavigationContainer>
)
  
export default container
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import { StatusBar } from 'expo-status-bar'
import DetailScreen from '../screen/DetailScreen'

const Stack = createNativeStackNavigator()
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <StatusBar style='light'/>
       <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
         <Stack.Screen name='Home' component={HomeScreen}/>
         <Stack.Screen name='Detail' component={DetailScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
import { StyleSheet, Text, View } from 'react-native'

import ChatMessageScreen from './screens/ChatMessageScreen'
import ChatScreen from './screens/ChatScreen'
import FriendScreen from './screens/FriendScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import RegisterScreen from './screens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Friends" component={FriendScreen} />
      <Stack.Screen name="Chats" component={ChatScreen} />
      <Stack.Screen name="Messages" component={ChatMessageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
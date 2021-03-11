import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal'

import HomeScreen from './pages/HomeScreen'
import CalendarScreen from './pages/CalendarScreen'
import PlanScreen from './pages/PlanScreen'
import ContactScreen from './pages/ContactScreen'
import InformationScreen from './pages/InformationScreen'

import * as GoogleSignIn from 'expo-google-sign-in';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({ //I believe we will be able to create default styles that should make the code more readable later
InputView: {
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
}
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); //The navigation tab container


function App(){ //This holds the tabs that we can use to navigate. Each tab will move us to different screens which are defined further below
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main Menu" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Plan" component={PlanScreen} />

        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Info" component={InformationScreen} />  

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App; //App is the default page that will show up on loading in, I believe it takes the uppermost Tab defined in the "App" function

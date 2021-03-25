import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { TextInput } from 'react-native-gesture-handler';

/**
 * @classdesc .js file that holds the home screen information and requisite code
 * @todo Add basic information and reminders for users to use upon login
 */

/**
 * Acts as a basic placeholder for a future home screen to be developed
 * @returns The display parameters for said placeholder screen
 */
export default class CalendarScreen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.otf'),
  });
  }
  render()
  { 
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Calendar</Text>
            <Text>This will be the home tab</Text>
            <Text style={styles.bold}>Basic entry page</Text>
            <Text style={styles.italics}>
              Good spot for important notifications and navigation
            </Text>
          </View>
    );
  }
}

/**
 * @constant styles Contains css/style information for HomeScreen.js also contains font information
 * @type {StyleSheet}
 * @default
 */
const styles = StyleSheet.create
({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bold: {
    fontFamily: 'Inter-Black',
    fontSize: 20
  },

  italics: {
    fontFamily: 'Inter-SemiBoldItalic',
    fontSize: 15
  }
});
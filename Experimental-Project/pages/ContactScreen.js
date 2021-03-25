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
 * @classdesc This will be the primary page for contacting the nurse or have information related to it
 */

/**
 * Displays the contact info within this page 
 * @class
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
            <Text>This will be the contact tab</Text>
            <Text style={styles.bold}>Displays contact info</Text>
            <Text style={styles.italics}>
              Lists various contact information for the patient's doctors, nurses, and any additional help
            </Text>
          </View>
    );
  }
}

/**
 * @constant styles sheets used within this document. Style sheets allow for cleaner code when designing UI
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
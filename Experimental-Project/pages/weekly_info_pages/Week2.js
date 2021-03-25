import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { TextInput } from 'react-native-gesture-handler';



/**
 * @classdesc .js file that holds the week 2 information and requisite code
 * @todo Add various tips, information, and FAQs that mothers might want to know on week 2 of their pregnancy
 */

/**
 * Acts as a basic placeholder for a future week 2 information screen to be developed
 * @returns The display parameters for said placeholder screen
 */
export default class CalendarScreen extends React.Component {
/*   async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  } */ //Commented out for now due to errors, to fix later
  render()
  { 
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Week 2</Text>
            <Text>This will be the information tab</Text>
            <Text style={styles.bold}>Acts as an FAQ</Text>
            <Text style={styles.italics}>
              Questions expecting mothers may have will go here
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
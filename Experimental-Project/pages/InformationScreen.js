import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { TextInput } from 'react-native-gesture-handler';



export default class CalendarScreen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Calendar</Text>
            <Text>This will be the information tab</Text>
            <Text style={styles.bold}>Acts as an FAQ</Text>
            <Text style={styles.italics}>
              Questions expecting mothers may have will go here
            </Text>
          </View>
    );
  }
}

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
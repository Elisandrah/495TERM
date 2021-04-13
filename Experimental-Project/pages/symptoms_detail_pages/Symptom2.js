import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, StatusBar, SectionList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { TextInput } from 'react-native-gesture-handler';

const DATA = [ //This is where the week's facts will be listed
  {
    title: "Causes",
    data: ["Cause 1", "Cause 2", "Cause 3"]
  },
  {
    title: "Treatments",
    data: ["Drink water", "Lay down", "Limit exercise"]
  },
  {
    title: "Contact Your Nurse If:",
    data: ["Bleeding starts", "Pain gets worse", "You faint or feel weak"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class Week1Screen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return (
        <SafeAreaView style={styles.container}>
          <Text>Symptom 2</Text>
          <SectionList
            style={{marginTop:40, width: '100%'}}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: "#F9D2D2",
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  }
});
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

/**
 * @classdesc This is the information page that will contain everything relevant to week1
 */

const DATA = [ //This is where the week's facts will be listed
  {
    title: "Important Milestones",
    data: ["Baby fact 1", "Baby fact 2", "Baby fact 3"]
  },
  {
    title: "Common Symptoms",
    data: ["Fever", "Nausea", "Dizziness"]
  },
  {
    title: "Keep in Mind...",
    data: ["Drink lots of water", "Take your vitamins", "Track your weight"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

/**
 * Renders the flatlist from the DATA array 
 * @class
 */
export default class CalendarScreen extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
    'Inter-Black': require('../../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic': require('../../assets/fonts/Inter-SemiBoldItalic.otf'),
  });
  }
  render()
  { 
      return (
        <SafeAreaView style={styles.container}>
          <SectionList
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

/**
 * @constant styles sheets used within this document. Style sheets allow for cleaner code when designing UI
 * @default
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeeklyInfoScreen from './WeeklyInfoScreen';

/**
 * @classdesc This will be the main page for the information screen. This page will bring allow you to drill down further to the required information sections relevant to the patient
 * @todo Fill the pages with the patient education documents
 */

const Stack = createStackNavigator();

const DATA = [ //This generates the list, more can be added. Remember to add a navigation feature for it if adding more
  {
    id: 'FAQ',
    title: 'FAQ',
  },
  {
    id: 'Weekly Information',
    title: 'Weekly Information',
  },
  {
    id: 'Symptoms',
    title: 'Searchable Symptoms',
  },

];

/**
 * 
 * @returns Renders the FAQ that mothers have during their pregnancies
 */
function FAQ(){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.bold}>FAQ</Text>
      <Text style={styles.italics}>
        Frequently Asked Questions will be present here
      </Text>
    </View>
);
}

/**
 * 
 * @returns Renders the page of symptons
 * @todo Make this page have a search bar so that patients can enter a symptom they are experiencing and have information shown to them
 */
function Symptoms(){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.bold}>Symptoms</Text>
      <Text style={styles.italics}>
        Searchable Symptoms will be present here
      </Text>
    </View>
);
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


/**
 * 
 * @param {object} navigation The navigation container that is used to move within the pages contained here 
 * @returns 
 */
function MainPage({navigation}) { //This is the screen where we arrive when using the main navigation tab. Clicking each list item will bring you to its subsequent page
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={{marginTop:40}}
            data={DATA}
            keyExtractor = {item => item.id}
            renderItem={({item}) => (
              <View style = {{justifyContent: 'center', MarginBottom:10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(item.id)}>
                  <Text style = 
                    {{backgroundColor:'blue', color:'white', padding:10, width:250}}>
                    {item.title}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            )}
            
          />
        </SafeAreaView>
    );
}

/**
 * This contains the child navigation container that will be used for navigating within this class
 * @class 
 */
export default class InformationScreen extends React.Component { //All screens are defined in this section
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.otf'),
  });
  }

  render()
  { 
      return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false}} />
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="Weekly Information" component={WeeklyInfoScreen} />
            <Stack.Screen name="Symptoms" component={Symptoms} />
        </Stack.Navigator>
        </NavigationContainer>
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
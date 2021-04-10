import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeeklyInfoScreen from './WeeklyInfoScreen';

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

function MainPage({navigation}) { //This is the screen where we arrive when using the main navigation tab. Clicking each list item will bring you to its subsequent page
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={{marginTop:40}}
            data={DATA}
            keyExtractor = {item => item.id}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={() => navigation.navigate(item.id)}>
                <View style={styles.button}>
                  <Text style=
                    {styles.buttonText}>
                    {item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            
          />
        </SafeAreaView>
    );
}


export default class InformationScreen extends React.Component { //All screens are defined in this section
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
  },

  button: {
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20
  },

  buttonText: {
    color: 'white',
    padding: 10,
    margin: 20,
    textAlign: 'center',
    fontSize: 24
  }
});
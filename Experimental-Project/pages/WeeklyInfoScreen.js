import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Week1 from './weekly_info_pages/Week1';
import Week2 from './weekly_info_pages/Week2';

/**
 * @classdesc This is the driver class that will redirect patients to the specific week of information that they seek
 */

const WeeklyStack = createStackNavigator();

const DATA = [ //List of IDs for buttons
  {
    id: 'Week 1',
    title: 'Week 1',
  },
  {
    id: 'Week 2',
    title: 'Week 2',
  },

];

/**
 * @function MainPage is the screen where we arrive when using the main navigation tab. Clicking each list item will bring you to its subsequent page
 * @param {object} navigation This is the navigation container that is passed to allow the screen to move to another screen 
 * @returns Renders the flatlist which contains the list of weeks that are currently present for information
 */

function MainPage({navigation}) { 
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
 * @class This is the main driver that contains the child navigation container relevant to the weekly information
 */

export default class WeeklyInfoScreen extends React.Component {
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
                  <WeeklyStack.Navigator>
                    <WeeklyStack.Screen name="Main" component={MainPage} options={{ headerShown: false}} />
                    <WeeklyStack.Screen name="Week 1" component={Week1} options={{ headerShown: false}} />
                    <WeeklyStack.Screen name="Week 2" component={Week2} options={{ headerShown: false}} />
                </WeeklyStack.Navigator>
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
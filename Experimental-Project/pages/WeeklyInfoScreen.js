import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Week1 from './weekly_info_pages/Week1';
import Week2 from './weekly_info_pages/Week2';


const WeeklyStack = createStackNavigator();

const DATA = [ //List of IDs for buttons
  {
    id: 'Week 1', title: 'Week 1'
  },
  {
    id: 'Week 2', title: 'Week 2'
  },
  {
    id: 'Week 3', title: 'Week 3'
  },
  {
    id: 'Week 4', title: 'Week 4'
  },
  {
    id: 'Week 5', title: 'Week 5'
  },
  {
    id: 'Week 6', title: 'Week 6'
  },
  {
    id: 'Week 7', title: 'Week 7'
  },
  {
    id: 'Week 8', title: 'Week 8'
  },
  {
    id: 'Week 9', title: 'Week 9'
  },
  {
    id: 'Week 10', title: 'Week 10'
  },
  {
    id: 'Week 11', title: 'Week 11'
  },
  {
    id: 'Week 12', title: 'Week 12'
  },
  {
    id: 'Week 13', title: 'Week 13'
  },
  {
    id: 'Week 14', title: 'Week 14'
  },
  {
    id: 'Week 15', title: 'Week 15'
  },
  {
    id: 'Week 16', title: 'Week 16'
  },
  {
    id: 'Week 17', title: 'Week 17'
  },
  {
    id: 'Week 18', title: 'Week 18'
  },
  {
    id: 'Week 19', title: 'Week 19'
  },
  {
    id: 'Week 20', title: 'Week 20'
  },
  {
    id: 'Week 21', title: 'Week 21'
  },
  {
    id: 'Week 22', title: 'Week 22'
  },
  {
    id: 'Week 23', title: 'Week 23'
  },
  {
    id: 'Week 24', title: 'Week 24'
  },
  {
    id: 'Week 25', title: 'Week 25'
  },
  {
    id: 'Week 26', title: 'Week 26'
  },
  {
    id: 'Week 27', title: 'Week 27'
  },
  {
    id: 'Week 28', title: 'Week 28'
  },
  {
    id: 'Week 29', title: 'Week 29'
  },
  {
    id: 'Week 30', title: 'Week 30'
  },
  {
    id: 'Week 31', title: 'Week 31'
  },
  {
    id: 'Week 32', title: 'Week 32'
  },
  {
    id: 'Week 33', title: 'Week 33'
  },
  {
    id: 'Week 34', title: 'Week 34'
  },
  {
    id: 'Week 35', title: 'Week 35'
  },
  {
    id: 'Week 36', title: 'Week 36'
  },
  {
    id: 'Week 37', title: 'Week 37'
  },
  {
    id: 'Week 38', title: 'Week 38'
  },
  {
    id: 'Week 39', title: 'Week 39'
  },
  {
    id: 'Week 40', title: 'Week 40'
  },
];

function MainPage({navigation}) { //This is the screen where we arrive when using the main navigation tab. Clicking each list item will bring you to its subsequent page
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{marginTop:40, width: '100%'}}
        data={DATA}
        keyExtractor = {item => item.id}
        renderItem={({item}) => (
          <View style={{margin: 20}}>
            <TouchableHighlight underlayColor="#FFFFFF" onPress={() => navigation.navigate(item.id)}>
              <View style={styles.button}>
                <Text style=
                  {styles.buttonText}>
                  {item.title}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        )}
        
      />
    </SafeAreaView>
);
}

export default class WeeklyInfoScreen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return ( //All screen point to Week 1 page for testing until that page is finished.
        <NavigationContainer independent={true}>
          <WeeklyStack.Navigator>
            <WeeklyStack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 1" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 2" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 3" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 4" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 5" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 6" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 7" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 8" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 9" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 10" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 11" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 12" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 13" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 14" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 15" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 16" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 17" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 18" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 19" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 20" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 21" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 22" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 23" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 24" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 25" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 26" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 27" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 28" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 29" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 30" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 31" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 32" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 33" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 34" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 35" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 36" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 37" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 38" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 39" component={Week1} options={{ headerShown: false }} />
            <WeeklyStack.Screen name="Week 40" component={Week1} options={{ headerShown: false }} />
          </WeeklyStack.Navigator>
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
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24
  }
});
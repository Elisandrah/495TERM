import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { FlatList, State, TextInput } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';

const Stack = createStackNavigator();



function MHPForm({navigation}){
  const [state, onChangeText] = React.useState({ //This object holds the inputed data
    id: "",
    provider: "",
    age: "",
    weight: "",
    weightGain: "",
    bloodPressure: "",
    fundalHeight: "",
    meds: "",
    urineText: "",
    fetalTones: ""
  })

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.id}
        label="ID"
        placeholder="Enter the id"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.provider}
        label="Provider"
        placeholder="Enter the provider"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.age}
        placeholder="Enter the age"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.weight}
        placeholder="Enter the weight"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.weightGain}
        placeholder="Enter the weight gained"
      />
      <TextInput
        style={styles.input}
        allowFontScaling={true}
        onChangeText={onChangeText}
        value={state.bloodPressure}
        placeholder="Enter current blood pressure"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.fundalHeight}
        placeholder="Enter the fundal height"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.meds}
        multiline={true}
        placeholder="Enter current medication"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.urineText}
        placeholder="Enter results of urine test"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={state.fetalTones}
        placeholder="Enter the fetal tones"
      />

      <Button
        onPress={() =>
          navigation.navigate("MHP Data")
          
        }
        title="View entered data"
      />
    </View>
);
}

function DisplayMHP({navigation}, state){
  return(
    <View style={styles.container}>
      <Text> This can be one of our test cases, have the data inputed on previous screen saved</Text>
      <FlatList
        style={{marginTop:40}}
        //data={state}




      />
    </View>
  );
}

function MainPage({navigation}){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  <Text>Calendar</Text>
      <Text>This will be the plan tab</Text>
      <Text style={styles.bold}>Displays MHP</Text>
      <Text style={styles.italics}>
        Lists the maternal health plan for the patient
      </Text>
      <Button
        onPress={() =>
          navigation.navigate("Maternal Health Plan")
        }
        title="Fill out Maternal Health Plan"
      />
    </View>
  );

}



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
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false}} />
          <Stack.Screen name="Maternal Health Plan" component={MHPForm} />
          <Stack.Screen name="MHP Data" component={DisplayMHP} />
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

  input: {
    height: 40,
    width: 200,
    margin: 8,
    borderWidth: 1,

  }
});
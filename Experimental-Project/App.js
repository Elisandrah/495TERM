import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as GoogleSignIn from 'expo-google-sign-in';

function HomeScreen({ navigation }){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button 
      title = "Go to our old Default page"
      onPress={() => navigation.navigate('Default')}
      />
  </View>
  );
}

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Default" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function Test({navigation}) {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is a test</Text>
      <Text style={{ fontFamily: "Inter-Black" }}>Text below has been changed</Text>
      <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
        We can now begin building the app from this starting point
      </Text>
      <Button 
      title = "Go back to the home page"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

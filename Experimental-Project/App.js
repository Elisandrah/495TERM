import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal'

import * as GoogleSignIn from 'expo-google-sign-in';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({ //I believe we will be able to create default styles that should make the code more readable later
InputView: {
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
}
});

function HomeScreen({ navigation }){ //This is the default screen where you will arrive
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return( //Renders the image and places the login stuff
    <View style={StyleSheet.InputView}>
      <Image
        style={{width: 300, height: 250, resizeMode: 'contain'}}
        source={require('./assets/splash_img.png')} />
      <TextInput
       style={StyleSheet.InputView}
       placeholder="Email."
       placeholderTextColor = "#9E1B32"
       onChangeText={(email) => setEmail(email)}
       />
       <TextInput
        style={StyleSheet.InputView}
        placeholder="Password."
        placeHolderTextColor = "#828A8F"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
        <Button
          title="Log in"
          color = "#9E1B32"
        />
    <Text>Home Screen</Text>
  </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); //The navigation tab container


function App(){ //This holds the tabs that we can use to navigate. Each tab will move us to different screens which are defined further below
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main Menu" component={HomeScreen} />
        <Tab.Screen name="Old Home Screen" component={Test} />
        <Tab.Screen name="Information Hub" component={Information} />
        <Tab.Screen name="Weekly Information" component={Weekly} />
        <Tab.Screen name="MHP" component={MHP} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App; //App is the default page that will show up on loading in, I believe it takes the uppermost Tab defined in the "App" function

function Information({navigation}){
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This will be our information tab</Text>
        <Text style={{ fontFamily: "Inter-Black" }}>Examples include</Text>
        <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
          Searchable symptoms, Pregnancy PDFs, FAQ
        </Text>
      </View>
  );

}

function Weekly({navigation}){
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This will be the weekly information tab</Text>
        <Text style={{ fontFamily: "Inter-Black" }}>Weekly Information will be placed here</Text>
        <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
          If we can have a tracker in the background to automatically move the weeks along for each patient
        </Text>
      </View>
  );

}

function MHP({navigation}){
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This will be the MHP Hub</Text>
        <Text style={{ fontFamily: "Inter-Black" }}>MHP History</Text>
        <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
          MHP Entry
        </Text>
      </View>
  );

}

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
    <Text>Home Screen</Text>
        <Text>This is a test</Text>
        <Text style={{ fontFamily: "Inter-Black" }}>Text below has been changed</Text>
        <Text style={{ fontFamily: "Inter-SemiBoldItalic" }}>
          We can now begin building the app from this starting point
        </Text>
      </View>
  );
}

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
//import React, { setState, Component, useContext } from 'react';
import * as React from 'react';
import { Alert, Text, Button, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal'
import App from '../App'

import * as GoogleSignIn from 'expo-google-sign-in';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
/*
  onLogin()
  {
    //const { username, password } = this.state;
    

    //navigation.navigate("TabContainer")
  }
*/
  render() 
  {
    const { navigation } = this.props;
    const { signIn } = React.useContext(AuthContext);
    return( //Renders the image and places the login stuff
      <View style={StyleSheet.InputView}>
        <Image
          style={{width: 300, height: 250, resizeMode: 'contain'}}
          source={require('../assets/splash_img.png')} 
        />

        <TextInput
          value={this.state.username}
          style={StyleSheet.InputView}
          placeholder="Username"
          placeholderTextColor = "#9E1B32"
          onChangeText={(username) => this.setState({ username })}
        />

        <TextInput
          style={StyleSheet.InputView}
          placeholder="Password"
          placeHolderTextColor = "#828A8F"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          title="Log in"
          color = "#9E1B32"
          onPress={() => signIn({ username, password })}
        />
      </View>
      );
    }
}
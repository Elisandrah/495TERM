import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component { //This is the default screen where you will arrive
  render() 
  {
  	return( //Renders the image and places the login stuff
    	<View style={StyleSheet.InputView}>
    		<Image
    			style={{width: 300, height: 250, resizeMode: 'contain'}}
    			source={require('../assets/splash_img.png')} 
    		/>

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
  }
  
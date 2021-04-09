import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, TextInput, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import LoginScreen from './pages/LoginScreen';
import DrawerContainer from './pages/DrawerContainer';
import AuthContext from './Context';

import * as React from 'react';
//import React, { useReducer, useMemo, useEffect, createContext } from 'react';
//import * as React from "react";

const Stack = createStackNavigator();

const styles = StyleSheet.create({ //I believe we will be able to create default styles that should make the code more readable later
InputView: {
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
}
});

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function LoginScreen()
{
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return( //Renders the image and places the login stuff
    <View style={StyleSheet.InputView}>
      <Image
        style={{width: 300, height: 250, resizeMode: 'contain'}}
        source={require('./assets/splash_img.png')} 
      />
      <TextInput
        value={username}
        style={StyleSheet.InputView}
        placeholder="Username"
        placeholderTextColor = "#9E1B32"
        onChangeText={setUsername}
      />
      <TextInput
        style={StyleSheet.InputView}
        placeholder="Password"
        value={password}
        placeHolderTextColor = "#828A8F"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        title="Log in"
        color = "#9E1B32"
        onPress={() => signIn({ username, password })}
      />
    </View>
    );
    
}

export default function App({ navigation })
{
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
      const bootstrapAsync = async () => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
          //Restoring Token Failed
        }

        dispatch({ type: 'RESTORE_TOKEN', token: userToken});
      };

      bootstrapAsync();
    }, []);
  
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        //THIS IS WHERE SERVER ACCESS AND AUTHENTICATION WOULD OCCUR, WE DO NOT HAVE THIS YET

        dispatch({ type: 'SIGN_IN', token: 'dummy_auth_token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT'}),
      signUp: async data => {
        //THIS IS WHERE A USER WOULD BE DIRECTED TOWARDS A SERVER TO RECIEVE A TOKEN TO LOGIN WITH
        dispatch({ type: 'SIGN_IN', token: 'dummy_auth_token' });
      },
    }),
    []
  );

  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false, animationTypeForReplace: state.isSignout ? 'pop' : 'push' }}/>
            ) : (
              <Stack.Screen name="Main" component={DrawerContainer} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    );
}

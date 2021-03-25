import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';

import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, TextInput, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabContainer from './pages/TabContainer';
import InformationScreen from './pages/InformationScreen';

import * as React from 'react';

const AuthContext = React.createContext();
const Stack = createStackNavigator();

/**
 * @classdesc Main .js file from which the entire app is deployed. Contains both the main App function as well as the LoginScreen function
 * @todo Finish developing authentication flow, as well as implement either local verification/storage or remote verification/storage for user data/tokens
 */

/**
 * @constant styles Contains css/style information for App.js
 * @type {StyleSheet}
 * @default
 */
const styles = StyleSheet.create({ //I believe we will be able to create default styles that should make the code more readable later
InputView: {
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
}
});

/**
 * Placeholder function for when the app won't load into the login screen on startup
 * @returns Renders loading text for splash screen
 */
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

/**
 * Initial state function when logging in, uses the given authentication context in order to send  information through an authentication flow
 * @returns Renders login screen with TERM image and username/password fields
 */
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

/**
 * Main app file that acts as the starting point for execution
 * @param {Object} navigation The navigation context passed into the app when it is called
 * @returns 
 * @todo Learn how to pass username and password information securely into the authenication context dispatcher
 */
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
              <Stack.Screen name="Main" component={TabContainer} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    );
}

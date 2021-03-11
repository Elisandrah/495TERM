import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/LoginScreen';
import TabContainer from './pages/TabContainer';


const styles = StyleSheet.create({ //I believe we will be able to create default styles that should make the code more readable later
InputView: {
  flex: 1, 
  justifyContent: "center", 
  alignItems: "center"
}
});

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TabContainer" component={TabContainer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

//LOOK INTO THIS: https://reactnavigation.org/docs/4.x/auth-flow/

export default App;

//export default App; //App is the default page that will show up on loading in, I believe it takes the uppermost Tab defined in the "App" function

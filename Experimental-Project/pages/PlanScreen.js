import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
import { useState } from 'react';
import { Text, Button, View, Image, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Modal from 'react-native-modal';

import { FlatList, State, TextInput } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function MHPForm({navigation}){
  /*const [state, onChangeText] = React.useState({ //This object holds the inputed data
    id: "it didnt change",
    provider: "",
    age: "",
    weight: "",
    weightGain: "",
    bloodPressure: "",
    fundalHeight: "",
    meds: "",
    urineText: "",
    fetalTones: ""
  })*/
  const [id, setID] = useState('');
  const [provider, setProvider] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [weightGain, setWeightGain] = useState('');
  const [bp, setBP] = useState('');
  const [fundal, setFundal] = useState('');
  const [meds, setMeds] = useState('');
  const [urine, setUrine] = useState('');
  const [fetal, setFetal] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={id => setID(id)}
        value={id}
        label="ID"
        placeholder="Enter the id"
      />
      <TextInput
        style={styles.input}
        onChangeText={provider => setProvider(provider)}
        value={provider}
        label="Provider"
        placeholder="Enter the provider"
      />
      <TextInput
        style={styles.input}
        onChangeText={age => setAge(age)}
        value={age}
        placeholder="Enter the age"
      />
      <TextInput
        style={styles.input}
        onChangeText={weight => setWeight(weight)}
        value={weight}
        placeholder="Enter the weight"
      />
      <TextInput
        style={styles.input}
        onChangeText={weightGain => setWeightGain(weightGain)}
        value={weightGain}
        placeholder="Enter the weight gained"
      />
      <TextInput
        style={styles.input}
        onChangeText={bp => setBP(bp)}
        value={bp}
        placeholder="Enter current blood pressure"
      />
      <TextInput
        style={styles.input}
        onChangeText={fundal => setFundal(fundal)}
        value={fundal}
        placeholder="Enter the fundal height"
      />
      <TextInput
        style={styles.input}
        onChangeText={meds => setMeds(meds)}
        value={meds}
        multiline={true}
        placeholder="Enter current medication"
      />
      <TextInput
        style={styles.input}
        onChangeText={urine => setUrine(urine)}
        value={urine}
        placeholder="Enter results of urine test"
      />
      <TextInput
        style={styles.input}
        onChangeText={fetal => setFetal(fetal)}
        value={fetal}
        placeholder="Enter the fetal tones"
      />

      <Button
        onPress={() =>
          {navigation.navigate("MHP Data", {
            id: id,
            provider: provider,
            age: age,
            weight: weight,
            weightGain: weightGain,
            bp: bp,
            fundal: fundal,
            meds: meds,
            urine: urine,
            fetal: fetal,
          })
        }}
        title="View entered data"
      />
    </View>
);
}

function DisplayMHP({route, navigation}){
  const {id, provider, age, weight, weightGain, bp, fundal, meds, urine, fetal} = route.params;

  return(
    <View style={styles.bold}>
      <Text>ID entered is {id}</Text>
      <Text>Provider entered is {provider}</Text>
      <Text>Age entered is {age}</Text>
      <Text>Weight entered is {weight}</Text>
      <Text>Weight Gained is {weightGain}</Text>
      <Text>Blood Pressure entered is {bp}</Text>
      <Text>Fundal Height is {fundal}</Text>
      <Text>Medication entered is {meds}</Text>
      <Text>Urine Results are {urine}</Text>
      <Text>Fetal Tones entered are {fetal}</Text>

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
    'Inter-SemiBoldItalic': require('../assests/fonts/Inter-SemiBoldItalic.otf'),
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
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center'
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
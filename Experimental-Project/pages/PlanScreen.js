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
          {navigation.navigate("MHP Second Page", {
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
        title="Enter Second Page"
      />
    </View>
);
}

function MHPSecondPage({route, navigation}){
  const [PhysStrengths, setPhysStrengths] = useState('');
  const [PhysRiskFactor, setPhysRisk] = useState('');
  const [SocialStrengths, setSocialStrengths] = useState('');
  const [SocialRiskFactor, setSocialRisk] = useState('');
  const [Goals, setGoals] = useState('');
  const {id, provider, age, weight, weightGain, bp, fundal, meds, urine, fetal} = route.params;


    return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={PhysStrengths => setPhysStrengths(PhysStrengths)}
        value={PhysStrengths}
        multiline={true}
        placeholder="Enter Physical Strengths"
      />
      <TextInput
        style={styles.input}
        onChangeText={PhysRiskFactor => setPhysRisk(PhysRiskFactor)}
        value={PhysRiskFactor}
        multiline={true}
        placeholder="Enter Physical Risk Factors"
      />
      <TextInput
        style={styles.input}
        onChangeText={SocialStrengths => setSocialStrengths(SocialStrengths)}
        value={SocialStrengths}
        multiline={true}
        placeholder="Enter Psycho-Social Strengths"
      />
      <TextInput
        style={styles.input}
        onChangeText={SocialRiskFactor => setSocialRisk(SocialRiskFactor)}
        value={SocialRiskFactor}
        multiline={true}
        placeholder="Enter Psycho-Social Risk Factors"
      />
      <TextInput
        style={styles.input}
        onChangeText={Goals => setGoals(Goals)}
        value={Goals}
        multiline={true}
        placeholder="Enter Psycho-Social Risk Factors"
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
            PhysStrengths: PhysStrengths,
            PhysRiskFactor: PhysRiskFactor,
            SocialStrengths: SocialStrengths,
            SocialRiskFactor: SocialRiskFactor,
            Goals: Goals,
          })
        }}
        title="View Entered Data"
      />
      <Button
        onPress={() =>
          {navigation.navigate("Postnatal", {
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
            PhysStrengths: PhysStrengths,
            PhysRiskFactor: PhysRiskFactor,
            SocialStrengths: SocialStrengths,
            SocialRiskFactor: SocialRiskFactor,
            Goals: Goals,
          })
        }}
        title="Postnatal"
      />
    </View>
    )

}

function MHPPostNatal({route, navigation}){
  const [Delivery, setDelivery] = useState('');
  const [Complications, setComplications] = useState('');
  const [InfantWeight, setInfWeight] = useState('');
  const [Contraception, setContraception] = useState('');
  const [BreastFeeding, setBreastFeeding] = useState('');
  const {id, provider, age, weight, weightGain, bp, fundal, meds, urine, fetal, PhysStrengths, PhysRiskFactor,
    SocialStrengths, SocialRiskFactor, Goals} = route.params;

  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={Delivery => setDelivery(Delivery)}
        value={Delivery}
        multiline={true}
        placeholder="Deliver (Vaginal or Cesarean"
      />
      <TextInput
        style={styles.input}
        onChangeText={Complications => setComplications(Complications)}
        value={Complications}
        multiline={true}
        placeholder="Complications"
      />
      <TextInput
        style={styles.input}
        onChangeText={InfantWeight => setInfWeight(InfantWeight)}
        value={InfantWeight}
        multiline={true}
        placeholder="Enter Infant Weight"
      />
      <TextInput
        style={styles.input}
        onChangeText={Contraception => setContraception(Contraception)}
        value={Contraception}
        multiline={true}
        placeholder="Enter Contraception"
      />
      <TextInput
        style={styles.input}
        onChangeText={BreastFeeding => setBreastFeeding(BreastFeeding)}
        value={BreastFeeding}
        multiline={true}
        placeholder="Breastfeeding (Yes/No)"
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
            PhysStrengths: PhysStrengths,
            PhysRiskFactor: PhysRiskFactor,
            SocialStrengths: SocialStrengths,
            SocialRiskFactor: SocialRiskFactor,
            Goals: Goals,
            Delivery: Delivery,
            Complications: Complications,
            InfantWeight: InfantWeight,
            Contraception: Contraception,
            BreastFeeding: BreastFeeding
          })
        }}
        title="View Entered Data"
      />
    </View>
  )

}

function getMHP({route}){
  const {id, provider, age, weight, weightGain, bp, fundal, meds, urine, fetal, PhysStrengths, PhysRiskFactor,
    SocialStrengths, SocialRiskFactor, Goals, Delivery, Complications, InfantWeight, Contraception, BreastFeeding} = route.params;

  const dataExport = {
    id: id,
    provider: provider,
    age: age,
    weight: weight,
    weightGain: weightGain,
    bp: bp,
    funal: fundal,
    meds: meds,
    urine: urine,
    fetal: fetal,
    PhysStrengths: PhysStrengths,
    PhysRiskFactor: PhysRiskFactor,
    SocialStrengths: SocialStrengths,
    SocialRiskFactor: SocialRiskFactor,
    Goals: Goals,
    Delivery: Delivery,
    Complications: Complications,
    InfantWeight: InfantWeight,
    Contraception: Contraception,
    BreastFeeding: BreastFeeding
  }

  var obj = JSON.parse(dataExport)
  return obj
}

function DisplayMHP({route, navigation}){
  const {id, provider, age, weight, weightGain, bp, fundal, meds, urine, fetal, PhysStrengths, PhysRiskFactor,
  SocialStrengths, SocialRiskFactor, Goals, Delivery, Complications, InfantWeight, Contraception, BreastFeeding} = route.params;

  getMHP


  if (Delivery != '') { //Display Postnatal Information
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
        <Text>Physical Strengths are {PhysStrengths}</Text>
        <Text>Physical Risk Factors are {PhysRiskFactor}</Text>
        <Text>Psycho-Social Strengths are {SocialStrengths}</Text>
        <Text>Psycho-Social Risk Factors are {SocialRiskFactor}</Text>
        <Text>Goals are {Goals}</Text>
        <Text>Complications are {Complications}</Text>
        <Text>Infant Weight is {InfantWeight}</Text>
        <Text>Contraception used is {Contraception}</Text>
        <Text>Breastfeeding: {BreastFeeding}</Text>
      </View>
    );
  }
  else{ //Display information without Postnatal
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
        <Text>Physical Strengths are {PhysStrengths}</Text>
        <Text>Physical Risk Factors are {PhysRiskFactor}</Text>
        <Text>Psycho-Social Strengths are {SocialStrengths}</Text>
        <Text>Psycho-Social Risk Factors are {SocialRiskFactor}</Text>
        <Text>Goals are {Goals}</Text>
      </View>
    );
  }
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
          <Stack.Screen name="MHP Second Page" component={MHPSecondPage} />
          <Stack.Screen name="Postnatal" component={MHPPostNatal} />
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
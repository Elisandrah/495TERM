import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
//import React, { useState, Component } from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableHighlight, ScrollView, TextInput, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchableFlatList } from "react-native-searchable-list";
import Symptom1 from './symptoms_detail_pages/Symptom1';
import Symptom2 from './symptoms_detail_pages/Symptom2';

const SymptomsStack = createStackNavigator();

const DATA = [ //This generates the list, more can be added. Remember to add a navigation feature for it if adding more
  {
    id: 'Symptom1',
    name: 'Symptom 1',
    category: 'Symptom 1'
  },
  {
    id: 'Symptom2',
    name: 'Symptom 2',
    category: 'Symptom 2'
  },
  {
    id: 'Symptom3',
    name: 'Symptom 3',
    category: 'Symptom 3'
  },

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class SymptomsNavigation extends React.Component {
  render()
  {
    return(
      <NavigationContainer independent={true}>
        <SymptomsStack.Navigator>
          <SymptomsStack.Screen name="Main" component={SearchableSymptoms} options={{ headerShown: false }} />
          <SymptomsStack.Screen name="Symptom1" component={Symptom1} options={{ headerShown: false }} />
          <SymptomsStack.Screen name="Symptom2" component={Symptom2} options={{ headerShown: false }} />
        </SymptomsStack.Navigator>
      </NavigationContainer>
    )
  }
}

class SearchableSymptoms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchAttribute: "category",
      ignoreCase: true
    };
  }

  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }

  render()
  { 
      const { searchTerm, searchAttribute, ignoreCase } = this.state;
      return (
        <View style={{ flex: 1 }}>
        <View style={styles.pageContainer}>
          <ScrollView>
            <View style={styles.searchInputs}>
              <TextInput
                style={styles.search}
                placeholder={"Search for your symptoms"}
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
            </View>
            <SearchableFlatList
              style={styles.list}
              data={DATA}
              searchTerm={searchTerm}
              searchAttribute={searchAttribute}
              ignoreCase={ignoreCase}
              renderItem={({ item }) => (
                <View style={{ margin: 20 }}>
                  <TouchableHighlight underlayColor="#FFFFFF" onPress={() => this.props.navigation.navigate(item.id)}>
                    <View style={styles.button}>
                      <Text style=
                        {styles.buttonText}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

//export default withNavigation(SearchableSymptoms);

const styles = StyleSheet.create({
  pageContainer: {
    padding: 10,
    flex: 1
  },
  searchInputs: {
    flexDirection: "row"
  },
  search: {
    flex: 8,
    marginBottom: 20,
    borderColor: "#D44744",
    borderBottomWidth: 3,
    padding: 10
  },
  switch: {
    flex: 2
  },
  listItem: {
    padding: 10,
    borderColor: "#f4cfce",
    borderWidth: 1,
    borderRadius: 10,
    margin: 2
  },
  info: {
    padding: 10,
    marginTop: 20,
    borderColor: "#f4cfce",
    borderWidth: 1
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f4cfce"
  },
  row1: {
    flexDirection: "row"
  },
  prop: {
    flex: 1,
    padding: 10
  },
  val: {
    borderLeftWidth: 1,
    alignSelf: "center",
    flex: 2
  },
  button: {
    justifyContent: 'center',
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24
  }
});
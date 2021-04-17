import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';

const DATA = [ //This generates the list, more can be added. Remember to add a navigation feature for it if adding more
  {
    id: 'FAQ',
    title: 'FAQ',
  },
  {
    id: 'Weekly Information',
    title: 'Weekly Information',
  },
  {
    id: 'SearchableSymptoms',
    title: 'Searchable Symptoms',
  },

];

function FAQ(){
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.bold}>FAQ</Text>
      <Text style={styles.italics}>
        Frequently Asked Questions will be present here
      </Text>
    </View>
);
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default class InformationScreen extends React.Component {
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
          <SafeAreaView style={styles.container}>
            <FlatList
              style={{marginTop:40, width: '100%'}}
              data={DATA}
              keyExtractor = {item => item.id}
              renderItem={({item}) => (
                <View style={{ margin: 20 }}>
                  <TouchableHighlight underlayColor="#FFFFFF" onPress={() => this.props.navigation.navigate(item.id)}>
                    <View style={styles.button}>
                      <Text style=
                        {styles.buttonText}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              )}
              
            />
          </SafeAreaView>
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
    fontSize: 20
  },

  italics: {
    fontFamily: 'Inter-SemiBoldItalic',
    fontSize: 15
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
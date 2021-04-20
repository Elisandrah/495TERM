import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, FlatList, SafeAreaView, TouchableHighlight } from 'react-native';

const DATA = [ //List of IDs for buttons
  {
    id: 'Week28_30', title: 'Weeks 28-30'
  },
  {
    id: 'Week30_32', title: 'Weeks 30-32'
  },
  {
    id: 'Week32_34', title: 'Weeks 32-34'
  },
  {
    id: 'Week34_36', title: 'Weeks 34-36'
  },
  {
    id: 'Week37', title: 'Week 37'
  },
  {
    id: 'Week38', title: 'Week 38'
  },
  {
    id: 'Week39', title: 'Week 39'
  },
  {
    id: 'Week40', title: 'Week 40'
  }
];

export default class WeeklyInfoScreen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return ( //All screen point to Week 1 page for testing until that page is finished.
        <SafeAreaView style={styles.container}>
        <FlatList
          style={{marginTop:40, width: '100%'}}
          data={DATA}
          keyExtractor = {item => item.id}
          renderItem={({item}) => (
            <View style={{margin: 20}}>
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
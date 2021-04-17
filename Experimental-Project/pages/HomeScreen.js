import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, SafeAreaView } from 'react-native';

export default class HomeScreen extends React.Component {
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
          <View>
            <View style={styles.textBox}>
              <Text style={styles.blackText}>
                Welcome, Username
              </Text>
            </View>

            <View style={styles.borderBox}>
              <View style={styles.smallBox}>
                <Text style={styles.blackText}>
                  Click here to read important facts about this week.
                </Text>
              </View>
            </View>

            <View style={styles.borderBox}>
              <Text style={styles.blackText}>
                Questions about your symptoms?
              </Text>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.smallBox}>
                    <Text style={styles.smallBlackText}>
                      Ask your nurse
                    </Text>
                  </View>
                  <Text style={{textAlign: 'center'}}>or...</Text>
                  <View style={styles.smallBox}>
                    <Text style={styles.smallBlackText}>
                      Read about them
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.borderBox}>
              <Text style={styles.blackText}>
                Upcoming appointments:
              </Text>
              <View style={styles.smallBox}>
                <Text style={styles.smallBlackText}>
                  Sample text.
                </Text>
              </View>
            </View>
          </View>
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

  textBox: {
    justifyContent: 'center',
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20,
    margin: 20
  },

  borderBox: {
    justifyContent: 'center',
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 5,
    margin: 20
  },

  smallBox: {
    justifyContent: 'center',
    backgroundColor:'#F9E8E8',
    borderRadius: 15,
    padding: 20,
    margin: 5
  },

  whiteText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },

  blackText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  },

  smallBlackText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16
  }
});
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import email from 'react-native-email';




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
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.box}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: 'contain', alignContent: 'center' }}
                  source={require('../assets/doctorStockPhoto.jpg')}
                />
                <View style={{resizeMode: 'contain'}}>
                  <Text style={styles.blackText}>
                    Dr. John Smith, PhD
                  </Text>
                  <Text style={styles.whiteText}>
                    UMC Pregnancy Center
                  </Text>
                  <Text style={styles.blackText}>
                    Office Phone:
                  </Text>
                  <Text style={styles.whiteText}>
                    XXX-XXX-XXX
                  </Text>
                  <Text style={styles.blackText}>
                    Office E-mail:
                  </Text>
                  <Text style={styles.whiteText}>
                    XXXXX@exampleMail.com
                  </Text>
                  <Text style={styles.blackText}>
                    Hours:
                  </Text>
                  <Text style={styles.whiteText}>
                    9 AM - 4 PM, Monday to Friday
                  </Text>
                  </View>
              </View>
            </View>

            <View style={styles.box}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: 'contain', alignContent: 'center' }}
                  source={require('../assets/nurseStockPhoto.jpg')}
                />
                <View style={{resizeMode: 'contain'}}>
                  <Text style={styles.blackText}>
                    Jane Doe, R.N.
                  </Text>
                  <Text style={styles.whiteText}>
                    UMC Pregnancy Center
                  </Text>
                  <Text style={styles.blackText}>
                    Phone Number:
                  </Text>
                  <Text style={styles.whiteText}>
                    XXX-XXX-XXX
                  </Text>
                  <Text style={styles.blackText}>
                    E-mail:
                  </Text>
                  <Text style={styles.whiteText}>
                    XXXXX@exampleMail.com
                  </Text>
                  </View>
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

  box: {
    justifyContent: 'center',
    backgroundColor:'#F9D2D2',
    borderRadius: 20,
    padding: 20,
    margin: 20
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
  }
});
import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';


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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.bold}>For scheduling</Text>
          <Text style={styles.italics}> 
            Lots of appointments as well as milestones for pregnancy 
          </Text>
          <Calendar />
        </View>
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
    fontSize: 14
  },

  italics: {
    fontFamily: 'Inter-SemiBoldItalic',
    fontSize: 11
  }
});
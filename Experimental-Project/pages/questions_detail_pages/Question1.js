import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, StatusBar, SectionList, SafeAreaView } from 'react-native';

const DATA = [ //This is where the week's facts will be listed
  {
    title: "Causes",
    data: ["Cause 1", "Cause 2", "Cause 3"]
  },
  {
    title: "Treatments",
    data: ["Drink water", "Lay down", "Limit exercise"]
  },
  {
    title: "Contact Your Nurse If:",
    data: ["Bleeding starts", "Pain gets worse", "You faint or feel weak"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class Week1Screen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
    'Inter-Black': require('../../assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  }
  render()
  { 
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.blackText}>
              Will my question be answered?
            </Text>
          </View>
          <View>
            <Text style={styles.blackText}>
              Yes, that is what this page is for. Here is where information on this topic will be listed.
            </Text>
          </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: "#F9D2D2",
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
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
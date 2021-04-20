import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import SymptomsDetails from './SymptomsData';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class QuestionDetailsScreen extends React.Component {
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
          <ScrollView>
            <View style={styles.item}>
              <Text style={styles.header}>
                {this.props.route.params.id}
              </Text>
            </View>
            <View>
              <Text style={styles.blackText}>
                {this.props.route.params.details}
              </Text>
            </View>
          </ScrollView>
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

  item: {
    backgroundColor: "#FFF",
    padding: 10,
    marginHorizontal: 10,
  },

  whiteText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },

  blackText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 16,
    padding: 10,
    marginHorizontal: 10,
  }
});
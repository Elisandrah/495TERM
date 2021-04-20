import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet, StatusBar, SectionList, SafeAreaView } from 'react-native';

const DATA = [ //This is where the week's information will be listed
/*   {
    title: "",
    data: ["",
          "",
          ""]
  }, */
  //To render a bullet point, use this Unicode: \n\u2b24
  {
    title: "Child car safety",
    data: ["You cannot take your newborn home from the hospital without a car seat. Plan to have the car seat at least 3 weeks before your due date so you will have time to install it correctly and learn how to buckle the baby in safely.",
          "All car seats for children should be used in the back seat of the car—never in the front seat. Air bags in the front seat can cause serious injury to children. Until they reach age 13 years, children should always ride in the back seat."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week39 extends React.Component {
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
          <SectionList
            style={{width: '100%'}}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
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
    backgroundColor: "#FFF",
    padding: 10,
    marginHorizontal: 10,
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
  blackText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left'
  }
});
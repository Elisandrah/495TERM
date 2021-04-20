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
    title: "Counting kicks",
    data: ["If you have felt fetal movement less often than what you think is normal, your health care professional may ask you to keep track of the fetus’s movements. Fetal movement counting (also called “kick counts”) is a test that you can do at home. There are different ways kick counts can be done. Your health care professional will tell you how often to do it and when to notify him or her."]
  },
  {
    title: "Fetal heart monitoring",
    data: ["Your doctor may want to monitor your infant’s heart rate by conducting a nonstress test. The nonstress test measures the fetal heart rate in response to fetal movement over time. The term “nonstress” means that during the test, nothing is done to place stress on the fetus.",
          "This test may be done in the health care professional’s office or in a hospital. The test is done while you are reclining or lying down and usually takes at least 20 minutes. A belt with a sensor that measures the fetal heart rate is placed around your abdomen. The fetal heart rate is recorded by a machine.",
          "If two or more accelerations occur within a 20-minute period, the result is considered reactive or “reassuring.” A reactive result means that for now, it does not appear that there are any problems. A nonreactive result is one in which not enough accelerations are detected in a 40-minute period. It can mean several things. It may mean that the fetus was asleep during the test. If this happens, the test may last 40 more minutes, or the fetus may be stimulated to move with sound projected over the mother’s abdomen. A nonreactive result can occur if the woman has taken certain medications. It also can mean that the fetus is not getting enough oxygen."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week32_34 extends React.Component {
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
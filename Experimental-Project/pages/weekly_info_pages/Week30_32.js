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
    title: "Preeclampsia",
    data: ["High blood pressure (also called hypertension) can lead to health problems at any time in life. High blood pressure usually does not cause symptoms. During pregnancy, severe or uncontrolled high blood pressure can cause problems for you and your fetus.",
          "Some women have high blood pressure before they get pregnant. Others develop it for the first time during pregnancy. A serious high blood pressure disorder called preeclampsia also can happen during pregnancy or soon after childbirth.",
          "A blood pressure reading has two numbers separated by a slash. A blood pressure reading of 110/80 mm Hg, for instance, is referred to as “110 over 80.” The first number is the pressure against the artery walls when the heart contracts. This is called the systolic blood pressure. The second number is the pressure against the artery walls when the heart relaxes between contractions. This is called the diastolic blood pressure.",
          "Guidelines for blood pressure:\n\u2b24Normal: Less than 120/80 mm Hg\n\u2b24Elevated: Systolic between 120 and 129 mm Hg and diastolic less than 80 mm Hg\n\u2b24Stage 1 hypertension: Systolic between 130 and 139 mm Hg or diastolic between 80 and 89 mm Hg\n\u2b24Stage 2 hypertension: Systolic at least 140 mm Hg or diastolic at least 90 mm Hg",
          "Preeclampsia can develop quietly without you being aware of it. Symptoms can include\n\u2b24swelling of face or hands\n\u2b24headache that will not go away\n\u2b24seeing spots or changes in eyesight\n\u2b24pain in the upper abdomen or shoulder\n\u2b24nausea and vomiting (in the second half of pregnancy)\n\u2b24sudden weight gain\n\u2b24difficulty breathing",
          "If you have any of these symptoms, especially if they develop in the second half of pregnancy, call your ob-gyn right away."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week30_32 extends React.Component {
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
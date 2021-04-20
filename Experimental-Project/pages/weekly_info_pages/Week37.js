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
    title: "Labor",
    data: ["The average length of pregnancy is 280 days, or 40 weeks. But there is no way to know exactly when you will go into labor. Most women give birth between 38 and 41 weeks of pregnancy. The more you know about what to expect during labor, the better prepared you will be once it begins.",
          "No one knows exactly what causes labor to start, although changes in hormones may play a role. Most women can tell when they are in labor, but sometimes it’s hard to tell when labor begins.",
          "As labor begins, the cervix opens (dilates). The muscles of the uterus contract at regular intervals. When the uterus contracts, the abdomen becomes hard. Between the contractions, the uterus relaxes and becomes soft.",
          "Certain changes may signal that labor is beginning. These changes include:\n\u2b24Lightening\n\u2b24Loss of the mucus plug\n\u2b24Rupture of membranes\n\u2b24Contractions",
          "You might or might not notice some of these changes before labor begins.",
          "Braxton Hicks contractions can happen for many weeks before real labor begins. These “practice” contractions can be very painful and can make you think you are in labor when you are not. You might notice them more at the end of the day.",
          "Usually, “false” contractions are less regular and not as strong as “true” labor. Time your contractions and note whether they continue when you are resting and drinking water. If rest and hydration make the contractions go away, they are not true labor contractions."]
  },
  {
    title: "When to call your doctor",
    data: ["Well before your due date, talk about the following with your health care team:\n\u2b24The right time to call your ob-gyn or other obstetric care provider\n\u2b24How to reach your doctor, provider, or nurse after office hours\n\u2b24Whether to call first or go directly to the hospital\n\u2b24Special steps you should take if you think labor has begun",
          "When the fluid-filled amniotic sac that surrounds the fetus during pregnancy breaks, it is called the rupture of membranes. This is also referred to as your “water breaking.” You may feel this as fluid that trickles or gushes from your vagina. If your water breaks, call the office of your obstetrician–gynecologist (ob-gyn) or other obstetric care provider and follow their instructions.",
          "If you think you are in labor (or are not sure), call your ob-gyn or other obstetric care provider. You should go to the hospital if you have any of these signs:\n\u2b24Your water has broken and you are not having contractions.\n\u2b24You are bleeding heavily from the vagina.\n\u2b24You have constant, severe pain with no relief between contractions.\n\u2b24You notice the fetus is moving less often."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week37 extends React.Component {
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
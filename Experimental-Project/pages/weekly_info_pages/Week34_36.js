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
    title: "Birth control",
    data: ["If you are not using a birth control method, it is possible to get pregnant very soon after having a baby. Using a birth control method in the weeks after you have a baby (the postpartum period) helps you avoid an unintended pregnancy.",
          "When choosing a birth control method to use after you have a baby, think about the following:\n\u2b24Timing—Some birth control methods can be started right after childbirth. With other methods, you need to wait a few weeks to start.\n\u2b24Breastfeeding—All methods are safe to use while breastfeeding. But there are a few methods that are not recommended during the first weeks of breastfeeding because there is a very small risk that they can affect your milk supply.\n\u2b24Effectiveness—The method you used before pregnancy may not be the best choice to use after pregnancy. For example, the sponge and cervical cap are much less effective in women who have given birth."]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.blackText}>{title}</Text>
  </View>
);

export default class Week34_36 extends React.Component {
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
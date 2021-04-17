import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { Agenda, Calendar, CalendarList } from 'react-native-calendars';


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
          //<Text style={styles.bold}>For scheduling</Text>
          //<Text style={styles.italics}> 
           // Lots of appointments as well as milestones for pregnancy 
          //</Text>
        //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        /*
          <CalendarList
            pagingEnabled={true}
            horizontal={true}
            onDayPress={(date) => {console.log('selected day', typeof date, date)}}
            theme={{
              todayTextColor: '#dc2546',
              textDayFontWeight: '500'
            }}
          />
          */
      return (
          <Agenda
            items={{
              '2021-04-18': [{name: 'deadline for me'}],
              '2021-04-20': [{name: 'hard deadline'}],
              '2021-04-16': [{name: 'Today'}],
              '2021-04-30': [{name: '31'}, {name: '32'}],
              '2021-05-02': [{name: 'Next month', text: 'May second'}]
            }}
            theme={{
              selectedDayBackgroundColor: '#9e1b32',
              todayTextColor: '#dc2546',
              dotColor: '#9e1b32',
            }}
            renderItem={(item, firstItemInDay) => 
              <Text>{item.name + ': ' + item.text}</Text>}
            renderEmptyData={() => 
              <View style={styles.centered}>
                <Text style={styles.emptyData}>Nothing on this day</Text>
              </View>
            }
          />
    );
        //</View>
  }
}

const styles = StyleSheet.create
({
  emptyData: {
    fontSize: 20,
    fontFamily: 'Inter-Black'
  },
  centered: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bold: {
    fontFamily: 'Inter-Black',
    fontSize: 12
  },

  italics: {
    fontFamily: 'Inter-SemiBoldItalic',
    fontSize: 12
  }
});
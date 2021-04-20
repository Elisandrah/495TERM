// Calendar Tab. Uses react-native-calendars.
// I had an issue with that library. When the agenda list swipes up to the next
// day, the buttons I created get displayed in the wrong order, and there is not
// even a reliable way to tell how they'll end up. So, my first version couldn't
// work and I had to rewrite this file.

import * as Font from 'expo-font';
import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  async componentDidMount() {
     await Font.loadAsync({
      'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
      'Inter-SemiBoldItalic':
        'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    });
  }
  constructor(props) {
    super(props);
    const now = new Date();
    const month = ('00' + (now.getMonth() + 1)).slice(-2);
    const day = ('00' + now.getDate()).slice(-2);
    this.selectedDay = `${now.getFullYear()}-${month}-${day}`;
    this.text = '';
    this.state = {events: {}};
    //this.state.events[this.selectedDay] = [{name: this.selectedDay, text: 'Today'}];
    /*
    this.state = { events: {
      '2021-04-18': [{name: '2021-04-18', text: 'Yesterday'}],
      '2021-04-19': [{name: '2021-04-19', text: 'Today'}],
      '2021-05-02': [{name: '2021-05-02', text: 'May second'}]
    } };
    */
  }
  addEvent() {
    console.log('ADD EVENT'); console.log(this.text);
    this.state.events[this.selectedDay] = [];
    this.state.events[this.selectedDay].push({name: this.selectedDay, text: this.text});
    this.setState({events: this.state.events});
    console.log(this.state.events);
    this.forceUpdate();
  }
  removeEvent(item) {
    delete this.state.events[item.name];
    this.setState({events: this.state.events});
    this.forceUpdate();
  }
  changeEvent(item, text) {
    const date = item.name;
    const events = this.state.events;
    events[date][0].text = text;
    this.setState({events: events});
    this.forceUpdate();
  }
  changeText(text) {
    this.text = text;
  }
  render() { 
    return (
      <Agenda
        items={this.state.events}
        theme={{
          selectedDayBackgroundColor: '#9e1b32',
          todayTextColor: '#dc2546',
          dotColor: '#9e1b32',
        }}
        selected={this.selectedDay}
        onDayPress={(day) => {this.selectedDay = day.dateString}}
        renderItem={(item, isFirstItemInDay) => {
          return (
            <View style={styles.itemRow}>
              <TextInput
                style={{flex: 1}}
                multiline={true}
                onChangeText={(text) => {this.changeEvent(item, text)}}
              >
                {item.text}
              </TextInput>
              <Button
                title='del'
                onPress={() => {this.removeEvent(item)}} 
              />
            </View>
          );
        }}
        renderEmptyData={() => {
          return (
          <View>
            <Text style={styles.emptyData}>Nothing on this day</Text>
            <View style={styles.itemRow}>
              <TextInput
                style={styles.newEventText}
                multiline={true}
                onChangeText={(text) => {this.changeText(text)}}
              >
                {''}
              </TextInput>
              <Button
                title='ok'
                onPress={() => {this.addEvent()}}
              />
            </View>
          </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create
({
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  newEventText: {
    fontSize: 17,
    flex: 1
  },
  emptyData: {
    fontSize: 20,
    fontFamily: 'Inter-Black',
    alignSelf: 'center',
  },
});
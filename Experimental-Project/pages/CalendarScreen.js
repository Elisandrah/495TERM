import * as Font from 'expo-font';
import * as React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {events: props.events};
  }
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          onPress={() => {
            console.log('Add Event pressed');
            console.log(this.state);
          }}
        >
          <Text style={{fontSize: 16, color: "#007aff"}}>Add Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class DeleteEvent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {events: props.event};
  }
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          onPress={() => {
            console.log('Delete Event pressed');
            console.log(this.state);
          }}
        >
          <Text style={{fontSize: 14, color: "#007aff"}}>Delete Event</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    this.state = { events: {
      '2021-04-18': [{name: '2021-04-18-000', text: 'deadline for me'}],
      '2021-04-20': [{name: '2021-04-20-000', text: 'hard deadline'}],
      '2021-04-30': [{name: '2021-04-30-000', text: '30'}, 
                     {name: '2021-04-30-001', text: '31'},
                     {name: '2021-04-30-002', text: '32'}],
      '2021-05-02': [{name: '2021-05-02-000', text: 'May second'}]
    } };
  }
  eventRow(event) {
    return (
      <View style={{ flexDirection: 'row' }} >
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
          <Text>
            {event.text}
          </Text>
        </View>
        <DeleteEvent event={event} />
      </View>
    )
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
        renderItem={(item, isFirstItemInDay) => {
          if (isFirstItemInDay) {
            return (
              <View>
                <View style={styles.addEventButton}>
                  <AddEvent events={this.state.events[item.name.substr(0, 10)]} />
                </View>
                {this.eventRow(item)}
              </View> 
            );
          }
          return this.eventRow(item);
        }}
        renderEmptyData={() => 
          <View>
            <Text style={styles.emptyData}>Nothing on this day</Text>
            <AddEvent />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create
({
  addEventButton: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  emptyData: {
    fontSize: 20,
    fontFamily: 'Inter-Black',
    alignSelf: 'center',
  },
});
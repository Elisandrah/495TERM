import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
//import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import PlanScreen from './PlanScreen';
import ContactScreen from './ContactScreen';
import InformationScreen from './InformationScreen';

const Tab = createBottomTabNavigator();

export default class Nav extends React.Component { //This holds the tabs that we can use to navigate. Each tab will move us to different screens which are defined further below
	render()
	{
		return (
    		
    			<Tab.Navigator>
    				<Tab.Screen name="Main Menu" component={HomeScreen} />
    				<Tab.Screen name="Calendar" component={CalendarScreen} />
    				<Tab.Screen name="Plan" component={PlanScreen} />
    				<Tab.Screen name="Contact" component={ContactScreen} />
    				<Tab.Screen name="Info" component={InformationScreen} />  
    			</Tab.Navigator>
    		
  		);
	}
}
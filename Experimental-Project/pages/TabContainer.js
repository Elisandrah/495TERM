import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Ionicons  } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CalendarScreen from './CalendarScreen';
import PlanScreen from './PlanScreen';
import ContactScreen from './ContactScreen';
import InfoNavigationHelper from './NavigationHelper';

const Tab = createBottomTabNavigator();

export default class Nav extends React.Component { //This holds the tabs that we can use to navigate. Each tab will move us to different screens which are defined further below
	constructor(props) 
	{
		super(props);
		this.state = {
		  sidebarOpen: true
		};
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) 
	{
		this.setState({ sidebarOpen: open });
	}


	render()
	{
		return (
			<Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Main Menu') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Calendar') {
                            iconName = focused
                                ? 'calendar'
                                : 'calendar-outline';
                        } else if (route.name === 'Plan') {
                            iconName = focused
                                ? 'document'
                                : 'document-outline';
                        } else if (route.name === 'Contact') {
                            iconName = focused
                                ? 'chatbubble'
                                : 'chatbubble-outline';
                        } else if (route.name === 'Info') {
                            iconName = focused
                                ? 'information-circle'
                                : 'information-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#9E1B32',
                    inactiveTintColor: 'gray',
                }}
            >
    			<Tab.Screen name="Main Menu" component={HomeScreen} />
    			<Tab.Screen name="Calendar" component={CalendarScreen} />
    			<Tab.Screen name="Plan" component={PlanScreen} />
    			<Tab.Screen name="Contact" component={ContactScreen} />
    			<Tab.Screen name="Info" component={InfoNavigationHelper} />  
    		</Tab.Navigator>
  		);
	}
}
/* This class handles ALL STACK NAVIGATION inside the Information Tab.
  ANY TIME YOU ADD A NEW INFO PAGE, MAKE SURE IT IS IN THIS NAVIGATOR!
  
  This class can be used in another tab/drawer/etc. navigator via
    import InfoNavigationHelper from './NavigationHelper'
    and
    <MyTab.Screen name="MyScreen" component={InfoNavigationHelper} />
  
  Stack navigation for other tabs (Home, Contact, etc.) can be added to this same file,
  just follow the same template.*/

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import InformationScreen from './InformationScreen';

import FAQScreen from './FAQScreen';
import WeeklyInfoScreen from './WeeklyInfoScreen';
import SearchableSymptoms from './SearchableSymptoms';

import QuestionDetailsScreen from './QuestionDetailsScreen';

import Week1 from './weekly_info_pages/Week1';

import Symptom1 from './symptoms_detail_pages/Symptom1';
import Symptom2 from './symptoms_detail_pages/Symptom2';

const Stack = createStackNavigator();

export default class InfoNavigationHelper extends React.Component {
  render()
  {
    return(
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Information">
          <Stack.Screen name="Information" component={InformationScreen} options={{ headerShown: false }} />

          <Stack.Screen name="FAQ" component={FAQScreen} />
          <Stack.Screen name="Weekly Information" component={WeeklyInfoScreen} />
          <Stack.Screen name="SearchableSymptoms" component={SearchableSymptoms} />

          <Stack.Screen name="QuestionDetailsScreen" component={QuestionDetailsScreen}/>

          <Stack.Screen name="Week 1" component={Week1}/>

          <Stack.Screen name="Symptom1" component={Symptom1}/>
          <Stack.Screen name="Symptom2" component={Symptom2}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


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

import Week28_30 from './weekly_info_pages/Week28_30';
import Week30_32 from './weekly_info_pages/Week30_32';
import Week32_34 from './weekly_info_pages/Week32_34';
import Week34_36 from './weekly_info_pages/Week34_36';
import Week37 from './weekly_info_pages/Week37';
import Week38 from './weekly_info_pages/Week38';
import Week39 from './weekly_info_pages/Week39';
import Week40 from './weekly_info_pages/Week40';

import SymptomsDetailsScreen from './SymptomsDetailsScreen';

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
          <Stack.Screen name="SymptomsDetailsScreen" component={SymptomsDetailsScreen}/>

          <Stack.Screen name="Week28_30" component={Week28_30}/>
          <Stack.Screen name="Week30_32" component={Week30_32}/>
          <Stack.Screen name="Week32_34" component={Week32_34}/>
          <Stack.Screen name="Week34_36" component={Week34_36}/>
          <Stack.Screen name="Week37" component={Week37}/>
          <Stack.Screen name="Week38" component={Week38}/>
          <Stack.Screen name="Week39" component={Week39}/>
          <Stack.Screen name="Week40" component={Week40}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


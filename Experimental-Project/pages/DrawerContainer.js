import TabContainer from './TabContainer';
import AuthContext from '../Context';

import * as React from 'react';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  
  
function CustomDrawerContent(props) {
    const { signOut } = React.useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={signOut} />
        </DrawerContentScrollView>
    );
}
  
const Drawer = createDrawerNavigator();
  

export default class Nav extends React.Component
{
    render()
    {
        return (
            <Drawer.Navigator initialRouteName="Tab" drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Tab" component={TabContainer} />
            </Drawer.Navigator>
        );
    }
}


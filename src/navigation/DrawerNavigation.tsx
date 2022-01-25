import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/Contact';
import Logout from '../screens/Logout';
import {Screens} from './Screens';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name={Screens.BottomTab}
        component={BottomTab}
        options={{title: Screens.Home}}
      />
      <Drawer.Screen name={Screens.Contact} component={Contact} />
      <Drawer.Screen name={Screens.Logout} component={Logout} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {Screens} from './Screens';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styles/Colors';

const Tab = createBottomTabNavigator();

const BottomTabIcon = ({route, focused}: {route: string; focused: boolean}) => {
  let iconName, color, size;
  switch (route) {
    case Screens.Home:
      iconName = 'home';
      break;
    case Screens.Profile:
      iconName = 'user-alt';
      break;
    default:
      iconName = 'folder';
      color = '';
      size = 15;
  }
  if (focused) {
    color = Colors.background;
    size = 20;
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: Colors.background,
        tabBarIcon: ({focused}) => (
          <BottomTabIcon route={route.name} focused={focused} />
        ),
      })}>
      <Tab.Screen name={Screens.Home} component={Home} />
      <Tab.Screen name={Screens.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    marginBottom: 5,
  },
});

export default BottomTab;

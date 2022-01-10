import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {Screens} from './Screens';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({focused}) => {
          let iconName, color, size;
          switch (route.name) {
            case Screens.Home:
              iconName = 'home';
              break;
            case Screens.Profile:
              iconName = 'user-alt';
              break;
            default:
              iconName = '';
              color = '#00999970';
              size = 12;
          }
          if (focused) {
            color = '#009999';
            size = 22;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name={Screens.Home} component={Home} />
      <Tab.Screen name={Screens.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    color: '#000000',
    marginBottom: 5,
  },
});

export default BottomTab;

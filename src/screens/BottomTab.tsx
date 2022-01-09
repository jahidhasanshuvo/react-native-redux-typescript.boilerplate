import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import {Screens} from './Screens';
import {StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveBackgroundColor: '#009999',
        tabBarIcon: ({focused, color, size}) => {
          console.log(focused, color, size, route);
          if (focused) {
            return <Text>✓</Text>;
          } else {
            return <Text>X</Text>;
          }
        },
      })}>
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen name={Screens.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    color: '#000000',
    fontSize: 20,
  },
});

export default BottomTab;

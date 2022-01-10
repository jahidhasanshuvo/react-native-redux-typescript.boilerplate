import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Login from '../screens/Login';
import {Screens} from './Screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerStyle: {backgroundColor: '#009999'},
          headerShown: false,
        }}
        initialRouteName={Screens.Login}>
        <Stack.Screen name={Screens.Login} component={Login} />
        <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

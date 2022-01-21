import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Login from '../screens/Login';
import {Screens} from './Screens';
import {Colors} from '../styles/Colors';
import {useSelector} from 'react-redux';
import {userSelector} from '../redux/user/user.selector';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {username} = useSelector(userSelector);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerStyle: {backgroundColor: Colors.background},
          headerShown: false,
        }}>
        {username.length ? (
          <Stack.Screen name={Screens.BottomTab} component={BottomTab} />
        ) : (
          <Stack.Screen name={Screens.Login} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

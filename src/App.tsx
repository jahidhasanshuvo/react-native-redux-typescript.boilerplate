import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import {Screens} from './screens/Screens';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#009999'} />
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerStyle: {backgroundColor: '#009999'},
        }}
        initialRouteName={Screens.Login}>
        <Stack.Screen
          name={Screens.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name={Screens.Home} component={Home} />
        <Stack.Screen name={Screens.Profile} component={Profile} />
      </Stack.Navigator>
      {/* <Profile /> */}
    </NavigationContainer>
  );
};

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {StatusBar} from 'react-native';
import BottomTab from './screens/BottomTab';
import Login from './screens/Login';
import {Screens} from './screens/Screens';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name={Screens.BottomTab}
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

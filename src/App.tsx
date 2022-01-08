import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#009999'} />
      <Home />
      <Profile />
    </SafeAreaView>
  );
};

export default App;

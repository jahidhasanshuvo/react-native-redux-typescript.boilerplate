import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Navigation from './navigation/Navigation';
import {LogBox} from 'react-native';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
//   'If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation',
// ]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <StatusBar backgroundColor={'#009999'} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

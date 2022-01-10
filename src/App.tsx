import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {StatusBar} from 'react-native';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Navigation from './navigation/Navigation';

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

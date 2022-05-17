import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Application} from './src/navigations/Application';

const App = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default App;

import React from 'react';
import {SafeAreaView} from 'react-native'
import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView>
    <HomeScreen />
    </SafeAreaView>
  </Provider>
);

export default App;

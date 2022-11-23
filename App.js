import React, {useEffect} from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import store from './store';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

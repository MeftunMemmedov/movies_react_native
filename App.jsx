import 'react-native-gesture-handler';

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/navigator/DrawerNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const App=()=>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </Provider>
  )
}
export default App;

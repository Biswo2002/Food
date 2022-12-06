/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import Routes from './src/routes';
import { Home } from './src/screen';



const App = () => {

  return (
  // <Routes/>
  <Home/>
  );
};

const styles = StyleSheet.create({
});

export default App;

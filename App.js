/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  LogBox.ignoreAllLogs(true);

  return (
    <NativeBaseProvider>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default App;

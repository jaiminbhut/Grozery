/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default App;

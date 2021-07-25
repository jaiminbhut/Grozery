/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';
import { Colors } from './src/styles';

const App = () => {
  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default App;

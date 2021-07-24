import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/Login';
import { Colors } from '../styles';
import { navigationRef } from './NavigationRef';
import NavigationRoutes from './NavigationRoutes';

const RootStack = createStackNavigator();

const stackScreenOptions = {
  headerBackTitleVisible: false,
  headerTintColor: Colors.black,
  headerTitleAlign: 'center',
  cardStyle: {
    backgroundColor: Colors.white,
  },
};

const AuthStack = () => {
  return (
    <RootStack.Navigator screenOptions={stackScreenOptions}>
      <RootStack.Screen
        options={{ headerShown: false }}
        name={NavigationRoutes.Login}
        component={LoginScreen}
      />
    </RootStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={stackScreenOptions}
        initialRouteName={NavigationRoutes.Login}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name={NavigationRoutes.AuthStack}
          component={AuthStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

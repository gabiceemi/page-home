import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from './src/pages/Tutorial';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Badges from './src/pages/Badges';

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode='none'>
      <Screen name='Tutorial' component={Tutorial}/>
      <Screen name='Login' component={Login}/>
      <Screen name='Home' component={Home}/>
      <Screen name='Badges' component={Badges}/>
    </Navigator>
  </NavigationContainer>
);

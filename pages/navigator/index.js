import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../views/HomePage';
import WelcomePage from '../views/WelcomePage';
import DetailPage from '../views/DetailPage';
const RootStack = createStackNavigator();
export default function App() {
   return (<NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Home" component={ HomePage } initialParams={{tintColor:'red'}} />
      <RootStack.Screen name="Welcome" component={ WelcomePage } />
      <RootStack.Screen name="Detail" component={ DetailPage } />
    </RootStack.Navigator>
  </NavigationContainer>)
}
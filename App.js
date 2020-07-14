import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'recat-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

 const TabNavigator =createBottomTabNavigator({
   WriteScreen:{screens:WriteScreen},
   ReadScreen :{screens:ReadScreen}
 })

 const AppContainer = createAppContainer(TabNavigator)
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

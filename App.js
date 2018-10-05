import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './app/screens/HomeScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import availableActivitiesScreen from './app/screens/AvailableActivitiesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export default createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" size={24} />
    )
  }},
  SettingsScreen: {screen: SettingsScreen},
  availableActivitiesScreen: {
    screen: availableActivitiesScreen,  
  }
},{//router config
  initialRouteName: 'HomeScreen',
  //order: ['HomeScreen', 'SettingsScreen']
});
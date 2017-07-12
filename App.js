// as per https://stackoverflow.com/questions/44678552/react-native-navigation-issue-undefined-is-not-an-object-this-props-navigati

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/screens/HomeScreen'
import ChatScreen from './app/components/screens/ChatScreen'
import ScanScreen from './app/components/screens/ScanScreen'

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Scan: { screen: ScanScreen }
});

const AppNavigation = () => (
  <SimpleAppNavigator  />
);

export default class App extends Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}

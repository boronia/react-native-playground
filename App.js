// as per https://stackoverflow.com/questions/44678552/react-native-navigation-issue-undefined-is-not-an-object-this-props-navigati
import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

 class HomeScreen extends Component {
  static navigationOptions = {
    title: 'React Native Experiment',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Bug someone: </Text>
        <Text>{"\n"}</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Jade' })}
          title="Say hello to Jade"
        />
        <Text>{"\n"}</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Clara' })}
          title="Say hello to Clara"
        />
        <Text>{"\n"}</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Andrew' })}
          title="Say hello to Andrew"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Hello {params.user}!!</Text>
      </View>
    );
  }
}

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
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

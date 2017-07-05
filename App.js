// as per https://stackoverflow.com/questions/44678552/react-native-navigation-issue-undefined-is-not-an-object-this-props-navigati
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BarcodeScanner from 'react-native-barcodescanner';

 class HomeScreen extends Component {
  static navigationOptions = {
    title: 'React Native Experiment',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Bug9 someone: </Text>
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
        <Text>{"\n"}</Text>
        <Button
          onPress={() => navigate('Scan')}
          title="Let's scan something.."
        />
        <Text>{"\n"}</Text>
        <FlatList
            data={[
                    {key: '1', name: 'Jade'},
                    {key: '2', name: 'Clara'},
                    {key: '3', name: 'Andrew'},
                  ]}
            renderItem={ ({item}) =>
               <TouchableOpacity onPress={() => navigate('Chat', { user: item.name })}>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            }

            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
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

class ScanScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Barcode Scanner`,
  });

  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'Scan Barcode',
      torchMode: 'off',
      type: '',
    };
  }

  barcodeReceived(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();

    this.setState({
      barcode: e.data,
      text: `${e.data} (${e.type})`,
      type: e.type,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.text}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

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

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
import { Constants, BarCodeScanner, Permissions } from 'expo';

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
      hasCameraPermission: null
    };
  }

  componentDidMount() {
     this._requestCameraPermission();
   }

   _requestCameraPermission = async () => {
     const { status } = await Permissions.askAsync(Permissions.CAMERA);
     this.setState({
       hasCameraPermission: status === 'granted',
     });
   };

   _handleBarCodeRead = data => {
     Alert.alert(
       'Scan successful!',
       JSON.stringify(data)
     );
   };

  render() {
    return (
        <View style={styles.container}>
          {
            this.state.hasCameraPermission === null ?
              <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
            <BarCodeScanner onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
          />
          }
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: '#ecf0f1',
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

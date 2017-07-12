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
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class ScanScreen extends Component {
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

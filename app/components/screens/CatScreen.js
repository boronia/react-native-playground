import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles1.container}>
          <Image
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/cat.gif' }}
            style={{ height: 200, width: 200}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'skyblue'}}>
           <View style={styles2.container}>
              <Image
                source={{ uri: 'http://www.doo-n-go.com/wp-content/uploads/2015/01/Cat-Communication-2.jpg' }}
                style={{ height: 150, width: 150}}
              />
           </View>
           <View style={styles3.container}>
              <Image
                source={{ uri: 'http://janksreviews.com/wp-content/uploads/2017/02/streetcat-bob-2.jpg' }}
                style={{ height: 150, width: 150}}
              />
           </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'skyblue'}}>
           <View style={styles3.container}>
              <Image
                source={{ uri: 'http://www.doo-n-go.com/wp-content/uploads/2015/01/Cat-Communication-2.jpg' }}
                style={{ height: 150, width: 150}}
              />
           </View>
           <View style={styles2.container}>
              <Image
                source={{ uri: 'http://janksreviews.com/wp-content/uploads/2017/02/streetcat-bob-2.jpg' }}
                style={{ height: 150, width: 150}}
              />
           </View>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'beige',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'steelblue',
  },
});

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'skyblue',
  },
});

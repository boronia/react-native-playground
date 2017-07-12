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
import { Constants } from 'expo';

export default class HomeScreen extends Component {
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,Navigator,
  StyleSheet,
  Text,ScrollView,ListView,
  View,
  Image,TextInput
} from 'react-native';
import MyScene from './comments/MyScene';

export default class Reanative extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      text: '123',
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    let turl={
      uri: 'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg'
    }
    return (
      <ScrollView>
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            // Function to call when a new scene should be displayed
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Hi, I am a test!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.instructions}>
          Hello word! I am react-native
        </Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Image source={turl} style={{width: 253, height: 250}} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
        <View style={{padding: 10}}>
          <TextInput
            style={{ height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
      </View>
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Reanative', () => Reanative);

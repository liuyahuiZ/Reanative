/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,Navigator,StyleSheet,
  Text,ScrollView,ListView,
  View,Image,TextInput,TouchableHighlight,TouchableOpacity
} from 'react-native';
import MyScene from './comments/MyScene';
import pageOne from './comments/pageOne';
import Header from './comments/Header'
import Bottom from './comments/Bottom'
import FirstPageComponent from './FirstPageComponent';

export default class Reanative extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }
  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
      <View style={{flex:1}}>
      <Navigator style={{flex:1}}
             initialRoute={{ name: defaultName, component: defaultComponent }}
             configureScene={(route) => {
               return Navigator.SceneConfigs.PushFromRight;
             }}
             renderScene={(route, navigator) => {
               let Component = route.component;
               return <Component {...route.params} navigator={navigator} />
             }} />
      </View>
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

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
import MainScreen from './comments/MainScreen'
import Bottom from './comments/Bottom'
import style from './service/styles'
import FirstPageComponent from './FirstPageComponent';

const styles=style.styles
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
    let NavigationBarRouteMapper = {
      LeftButton: function(route, navigator, index, navState) {
        if (route.id === 'main') {
          return null;
        }
        var previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
            Back
            </Text>
          </TouchableOpacity>
        );
      },
      RightButton: function(route, navigator, index, navState) {
        if (route.id === 'detail') {
          return null;
        }
        return (
          <TouchableOpacity
            onPress={() => navigator.push({id:'detail',title:'Detail'})}
            style={styles.navBarRightButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Next
            </Text>
          </TouchableOpacity>
        );
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text style={[styles.navBarText, styles.navBarTitleText]}>
            {route.title}
          </Text>
        );
      },
    };
    return (
      <View style={{flex:1}}>
      <Navigator style={{flex:1}}
             initialRoute={{id:"main",title:"Main"}}
             configureScene={(route) => {
               return Navigator.SceneConfigs.HorizontalSwipeJump;
             }}
             renderScene={this.renderNav}
             navigationBar={
               <Navigator.NavigationBar
                 routeMapper={NavigationBarRouteMapper}
                 style={styles.navBar}
              />
             }/>
      </View>
    );
  }
  renderNav(route,nav){
      switch (route.id) {
        case 'main':
          return <MainScreen navigator={nav} title="Main"/ >;
        case 'detail':
          return (<DetailScreen navigator={nav} title="Detail" data={route.data}/>);
      }
  }
}

var DetailScreen = React.createClass({
  toMain(){
    this.props.navigator.pop();
  },
  render(){
    return (
      <View style={styles.detailContainView}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.toMain}
         underlayColor="green">
           <Text style={styles.blackText}>{this.props.data}</Text>
        </TouchableHighlight>
      </View>
    );
  }
});


AppRegistry.registerComponent('Reanative', () => Reanative);

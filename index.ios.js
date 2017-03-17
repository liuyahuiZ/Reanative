/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,Navigator,StyleSheet,
  Text,ScrollView,ListView,StatusBar,
  View,Image,TextInput,TouchableHighlight,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from './comments/Login';
import style from './service/styles'
import Routes from './service/Routes'

const styles=style.styles

export default class Reanative extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      showHeader:'Show',
      tirtle:"Main",
      isLogin:false,
      lastCom:''
    }
  }
  changeTirtle(state,showState){
    console.log(state,showState)
    this.setState({tirtle:state})
    this.setState({showHeader:showState})
  }
  toMessage(navigator){
    navigator.push({id:"Message",title:"Message",data:"goto Message"});
  }
  login(){
    console.log('do log')
    this.setState({isLogin:true})
  }
  render() {
    let o=this
    let Tirtle=this.state.tirtle
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
            <Icon name='angle-left' color='black' size={20} />
            </Text>
          </TouchableOpacity>
        );
      },
      RightButton: function(route, navigator, index, navState) {
        if (route.id === 'main') {
          return (  <TouchableOpacity style={[styles.navBarRightButton,styles.relative]} onPress={o.toMessage.bind(o,navigator)}><Icon name='circle'  style={[styles.absoluteIcon]}/><Icon name='bell' color='#999' size={20} /></TouchableOpacity>);
        }
      },
      Title: function(route, navigator, index, navState) {
        let theTirtle=''
        if(index>0){
          theTirtle=route.title
        }else{
          theTirtle=Tirtle
        }
        return (
          <Text style={[styles.navBarText, styles.navBarTitleText]}>
            {theTirtle}
          </Text>
        );
      },
    };
    let nav
    if(this.state.showHeader=='Show'){
      nav=(<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={styles.navBar} />)
    }else{
      nav=null
    }
    let resultcom
    if(o.state.isLogin){
      resultcom=(<View style={{flex:1}}>
      <Navigator style={{flex:1}}
             initialRoute={{id:"main",title:"Main"}}
             configureScene={(route) =>({
               ...Navigator.SceneConfigs.PushFromRight
             })}
             renderScene={(route,nav,self) =>(<Routes id={route.id} nav={nav} title="Login" callbackTitle={this.changeTirtle.bind(this)}  data={route.data} />)}
             navigationBar={nav}/>
      </View>)
    }else{
      resultcom=(<Login navigator={this.props.nav} dologin={o.login.bind(o)} data={this.props.data} title="Login"/ >)
    }
    return (
      resultcom
    );
  }

}



AppRegistry.registerComponent('Reanative', () => Reanative);

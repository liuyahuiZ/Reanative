import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';

import MainScreen from '../comments/MainScreen'
import DetailScreen from '../comments/DetailScreen'
import ListScreen from '../comments/ListScreen'
import Home from '../comments/Home'
import Person from '../comments/Home'
import Pop from '../comments/pop'
import Message from '../comments/Message'
import Login from '../comments/Login'

export default class Routes extends Component  {
  constructor(props) {
    super(props)
    this.state={
      text: '123'
    }
  }
  changeBar(state,showState){
    this.props.callbackTitle(state,showState);
  }
  render() {
    // let comments=''
    // route.forEach(function(val,index,route){
    //   if(route[index]==val){
    //     console.log(route[index])
    //     comments=route[index].comments
    //   }  // ==> true
    // })

    if(this.props.id=='main'){
      return (<Home navigator={this.props.nav} title="Home" callbackParent={this.changeBar.bind(this)} data={this.props.data}/>)
    }else if(this.props.id=='detail'){
      return (<DetailScreen navigator={this.props.nav} title="Detail" data={this.props.data}/>);
    }else if(this.props.id=='list'){
      return (<ListScreen navigator={this.props.nav} title="List" data={this.props.data}/>);
    }else if(this.props.id=='pop'){
      return (<Pop navigator={this.props.nav} title="pop" data={this.props.data}/>);
    }else if(this.props.id=='Home'){
      return (<MainScreen navigator={this.props.nav} data={this.props.data} title="Main"/ >);
    }else if(this.props.id=='Person'){
      return (<Person navigator={this.props.nav} data={this.props.data} title="Person"/ >);
    }else if(this.props.id=='Message'){
      return (<Message navigator={this.props.nav} data={this.props.data} title="Message"/ >);
    }else if(this.props.id=='Login'){
      return (<Login navigator={this.props.nav} data={this.props.data} title="Login"/ >);
    }

  }
}

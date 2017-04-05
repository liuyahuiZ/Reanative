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
import MyCharts from '../comments/MyCharts'
import Setting from '../comments/Setting'
import AppStorage from '../comments/AppStorage'
import DetailShow from '../comments/DetailShow'
import Cart from '../comments/cart'
import Clock from '../comments/Clock'
import PassLock from '../comments/littleApp/PassLock'
import TouchMove from '../comments/littleApp/TouchMove'
import TwiterUI from '../comments/littleApp/TwiterUI'
import Swip from '../comments/littleApp/Swip'
import AllComment from '../comments/littleApp/AllComment'
import Weather from '../comments/littleApp/Weather'
import Location from '../comments/littleApp/Location'
import SildMenu from '../comments/littleApp/SildMenu'
import SearchBar from '../comments/littleApp/SearchBar'
import TouchId from '../comments/littleApp/TouchId'
import ImagePicker from '../comments/littleApp/ImagePicker'

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
    }else if(this.props.id=='MyCharts'){
      return (<MyCharts navigator={this.props.nav} data={this.props.data} title="MyCharts"/ >);
    }else if(this.props.id=='Setting'){
      return (<Setting navigator={this.props.nav} data={this.props.data} title="Setting"/ >);
    }else if(this.props.id=='AppStorage'){
      return (<AppStorage navigator={this.props.nav} data={this.props.data} title="AppStorage"/ >);
    }else if(this.props.id=='DetailShow'){
      return (<DetailShow navigator={this.props.nav} data={this.props.data} title="DetailShow"/ >);
    }else if(this.props.id=='Clock'){
      return (<Clock navigator={this.props.nav} data={this.props.data} title="Clock"/ >);
    }else if(this.props.id=='PassLock'){
      return (<PassLock navigator={this.props.nav} data={this.props.data} title="PassLock"/ >);
    }else if(this.props.id=='TouchMove'){
      return (<TouchMove navigator={this.props.nav} data={this.props.data} title="TouchMove"/ >);
    }else if(this.props.id=='TwiterUI'){
      return (<TwiterUI navigator={this.props.nav} data={this.props.data} title="TwiterUI"/ >);
    }else if(this.props.id=='Swip'){
      return (<Swip navigator={this.props.nav} data={this.props.data} title="Swip"/ >);
    }else if(this.props.id=='AllComment'){
      return (<AllComment navigator={this.props.nav} data={this.props.data} title="AllComment"/ >);
    }else if(this.props.id=='Weather'){
      return (<Weather navigator={this.props.nav} data={this.props.data} title="Weather"/ >);
    }else if(this.props.id=='Location'){
      return (<Location navigator={this.props.nav} data={this.props.data} title="Location"/ >);
    }else if(this.props.id=='SildMenu'){
      return (<SildMenu navigator={this.props.nav} data={this.props.data} title="SildMenu"/ >);
    }else if(this.props.id=='SearchBar'){
      return (<SearchBar navigator={this.props.nav} data={this.props.data} title="SearchBar"/ >);
    }else if(this.props.id=='TouchId'){
      return (<TouchId navigator={this.props.nav} data={this.props.data} title="TouchId"/ >);
    }else if(this.props.id=='ImagePicker'){
      return (<ImagePicker navigator={this.props.nav} data={this.props.data} title="ImagePicker"/ >);
    }else if(this.props.id=='Cart'){
      return (<Cart navigator={this.props.nav} data={this.props.data} title="Cart"/ >);
    }

  }
}

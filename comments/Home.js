import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Carousel from 'react-native-carousel'
import Icon from 'react-native-vector-icons/FontAwesome'
import MainScreen from './MainScreen'
import DetailScreen from './DetailScreen'
import Person from './Person'

const styles=style.styles

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      tabstatus:'Main'
    }
  }
  tab(state,showState){
    this.setState({tabstatus: state})
    this.props.callbackParent(state,showState);
  }

  render() {
    let tabstatus=this.state.tabstatus
    let comment=''
    if(tabstatus=='Main'){
      comment=(<MainScreen navigator={this.props.navigator} data={this.props.data} title="Main"/ >)
    }else if(tabstatus=='Detail'){
      comment=(<DetailScreen navigator={this.props.navigator} title="Detail" data={this.props.data}/>)
    }else if(tabstatus=='Person'){
      comment=(<Person navigator={this.props.navigator} title="Person" data={this.props.data}/>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.noHeader}>
          {comment}
        </View>
        <View style={styles.tabBottom}>
          <TouchableOpacity style={styles.tab} onPress={this.tab.bind(this,'Main','Show')} underlayColor="#F5FCFF">
           <View style={styles.flexUtilCenter}>
           <Icon name='home' color={tabstatus=='Main'?'black':'#999'} size={23}></Icon>
           <Text >Main</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={this.tab.bind(this,'Detail','Show')} underlayColor="#F5FCFF">
            <View style={styles.flexUtilCenter}>
              <Icon name='rocket' color={tabstatus=='Detail'?'black':'#999'} size={23}></Icon>
              <Text >Detail</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={this.tab.bind(this,'Person','Hide')} underlayColor="#F5FCFF">
            <View style={styles.flexUtilCenter}>
              <Icon name='user-o' color={tabstatus=='Person'?'black':'#999'} size={23}></Icon>
              <Text >Person</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

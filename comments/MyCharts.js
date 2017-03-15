import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './Header'
import SmoothLine from './Charts/SmoothLine'
import Scatter from './Charts/Scatter'
import Bar from './Charts/Bar'
import Pie from './Charts/Pie'
import Radar from './Charts/Radar'

const styles=style.styles
export default class MyCharts extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  toMain(){
    this.props.navigator.pop();
  }
  render() {

    return (
      <View style={[styles.detailContainView,styles.flexStart,styles.bgshow]}>
      <Header title='MyCharts' callbackLeft={this.toMain.bind(this)}/>
      <ScrollView style={[styles.flex,styles.bgf6]}>
        <View style={[styles.flex,styles.alignItemsCenter,styles.flexStart]}>
            <Bar/>
            <SmoothLine />
            <Scatter/>
            <Pie/>
            <Radar/>
        </View>
      </ScrollView>
      </View>
    )
  }
}

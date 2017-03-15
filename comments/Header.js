import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  LeftButtonClick(){
    this.props.callbackLeft();
  }
  render() {
    return (
      <View style={[styles.height40,styles.bgshow,styles.marginTop22,styles.flexDirectionRow,styles.borderBottom]}>
        <TouchableOpacity onPress={this.LeftButtonClick.bind(this)} style={[styles.flex,styles.height40,styles.alignItemsStart,styles.navBarLeftButton,styles.flexCenter]}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
        <Icon name='angle-left' color='black' size={30} />
        </Text>
        </TouchableOpacity>
        <View style={[styles.flex,styles.alignItemsCenter,styles.flexCenter]}>
          <Text>{this.props.title}</Text>
        </View>
        <View style={[styles.flex,styles.alignItemsCenter,styles.flexCenter]}>
          <Text></Text>
        </View>
      </View>
    )
  }
}

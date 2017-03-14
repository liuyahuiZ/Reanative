import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import style from '../service/styles'
import Cart from './cart'
const styles=style.styles
export default class ListScreen extends Component {
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
      <View style={styles.detailContainView}>
        <ScrollView style={styles.hasHeader}>
          <TouchableHighlight style={[styles.bgshow,styles.padding10,styles.marginTop10]} onPress={this.toMain.bind(this)} underlayColor="#B5B5B5">
             <Text style={styles.blackText}> =={this.props.data}</Text>
          </TouchableHighlight>
          <Cart></Cart>
        </ScrollView>
      </View>
    )
  }
}

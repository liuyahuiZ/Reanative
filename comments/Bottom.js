import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';

export default class Bottom extends Component {

    constructor(props) {
      super(props)
      this.state={
        text: '123',
      }
    }
    render() {
      return (
        <View style={{ flexDirection: 'row',alignItems: 'flex-end'}}>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue', alignItems: 'center',justifyContent:'center'}} >
            <Text>Page1</Text>
          </View>
          <View style={{flex: 1, height: 50, backgroundColor: 'skyblue', alignItems: 'center',justifyContent:'center'}} >
            <Text>Page2</Text>
          </View>
          <View style={{flex: 1, height: 50, backgroundColor: 'steelblue', alignItems: 'center',justifyContent:'center'}} >
            <Text>Page3</Text>
          </View>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue', alignItems: 'center',justifyContent:'center'}} >
            <Text>Page4</Text>
          </View>
        </View>
      )
    }
  }

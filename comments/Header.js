import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'row',alignItems: 'flex-start',backgroundColor: 'deepskyblue',paddingTop:20,height:60}}>
        <View style={{flex: 1, height: 40, }}>
        </View>
        <View style={{flex: 2, height: 40, alignItems: 'center',justifyContent:'center'}} >
          <Text>this tirtles</Text>
        </View>
        <View style={{flex: 1, height: 40, }} />
      </View>
    )
  }
}

import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class ListPage extends Component {
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
    let arr=[{id:1},{id:2},{id:3}]
    let resumap= arr.map(function (itm) {
      return (
        <View style={[styles.mainContiner,styles.marginBottom10,styles.padding10]} key={itm.id} >
        <View style={[styles.flex,styles.flexStart]}><Text>Tirtle·amin</Text></View>
        <View style={[styles.flex,styles.flexStart,styles.flexDirectionColumn]}>
          <View style={[styles.flex,styles.overflowHide,styles.marginTop10]}>
            <Image style={styles.imgAllStyle}  source={require('../img/tabacon/tbDe2.png')}/>
          </View>
          <View style={[styles.flex,styles.overflowHide,styles.marginTop10,styles.flexDirectionRow]}>
            <Text>this is a impresa</Text>
            <View style={{flex:2,alignItems: 'flex-end'}}>
              <Icon name='comment'  color='black' size={20}></Icon>
            </View>
          </View>
        </View>
      </View>
      )
    })
    return (
      <View style={[styles.detailContainView,styles.flexStart]}>
        {resumap}
      </View>
    )
  }
}

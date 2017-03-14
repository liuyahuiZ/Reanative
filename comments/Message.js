import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
const styles=style.styles
export default class Message extends Component {
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
      <View style={[styles.mainContiner,styles.marginBottom10,styles.borderRadiusSmial,styles.overflowHide]} key={itm.id} >
          <View style={[styles.flex,styles.overflowHide]}>
            <Image style={styles.imgMsgStyle}  source={require('../img/tabacon/tbDe2.png')}/>
          </View>
      </View>
      )
    })
    return (
      <View style={[styles.detailContainView,styles.flexStart]}>
        <ScrollView style={styles.hasHeader}>
        <ScrollableTabView initialPage={0}
         renderTabBar={() => <ScrollableTabBar />}
         tabBarUnderlineStyle={{height:1,backgroundColor:'#999'}}
         tabBarBackgroundColor='#fff'
         tabBarActiveTextColor='#111'
         tabBarInactiveTextColor='#666'>
          <View tabLabel="全部" style={[styles.flex,styles.padding10]}>
            {resumap}
          </View>
          <View tabLabel="系统" style={[styles.flex,styles.padding10]}>
            {resumap}
          </View>
          <View tabLabel="活动" style={[styles.flex,styles.padding10]}>
            <Text>Page 3</Text>
          </View>
        </ScrollableTabView>
        </ScrollView>
      </View>
    )
  }
}

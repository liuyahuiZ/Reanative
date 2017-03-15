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
    let trr=[{id:1},{id:2},{id:3},{id:4}]
    let resumap= arr.map(function (itm) {
      return (
      <View style={[styles.mainContiner,styles.marginBottom10,styles.borderRadiusSmial,styles.overflowHide]} key={itm.id} >
          <View style={[styles.flex,styles.overflowHide]}>
            <Image style={styles.imgMsgStyle}  source={require('../img/tabacon/lkj.png')}/>
          </View>
      </View>
      )
    })
    let allmap= arr.map(function (itm) {
      return (
      <View style={[styles.mainContiner,styles.borderBottom,styles.padding10]} key={itm.id} >
          <View style={[styles.flex2,styles.flexDirectionRow,styles.height60,styles.alignItemsStart]}>
            <View style={[styles.flex]}><Text style={[styles.fontSize18]}>timpresa</Text></View>
            <View style={[styles.flex2,styles.alignItemsEnd,styles.flexDirectionRowReverse]}>
              <Text style={[styles.marginRight5,styles.fontSize12,styles.textColorGrray]}>2017/3/11</Text>
            </View>
          </View>
          <Text style={[styles.flex,styles.fontSize12,styles.textColorGrray]}>Tirtle aiaasdm asdas amda asda is a asdk asd</Text>
      </View>
      )
    })
    let sysmap= trr.map(function (itm) {
      return (
      <View style={[styles.mainContiner,styles.maxHeight70,styles.borderBottom,styles.padding10]} key={itm.id} >
          <View style={[styles.flex,styles.flexDirectionRow,styles.height60,styles.alignItemsStart]}>
            <View style={[styles.flex]}><Text style={[styles.fontSize18]}>timpresa</Text></View>
            <View style={[styles.flex2,styles.alignItemsEnd,styles.flexDirectionRowReverse]}>
              <Icon name='eye'  color='black' size={15}></Icon>
              <Text style={[styles.marginRight5,styles.fontSize12,styles.textColorGrray]}>2017/3/11</Text>
            </View>
          </View>
          <Text style={[styles.flex,styles.fontSize12,styles.textColorGrray]}>Tirtle aiaasdm asdas amda asda is a asdk asd</Text>
      </View>
      )
    })
    return (
      <View style={[styles.detailContainView,styles.flexStart]}>
        <ScrollView style={styles.hasHeader}>
        <ScrollableTabView initialPage={0}
         renderTabBar={() => <ScrollableTabBar />}
         tabBarUnderlineStyle={{height:0,backgroundColor:'#999'}}
         tabBarBackgroundColor='#fff'
         tabBarActiveTextColor='#F96C43'
         tabBarInactiveTextColor='#666'>
          <View tabLabel="全部" style={[styles.flex,styles.marginTop10,styles.borderTop]}>
            {allmap}
          </View>
          <View tabLabel="系统" style={[styles.flex,styles.marginTop10,styles.borderTop]}>
            {sysmap}
          </View>
          <View tabLabel="活动" style={[styles.flex,styles.padding10]}>
            {resumap}
          </View>
        </ScrollableTabView>
        </ScrollView>
      </View>
    )
  }
}

import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Easing} from 'react-native';
import style from '../service/styles'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/FontAwesome'
import ListPage from './ListPage'
import ListPageFir from './ListPageFir'

const styles=style.styles
export default class DetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      isRefreshing: false,
      refreshText:'pull refresh',
      rotation:'0deg',
      bounceValue: new Animated.Value(0),
      spinValue:new Animated.Value(0)
    }
  }
  componentDidMount () {
    this.state.bounceValue.setValue(0)
    this.spin()
  }

  spin () {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 2,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  toMain(){
    this.props.navigator.pop();
  }
  toList(){
    this.props.navigator.push({id:"list",title:"List",data:"Passed from List screen"});
  }
  getData(){
    let o=this
    setTimeout(function() {
      o.setState({isRefreshing:false})
    },2000)
  }
  onsroll(e){
    LayoutAnimation.spring();
    if(e.nativeEvent.contentOffset.y<(-88)){
      this.setState({'refreshText':'释放刷新'})
      Animated.spring(
        this.state.bounceValue,{toValue: 1,}
      ).start()
    }else{
      this.setState({'refreshText':'下拉刷新'})
      this.state.bounceValue.setValue(0)
    }
    console.log('y:',e.nativeEvent.contentOffset.y)
  }
  stopScroll(e){
    console.log('endY:',e.nativeEvent.contentOffset.y)
    if(e.nativeEvent.contentOffset.y<(-88)){
    this.setState({isRefreshing:true})
    this.getData()
    }
  }
  render() {
    let animat
    if(this.state.isRefreshing){
      animat=(<View style={[styles.alignItemsCenter,styles.flexCenter,styles.flexDirectionRow,{flex:1,height:64,marginTop:0}]}>
        <Animated.View style={[{
            transform: [
              {rotate: this.state.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
             },]
             }]}><Icon name='spinner' color='black' size={20}></Icon>
        </Animated.View>
        <Text style={[styles.marginLeft10]}>加载中...</Text></View>)
    }else{
      animat=(<View style={[styles.loading,styles.alignItemsCenter,styles.flexCenter,styles.flexDirectionRow]}>
      <Animated.View style={[{
          transform: [
            {rotate: this.state.bounceValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['-45deg', '135deg']
            })
           },]
           }]}>
           <Icon name='rocket' color='black' size={20}></Icon>
       </Animated.View>
        <Text style={[styles.marginLeft10]}>{this.state.refreshText}</Text>
      </View>)
    }
    return (
      <View style={styles.detailContainView}>
        <ScrollView style={styles.hasHeader} scrollEventThrottle={200} onScroll={this.onsroll.bind(this)} onScrollEndDrag={this.stopScroll.bind(this)}>
          {animat}
          <ScrollableTabView initialPage={0}
           renderTabBar={() => <ScrollableTabBar />}
           tabBarUnderlineStyle={{height:1,backgroundColor:'#999'}}
           tabBarActiveTextColor='#111'
           tabBarInactiveTextColor='#666'>
            <View tabLabel="React" style={styles.flex}>
              <ListPage/>
            </View>
            <View tabLabel="Rct" style={styles.flex}>
              <ListPageFir/>
            </View>
            <View tabLabel="face" style={styles.flex}>
              <Text>Page 3</Text>
            </View>
            <View tabLabel="foce" style={styles.flex}>
              <Text>Page 4</Text>
            </View>
          </ScrollableTabView>
          <TouchableHighlight
           style={styles.button}
           onPress={this.toMain.bind(this)}
           underlayColor="green">
             <Text style={styles.blackText}>{this.props.data}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.bgshow,styles.padding10,styles.marginTop10]} onPress={this.toList.bind(this)} underlayColor="#B5B5B5">
             <Text style={styles.blackText}>To list =></Text>
          </TouchableHighlight>

        </ScrollView>
      </View>
    )
  }
}

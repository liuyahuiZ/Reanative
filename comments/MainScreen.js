import React, { Component, PropTypes } from 'react';
import { View,ScrollView, RefreshControl,Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Bottom from './Bottom'
import Carousel from 'react-native-carousel'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
    }
  }
  toDetail(){
    this.props.navigator.push({id:"detail",title:"Detail",data:"Passed from Main screen"});
  }
  toPop(){
    this.props.navigator.push({id:"pop",title:"pop",data:"goto pop"});
  }
  toDetailShow(){
    this.props.navigator.push({id:"DetailShow",title:"DetailShow",data:"goto DetailShow"});
  }
  toLogin(){
    this.props.navigator.push({id:"Login",title:"Login",data:"goto Login"});
  }

  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.containView}>
      <ScrollView style={styles.hasHeader} scrollEventThrottle={200} refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#66A0E0"
            title={this.state.isRefreshing? '刷新中....':'下拉刷新'}
            titleColor="#66A0E0"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }>
        <Carousel width={375} delay={5000} inactiveIndicatorText= '•'
        indicatorText= '•' hideIndicators={false} indicatorSpace={20} indicatorColor="#222"
         inactiveIndicatorColor="#fff" indicatorSize={30} indicatorAtBottom={true} indicatorOffset={10} loop={true}>
          <View style={styles.carview}>
            <Image style={{flex:1,width:375}}  source={require('../img/tabacon/sjkq.png')}/>
          </View>
          <View style={styles.carview}>
            <Image style={{flex:1,width:375}} source={require('../img/banner/bn3.png')}/>
          </View>
          <View style={styles.carview}>
            <Image style={{flex:1,width:375}} source={require('../img/tabacon/dfb.png')}/>
          </View>
        </Carousel>
        <View style={[styles.mainContiner,styles.marginTop10,styles.padding10]}>
          <View style={[styles.flex,styles.flexStart]}><Text>Tirtle·amin</Text></View>
          <View style={[styles.flex,styles.flexStart,styles.flexDirectionRow]}>
            <View style={[styles.homeItemLeft,styles.borderRadiusLittle,styles.overflowHide]}>
            <TouchableOpacity
             onPress={this.toDetailShow.bind(this)}
             underlayColor="#F5FCFF">
              <Image style={styles.imgStyle}  source={require('../img/tabacon/poiap.png')}/>
              </TouchableOpacity>
            </View>
            <View style={[styles.homeItemRight,styles.borderRadiusLittle,styles.overflowHide]}>
            <TouchableOpacity
             onPress={this.toDetailShow.bind(this)}
             underlayColor="#F5FCFF">
              <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDe2.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.flex,styles.flexStart,styles.flexDirectionRow]}>
            <View style={[styles.homeItemLeft,styles.borderRadiusLittle,styles.overflowHide]}>
              <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDev.png')}/>
            </View>
            <View style={[styles.homeItemRight,styles.borderRadiusLittle,styles.overflowHide]}>
              <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDeo.png')}/>
            </View>
          </View>
        </View>
        <TouchableHighlight style={[styles.bgshow,styles.padding10]} onPress={this.toDetail.bind(this)} underlayColor="#B5B5B5">
           <Text style={styles.blackText}>查看更多详情</Text>
        </TouchableHighlight>

        <View style={[styles.mainContiner,styles.marginTop10,styles.padding10]}>
          <ScrollView style={[styles.flex,styles.flexDirectionRow]} horizontal={true}>
              <View style={[styles.homeItem,styles.borderRadiusLittle,styles.overflowHide]}>
                <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDef1.jpg')}/>
              </View>
              <View style={[styles.homeItem,styles.borderRadiusLittle,styles.overflowHide]}>
                <Image style={styles.imgStyle}  source={require('../img/tabacon/lkj.png')}/>
              </View>
              <View style={[styles.homeItem,styles.borderRadiusLittle,styles.overflowHide]}>
                <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDev.png')}/>
              </View>
              <View style={[styles.homeItem,styles.borderRadiusLittle,styles.overflowHide]}>
                <Image style={styles.imgStyle}  source={require('../img/tabacon/tbDeo.png')}/>
              </View>
          </ScrollView>
        </View>

        <View style={[styles.mainContiner,styles.marginTop10,styles.padding10]}>
          <View style={[styles.flex,styles.flexStart]}><Text>Tirtle·amin</Text></View>
          <View style={[styles.flex,styles.flexStart,styles.flexDirectionColumn]}>
            <View style={[styles.flex,styles.overflowHide,styles.marginTop10]}>
              <Image style={styles.imgAllStyle}  source={require('../img/tabacon/iao.png')}/>
            </View>
            <View style={[styles.flex,styles.overflowHide,styles.marginTop10,styles.flexDirectionRow]}>
              <Text>this is a impresa</Text>
              <View style={{flex:2,alignItems: 'flex-end'}}>
                <Icon name='comment'  color='black' size={20}></Icon>
              </View>
            </View>
          </View>
        </View>
        <TouchableHighlight style={[styles.bgshow,styles.padding10,styles.marginTop10]} onPress={this.toPop.bind(this)} underlayColor="#B5B5B5">
           <Text style={styles.blackText}>=>goto pop</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.bgshow,styles.padding10,styles.marginTop10]} onPress={this.toLogin.bind(this)} underlayColor="#B5B5B5">
           <Text style={styles.blackText}>=>goto Login</Text>
        </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

import React, { Component, PropTypes } from 'react';
import { View,ScrollView, RefreshControl,Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Bottom from './Bottom'
import Carousel from 'react-native-carousel'
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
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
      days: [{
          key: 0,
          title: "pop",
          isFA: true,
          icon: "contao",
          size: 48,
          color: "#ff856c",
          hideNav: false,
          route:'pop'
        }, {
          key: 2,
          title: "Login",
          isFA: true,
          icon: "rebel",
          size: 50,
          color: "#494849",
          hideNav: true,
          route:'Login'
        }, {
          key: 3,
          title: "Clock",
          isFA: false,
          icon: "ios-stopwatch",
          size: 50,
          color: "#FF9A05",
          hideNav: false,
          route:'Clock'
        }, {
          key: 4,
          title: "PassLock",
          isFA: true,
          icon: "lock",
          size: 50,
          color: "#00D204",
          hideNav: false,
          route:'PassLock'
        }, {
          key: 5,
          title: "TouchMove",
          isFA: true,
          icon: "spotify",
          size: 50,
          color: "#777",
          hideNav: true,
          route:'TouchMove'
        },{
          key: 6,
          title: "TwiterUI",
          isFA: false,
          icon: "logo-twitter",
          size: 50,
          color: "#2aa2ef",
          hideNav: true,
          route:'TwiterUI'
        },{
          key: 7,
          title: "Swip",
          isFA: true,
          icon: "heart",
          size: 50,
          color: "#F96C43",
          hideNav: true,
          route:'Swip'
        },{
          key: 8,
          title: "AllComment",
          isFA: true,
          icon: "delicious",
          size: 50,
          color: "#F96C43",
          hideNav: true,
          route:'AllComment'
        }]
    }
  }
  toDetail(){
    this.props.navigator.push({id:"detail",title:"Detail",data:"Passed from Main screen"});
  }

  toNaviger(route){
    this.props.navigator.push({id:route,title:route,data:"goto Login"});
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
    let boxes = this.state.days.map((elem, index) => {
      let top = Math.floor(index/4)*this._width;
      let left = (index%4)*this._width;
      return(
        <View ref={"box"+index}  key={elem.key} style={[styles.touchBox,{top,left}]} underlayColor="#eee">
          <TouchableOpacity onPress={this.toNaviger.bind(this,elem.route)} >
          <View style={styles.boxContainer} ref={"box"+index}  key={elem.key}>
          <View style={styles.iconItem}>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
            </View>
            <Text style={styles.boxText}>{elem.title}</Text>
          </View>
          </TouchableOpacity>
        </View>
      );
    })
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

        <View style={[styles.flex,styles.flexDirectionRow,styles.flexWrap,styles.marginTop10]}>
        {boxes}
        </View>

        <View style={[styles.mainContiner,styles.marginTop10,styles.padding10]}>
          <View style={[styles.flex,styles.flexStart]}><Text>Tirtle·amin</Text></View>
          <View style={[styles.flex,styles.flexStart,styles.flexDirectionRow]}>
            <View style={[styles.homeItemLeft,styles.borderRadiusLittle,styles.overflowHide]}>
            <TouchableOpacity
             onPress={this.toNaviger.bind(this,'DetailShow')}
             underlayColor="#F5FCFF">
              <Image style={styles.imgStyle}  source={require('../img/tabacon/poiap.png')}/>
              </TouchableOpacity>
            </View>
            <View style={[styles.homeItemRight,styles.borderRadiusLittle,styles.overflowHide]}>
            <TouchableOpacity
             onPress={this.toNaviger.bind(this,'DetailShow')}
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
                <IconFA name='comment'  style={[styles.IconColorOrgiange]} size={20}></IconFA>
              </View>
            </View>
          </View>
        </View>

        </ScrollView>
      </View>
    )
  }
}

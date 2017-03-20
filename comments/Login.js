import React, { Component, PropTypes } from 'react';
import { View,ScrollView,StatusBar, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image,TextInput} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from 'react-native-video'

const styles=style.styles
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password:''
    }
  }
  togoToLigin(){
    console.log('to main')
    this.props.dologin();
  }
  render() {
    return (
      <View style={[styles.noHeader,styles.bgTrans]}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Video style={[styles.backgroundVideo,styles.height300]} source={require('../5s.mp4')} // 视频的URL地址，或者本地地址，都可以.
       rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
       volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
       muted={false}                // true代表静音，默认为false.
       paused={false}               // true代表暂停，默认为false
       resizeMode="cover"           // 视频的自适应伸缩铺放行为，
       repeat={true}                // 是否重复播放
       playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
       playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
       />
       <View style={[styles.flex,styles.flexCenter,styles.alignItemsCenter,styles.height250]}>
          <Image style={{width:175,height:175}}  source={require('../img/logoicon.png')}/>
       </View>
          <ScrollView style={styles.flex2}>
          <View style={[styles.flex,styles.padding10,styles.bgTrans]}>
            <View style={[styles.flex,styles.alignItemsCenter]}>
             <View style={[styles.loginWidth,styles.loginBg,styles.borderRadiusLittle,styles.flexDirectionRow]}>
             <Icon style={[styles.flex,styles.padding10]} name='rocket' color='#999' size={23} />
              <TextInput
                style={{flex:8,height: 55,backgroundColor:'transparent'}}
                onChangeText={(username) => this.setState({username})}
                placeholder='请输入手机号'
                value={this.state.username}
              />
             </View>
            </View>

            <View style={[styles.flex,styles.alignItemsCenter,styles.marginTop10]}>
            <View style={[styles.loginWidth,styles.loginBg,styles.borderRadiusLittle,styles.flexDirectionRow]}>
              <Icon style={[styles.flex,styles.padding10]} name='lock' color='#999' size={23} />
              <TextInput
                style={{flex:8,height: 55}}
                onChangeText={(password) => this.setState({password})}
                placeholder='请输入密码'
                value={this.state.password}
                secureTextEntry={true}
              />
              </View>
            </View>
            <TouchableOpacity onPress={this.togoToLigin.bind(this)}>
            <View style={[styles.flex,styles.alignItemsCenter,styles.marginTop22]}>
              <View style={[styles.loginWidth,styles.longButtom,styles.borderRadiusLarge,styles.bgBottonGre]}>
              <Text style={[styles.textColorWhite]}>登陆</Text>
              </View>
            </View>
            </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    )
  }
}

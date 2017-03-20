import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Modal,Easing} from 'react-native';
import style from '../../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles=style.styles
export default class MsgConfirm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    showbg:false,
    spinValue: new Animated.Value(0),
    bgValue: new Animated.Value(0),
    };
  }
  componentDidMount () {
    this.state.spinValue.setValue(0)
    this.state.bgValue.setValue(0)
  }
  doAnimate(){
    this.setState({showbg:true})
    Animated.spring(
      this.state.spinValue,
      {
        toValue: 1,
      }
    ).start()
    Animated.timing(
      this.state.bgValue,
      {
        toValue: 0.4,
        duration: 400,
      }
    ).start()
  }
  hideAnimate(){
    this.setState({showbg:false})
    Animated.spring(
      this.state.spinValue,
      {
        toValue: 0,
      }
    ).start()
    Animated.timing(
      this.state.bgValue,
      {
        toValue: 0,
        duration: 400,
      }
    ).start()
  }
  render() {
    let bg
    let title=this.props.title
    let content=this.props.content
    if(this.state.showbg){
      bg=(<Animated.View style={[{position:'absolute',
          opacity: this.state.bgValue
         }]}>
         <View style={[styles.AllWidth,styles.allheight,styles.bg000]}></View>
      </Animated.View>)
    }else{
      bg=null
    }
    return (
      <View style={[{position:'absolute',top:0,}]}>
      {bg}
      <Animated.View style={[{position:'absolute',
          transform: [
            {scaleY: this.state.spinValue
           },],opacity:this.state.spinValue
         },styles.top30]}>
           <View style={[styles.flexCenter,styles.alignItemsCenter,styles.popUp]}>
              <View style={[styles.flex,styles.padding5]}><Text style={[styles.padding5,styles.fontSize18]}>{title}</Text></View>
              <View style={[styles.flex,styles.flexWrap,styles.borderTop,styles.padding_5_10]}><Text>{content}</Text></View>
              <View style={[styles.flex,styles.padding5,styles.flexDirectionRow]}>
              <TouchableHighlight onPress={this.hideAnimate.bind(this)} style={[styles.flex,styles.flexCenter,styles.alignItemsCenter]} underlayColor="#F6F6F6"><Text style={[styles.padding10]}>sure</Text></TouchableHighlight>
              <TouchableHighlight onPress={this.hideAnimate.bind(this)} style={[styles.flex,styles.flexCenter,styles.alignItemsCenter]} underlayColor="#F6F6F6"><Text style={[styles.padding10]}>cancle</Text></TouchableHighlight>
              </View>
           </View>
      </Animated.View>
      </View>
    )
  }
}

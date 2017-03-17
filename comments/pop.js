import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Modal,Easing} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './Header'
const styles=style.styles
export default class Pop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    spinValue: new Animated.Value(0),};
  }
  toMain(){
    this.props.navigator.pop();
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  componentDidMount () {
    this.state.spinValue.setValue(1)
  }
  doAnimate(){
    Animated.spring(
      this.state.spinValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start()
  }
  hideAnimate(){
    Animated.spring(
      this.state.spinValue,
      {
        toValue: 0,
        friction: 1,
      }
    ).start()
  }
  render() {
    return (
      <View style={[styles.detailContainView,styles.relative]}>
      <ScrollView style={styles.hasHeader}>
        <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
        }} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Show Modal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.doAnimate.bind(this)} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Show Animate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.hideAnimate.bind(this)} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Hide Animate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.hideAnimate.bind(this)} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Hide Animate</Text>
          </View>
        </TouchableOpacity>
        <Animated.View style={[{
            transform: [
              {scale: this.state.spinValue
             },]
             }]}>
             <View style={[styles.flexCenter,styles.alignItemsCenter,styles.popUp]}>
                <Icon name='spinner' color='black' size={20}></Icon>
             </View>
        </Animated.View>
      </ScrollView>

        <Modal
          animationType={"slide"} transparent={false}
          visible={this.state.modalVisible} onRequestClose={() => {alert("Modal has been closed.")}} >
          <View style={[styles.height40,styles.marginTop22,styles.flexDirectionRow,styles.borderBottom]}>
            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }} style={[styles.flex,styles.height40,styles.alignItemsStart,styles.navBarLeftButton,styles.flexCenter]}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
            <Icon name='angle-left' color='black' size={30} />
            </Text>
            </TouchableOpacity>
            <View style={[styles.flex,styles.alignItemsCenter,styles.flexCenter]}>
              <Text>Hello World!</Text>
            </View>
            <View style={[styles.flex,styles.alignItemsCenter,styles.flexCenter]}>
              <Text></Text>
            </View>
          </View>
          <ScrollView style={[styles.flex,styles.hasHeader]}>
            <View style={[styles.flex,styles.alignItemsCenter,styles.flexStart]}>
              <TouchableOpacity onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
                <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
                <Text>Hide Modal</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    )
  }
}

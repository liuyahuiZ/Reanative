import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Modal,Easing} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './Header'
import MsgConfirm from './Msgpop/msgconfirm'
import Alerts from './Msgpop/Alerts'
const styles=style.styles
export default class Pop extends Component {
  constructor(props) {
    super(props)
    this.state = {
    modalVisible: false,
    };
  }
  toMain(){
    this.props.navigator.pop();
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  showConfirm(){
    this.refs.getConfirm.doAnimate();
  }
  showAlert(){
    this.refs.getAlert.doAnimate();
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
        <TouchableOpacity onPress={this.showConfirm.bind(this)} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Show Animate</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showAlert.bind(this)} style={[styles.padding10,styles.flexCenter,styles.alignItemsCenter]}>
          <View style={[styles.smallButtom,styles.borderRadiusSmial,styles.bgBottonBlue]}>
          <Text>Show Alert</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <MsgConfirm ref="getConfirm" title={"Confirm"} content={"title is a team, and saiohasd, asdaiiw adksaj asdasdasdssdasd  asdsad asdasdasdssdasd  asdsad"}/>
      <Alerts ref="getAlert" title={"Alert"} content={"title is a team, and saiohasd, asdaiiw"}/>

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

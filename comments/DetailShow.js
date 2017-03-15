import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Modal,WebView} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles
export default class DetailShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
    modalVisible: false,
    url:'http://www.zcool.com.cn/',
    scalesPageToFit:true
    };
  }
  toMain(){
    this.props.navigator.pop();
  }
  onNavigationStateChange(){
    console.log('state change')
  }
  render() {
    return (
      <View style={styles.detailContainView}>
      <ScrollView style={styles.hasHeader}>
          <WebView
          automaticallyAdjustContentInsets={false}
          style={[styles.WebView]}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </ScrollView>
      </View>
    )
  }
}

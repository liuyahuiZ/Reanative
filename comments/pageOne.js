import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import Header from './Header'
import Bottom from './Bottom'
export default class pageOne extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
    }
  }
  render() {
    return (
      <View style={styles.home}>
       <ScrollView style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, height: 40, alignItems: 'center',justifyContent:'center'}} >
            <Text>this tirtles</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

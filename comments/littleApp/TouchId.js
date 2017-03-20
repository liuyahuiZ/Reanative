import React,{ Component } from 'react';
import { Image,StyleSheet,StatusBar,ScrollView,Text,AlertIOS,TouchableHighlight,TouchableOpacity,View } from 'react-native';
import Util from '../../service/util';
import style from '../../service/styles'
import TouchID from 'react-native-touch-id';

const styles=style.styles
export default class theTouchID extends Component{
  constructor() {
    super();
    this.state = {
      enterApp: false
    }
  }

  componentDidMount() {

  }

  getTouchId = () => {
    TouchID.authenticate('Unlock Day19')
    .then(success => {
      this.setState({
        enterApp: true,
      })
      console.log('User authenticated with TouchID');
    })
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.detailContainView}>
        <ScrollView style={styles.hasHeader}>
          <TouchableOpacity onPress={this.getTouchId.bind(this)}>
            <View style={[styles.flex,styles.alignItemsCenter,styles.marginTop22]}>
              <View style={[styles.loginWidth,styles.longButtom,styles.borderRadiusLarge,styles.bgBottonGre]}>
              <Text style={[styles.textColorWhite]}>get TouchID</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

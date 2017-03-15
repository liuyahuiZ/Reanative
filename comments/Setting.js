import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image,Switch,AsyncStorage} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './Header'

const styles=style.styles
export default class Setting extends Component {
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      configarr:[{'key':'Setting','value':true},
      {'key':'JavaScript','value':true},
      {'key':'React','value':true},
      {'key':'Vue','value':true}]
    }
  }
  componentWillMount () {
  // add event listeners (Flux Store, WebSocket, document, etc.)
   let o=this
   o.state.configarr.map(function (itm,key) {
     console.log(itm,key)
     o._loadInitialState(o,itm)
   })
  }
  componentDidMount() {
    console.log('push complete')
  }
  toMain(){
    this.props.navigator.pop();
  }
  changearr(arr,key,value){
    for(let i=0;i<arr.length;i++){
      if(arr[i]['key']==key){
        arr[i]['value']=value
      }
    }
    return arr
  }
  //初始化数据-默认从AsyncStorage中获取数据
  async _loadInitialState(o,key){
      let value=await AsyncStorage.getItem(key.key);
      if(!value||value==undefined){
        value=true
      }
      let arr=this.changearr(o.state.configarr,key.key,(value==='true'))
      o.setState({configarr:arr})
  }
  //进行储存数据_ONE
  async _saveValue_One(key,value){
    await AsyncStorage.setItem(key,value);
  }
  //进行存储数据删除_ONE
  async _removeValue_One(){
      try{
         await AsyncStorage.removeItem(key);
      }catch(error){
      }
  }
  changeSwith(item,pro){
    let value
    if(item==true){
      value=false
    }else{
      value=true
    }
    let arr=this.changearr(this.state.configarr,pro,value)
    this.setState({configarr:arr})

    this._saveValue_One(pro,value.toString())
  }
  render() {
    let po=this
    let setting=po.state.configarr.map(function (itm,key) {
      return (
        <View style={styles.list} key={itm.key}>
          <View style={{flex:1,alignItems: 'center'}}><Icon name='cog' color='#999' size={23} /></View>
          <View style={{flex:4,alignItems: 'flex-start'}}><Text>{itm.key}</Text></View>
          <View style={{flex:2,alignItems: 'flex-end'}}><Switch value={itm.value} onValueChange={po.changeSwith.bind(po,itm.value,itm.key)}/></View>
        </View>
      )
    })

    return (
      <View style={[styles.detailContainView,styles.bgshow,styles.flexStart]}>
      <Header title='Setting' callbackLeft={this.toMain.bind(this)}/>
      <ScrollView style={[styles.flex,styles.bgf6]}>
        {setting}
      </ScrollView>
      </View>
    )
  }
}

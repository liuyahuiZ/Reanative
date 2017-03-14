import React,{Component, PropTypes } from 'react'
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation,Image} from 'react-native';
import style from '../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
const styles=style.styles

export default class Cartlist extends Component {
    constructor(props) {
       super(props);
    }
    componentWillMount () {
    // add event listeners (Flux Store, WebSocket, document, etc.)
     console.log('will mout 123')
    }
    componentDidMount() {
      console.log('push complete')
    }
    delcount(itm) {
        this.props.DelCount(itm);
    }
    addcount(itm) {
        // console.log(this.state,this.props);
        // console.log(event.target);
        // console.log(itm)
        this.props.AddCount(itm);
    }
    render() {
      let o = this;
      let arr=this.props.CartArr
      let resumap= arr.map(function (itm) {
        return (
          <View style={[styles.mainContiner,styles.marginBottom10,styles.paddingTop15,styles.paddingLeft15,styles.flexDirectionRow,styles.maxHeight150]} key={itm.id} >
            <View style={[styles.flex,styles.overflowHide]}>
              <Image style={styles.imgLeftStyle}  source={require('../img/tabacon/tbDev.png')}/>
            </View>
            <View style={[styles.flex2,styles.padding10,styles.alignItemsStart,styles.flexStart]}>
              <Text style={[styles.flex,styles.height30]}>名称:{itm.name}</Text>
              <Text style={[styles.flex2,styles.height60]}>价格:${itm.price}</Text>
              <View style={[styles.flex,styles.overflowHide,styles.marginTop10,styles.flexDirectionRow,styles.alignItemsEnd]}>
                <View style={[styles.flex,styles.alignItemsEnd,styles.flexDirectionRow]}>
                   <TouchableOpacity style={{width:30,backgroundColor:'#999',alignItems: 'center',justifyContent:'center'}} onPress={o.delcount.bind(o,itm)} >
                    <Text>-</Text>
                   </TouchableOpacity>
                   <View style={{width:100,alignItems: 'center',justifyContent:'center'}} >
                    <Text style={{flex:1}}>数量{itm.count}</Text>
                   </View>
                   <TouchableOpacity style={{width:30,backgroundColor:'#999',alignItems: 'center',justifyContent:'center'}} onPress={o.addcount.bind(o,itm)} >
                   <Text>+</Text>
                   </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
      })
      return (
        <View style={{flex:1}}>
          <View style={{flex:1,padding:10}}><Text>CartList</Text></View>
            {resumap}
        </View>
      )
    }
}

import React,{Component, PropTypes } from 'react'
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import style from '../service/styles'
const styles=style.styles
// import Hello from './hello'
export default class Product extends Component {
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

    handleClick(itm) {
        // console.log(this.state,this.props);
        // console.log(event.target);
        console.log(itm)
        this.props.callbackParent(itm);
    }

    render() {
      let o = this;
      let arr=this.props.productArr
      let resumap= arr.map(function (itm) {
        return (
          <TouchableOpacity style={{flex:1,height:80,padding:10,backgroundColor:'#fff',marginBottom:2}} key={itm.id} id={itm.id} onPress={o.handleClick.bind(o,itm)}>
            <View style={{flex:1}}>
              <View style={style.container}>
                <Text>商品名称:{itm.name}</Text>
              </View>
            </View>
            <View style={{flex:1,flexDirection: 'row'}}>
              <View style={{flex:1}}>
                <Text>价格:${itm.price}</Text>
              </View>
              <View style={{flex:1}}>
                <Text>产品编号:{itm.id}</Text>
              </View>
              <View style={{flex:1}} >
                <Text>库存{itm.count}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      })
      return (
        <View style={style.container}>
          <View style={{flex:1,padding:10}}>
            <Text>ProductList</Text>
          </View>
            {resumap}
        </View>
      )
    }
}

import React,{Component, PropTypes } from 'react'
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import Product  from './product'
import Cartlist  from './cartlist'
import style from '../service/styles'
const styles=style.styles
// import Hello from './hello'
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello123!',
            opacity: 1,
            productArr:[{'id':0,'name':'123','count':10,'price':12.00},{'id':1,'name':'1w3','count':4,'price':42.00},{'id':2,'name':'q23','count':7,'price':6.00}],
            CartArr:[],
            AmountOfCart:0
        }
    }

    handleChange(event) {
        console.log(this.state.value,event.target.value);
        if(event.target.value){
            this.setState({value: event.target.value});
        }else{
          console.log('no target')
        }
    }
    handleClick(event) {
        this.refs.myInputEl.focus();
        return true
    }
    //监测是否存在
    checkIn(arr,itm){
      let result
      for (let [key, value] of arr.entries()) {
        console.log(key, value);
        if(value.id==itm.id){
            result=true
            break
        }
      }
      return result
    }
    //操作库存
    changeCount(label,itm){
      let respen
      let produ=this.state.productArr
      for (let [key, value] of produ.entries()) {
        if(value.id==itm.id){
            if(label=='add'){
                value.count+=1
                respen=true
            }else if(label=='del'){
              if(value.count<=0){
                alert('product is gone')
                respen=false
              }else{
                value.count-=1
                respen=true
              }
            }
        }
      }
      this.setState({productArr: produ});
      return respen
    }
    //操作购物车
    changeCart(label,itm){
      let produ=this.state.CartArr
      for (let [key, value] of produ.entries()) {
        if(value.id==itm.id){
            if(label=='add'){
                value.count+=1
            }else if(label=='del'){
                value.count-=1
            }
        }
      }
      this.setState({CartArr: produ});
    }
    //加入购物车
    addCart(itm){
       console.log('before cartArr:',this.state.CartArr)
      let cart=this.state.CartArr
      let theitem={'id':itm.id,'name':itm.name,'count':1,'price':itm.price}
      if(cart.length==0){
        cart.push(theitem)
        this.changeCount('del',itm)
      }else{
        let rustl=this.checkIn(cart,itm)
        if(rustl!=true){
          cart.push(theitem)
        }else{
          console.log('allready in')
          let result=this.changeCount('del',itm)
          if(result){
            this.changeCart('add',itm)
          }

        }
      }
      this.setState({CartArr: cart});
      this.checkCart()
      console.log('after cartArr:',this.state.CartArr)
    }
    //删除购物车
    delCart(newState) {
        console.log(newState)
        let add=this.state.CartArr
        for (let [key, value] of add.entries()) {
          if(value.id==newState.id){
              value.count-=1
              if(value.count==0){
                add.splice(key, 1)
              }
          }
        }
        this.changeCount('add',newState)
        this.setState({CartArr: add});
        this.checkCart()
    }
    //统计总金额
    checkCart(){
      let add=this.state.CartArr
      let amount=0
      for (let [key, value] of add.entries()) {
            amount+=value.count*value.price
      }
      console.log(amount)
      this.setState({AmountOfCart: amount});
    }
    render() {
        let value = this.state.value;
        let comes='my cart'
        return (
            <View style={style.container}>
              <Product  productArr={this.state.productArr} callbackParent={this.addCart.bind(this)}></Product>
              <Cartlist  CartArr={this.state.CartArr} DelCount={this.delCart.bind(this)} AddCount={this.addCart.bind(this)}></Cartlist>
              <View style={{flex:1,padding:10,backgroundColor:'#FD7C40'}}>
                <Text>总计：$ {this.state.AmountOfCart}</Text>
              </View>
            </View>
            )
    }
}

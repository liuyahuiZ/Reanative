import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import style from '../../service/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
const styles=style.styles
export default class AllComment extends Component {

  constructor(props) {
    super(props)
    this.state={
      text: '123',
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from(new Array(20)).map(
        (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
      days: [{
          key: 0,
          title: "pop",
          isFA: true,
          icon: "contao",
          size: 48,
          color: "#ff856c",
          hideNav: false,
          route:'pop'
        }, {
          key: 1,
          title: "DetailShow",
          isFA: true,
          icon: "coffee",
          size: 60,
          color: "#90bdc1",
          hideNav: true,
          route:'DetailShow'
        }, {
          key: 2,
          title: "Login",
          isFA: true,
          icon: "rebel",
          size: 50,
          color: "#494849",
          hideNav: true,
          route:'Login'
        }, {
          key: 3,
          title: "Clock",
          isFA: false,
          icon: "ios-stopwatch",
          size: 50,
          color: "#FF9A05",
          hideNav: false,
          route:'Clock'
        }, {
          key: 4,
          title: "PassLock",
          isFA: true,
          icon: "lock",
          size: 50,
          color: "#00D204",
          hideNav: false,
          route:'PassLock'
        }, {
          key: 5,
          title: "TouchMove",
          isFA: true,
          icon: "spotify",
          size: 50,
          color: "#777",
          hideNav: true,
          route:'TouchMove'
        },{
          key: 6,
          title: "TwiterUI",
          isFA: false,
          icon: "logo-twitter",
          size: 50,
          color: "#2aa2ef",
          hideNav: true,
          route:'TwiterUI'
        },{
          key: 7,
          title: "Swip",
          isFA: true,
          icon: "heart",
          size: 50,
          color: "#F96C43",
          hideNav: true,
          route:'Swip'
        },{
          key: 8,
          title: "Weather",
          isFA: false,
          icon: "ios-partly-sunny",
          size: 50,
          color: "#F96C43",
          hideNav: true,
          route:'Weather'
        },{
          key: 9,
          title: "MyCharts",
          isFA: true,
          icon: "signal",
          size: 50,
          color: "#43D82F",
          hideNav: true,
          route:'MyCharts'
        },{
          key: 10,
          title: "Setting",
          isFA: true,
          icon: "cog",
          size: 50,
          color: "#666",
          hideNav: true,
          route:'Setting'
        }]

    }
  }
  toNaviger(route){
    this.props.navigator.push({id:route,title:route,data:"goto Login"});
  }
  LeftButtonClick(){
    this.props.callbackLeft();
  }
  render() {
    let boxes = this.state.days.map((elem, index) => {
      let top = Math.floor(index/4)*this._width;
      let left = (index%4)*this._width;
      return(
        <View ref={"box"+index}  key={elem.key} style={[styles.touchBox,{top,left}]} underlayColor="#eee">
          <TouchableOpacity onPress={this.toNaviger.bind(this,elem.route)} >
          <View style={styles.boxContainer} ref={"box"+index}  key={elem.key}>
          <View style={styles.iconItem}>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
            </View>
            <Text style={styles.boxText}>{elem.title}</Text>
          </View>
          </TouchableOpacity>
        </View>
      );
    })
    return (
      <View style={styles.detailContainView}>
      <ScrollView style={[styles.hasHeader]}>
        <View style={[styles.flex,styles.flexDirectionRow,styles.flexWrap]}>
        {boxes}
        </View>
      </ScrollView>
      </View>
    )
  }
}

import React,{ Component } from 'react';
import { Image,StyleSheet,Text,TouchableHighlight,TouchableOpacity,Animated,ScrollView,View,TextInput } from 'react-native';
import Util from '../../service/util';
import style from '../../service/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import fuzzy from 'fuzzy'

const styles=style.styles
export default class extends Component{
  constructor() {
    super();

    const stateData = {"AL": "Alabama","AK": "Alaska","AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"}
    this.states = [];
    for (let key in stateData) {
      if (stateData.hasOwnProperty(key)) {
        this.states.push(stateData[key]);
      }
    }

    this.state = {
      states: this.states,
      surchKey:'',
      spinValue: new Animated.Value(0),
    };
  }

  componentDidMount () {
    this.state.spinValue.setValue(150)
  }
  marchText(text){
    let results = fuzzy.filter(text, this.states)
    let matches = results.map(function(el) { return el.string; });
    this.setState({
      states: matches,
    })
  }
  //获取value值调用的方法
  getValue(text) {
        let value = text;
        this.setState({
            surchKey: value
        });
        this.marchText(value)
  }


  doAnimate(){
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 150,
        duration: 400,
      }
    ).start()
  }
  hideAnimate(){
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 10,
        duration: 400,
      }
    ).start()
  }
  clearText(){
    this.setState({
        surchKey: ''
    });
    this.marchText('')
  }

  render() {
    const statesList = this.state.states.map(function(elem, index) {
      return <View key={index} style={styles.list}><Text style={styles.text}>{elem}</Text></View>;
    })
    let delcon
    if(this.state.surchKey){
      delcon=(<TouchableOpacity onPress={this.clearText.bind(this)}>
        <Icon name='remove' style={{marginRight:5}}  color='#999' size={20} /></TouchableOpacity>)
    }else{
      delcon=null
    }
    let animat=(<View style={[styles.AllWidth,styles.height50,styles.bg999,styles.padding5]}>
        <View style={[styles.flex,styles.height40,styles.bgshow,styles.borderRadiusLittle,styles.flexDirectionRow,styles.alignItemsCenter]}>
        <Animated.View style={[{marginLeft: this.state.spinValue
           },styles.flex,styles.height40,styles.bgshow,styles.borderRadiusLittle,styles.flexDirectionRow,styles.alignItemsCenter]}>
          <Icon  name='search' color='#999' size={15} />
          <TextInput placeholder='Search' style={{width:100,height: 40,fontSize:15}}
          value={this.state.surchKey} onChangeText={this.getValue.bind(this)} onFocus={this.hideAnimate.bind(this)} onBlur={this.doAnimate.bind(this)}></TextInput>
        </Animated.View>
        {delcon}
        </View>
      </View>)

    return(
      <View style={styles.detailContainView}>
      <ScrollView style={styles.hasHeader} contentOffset={{y:50}}>
        {animat}
        {statesList}
      </ScrollView>
      </View>
    )
  }
}

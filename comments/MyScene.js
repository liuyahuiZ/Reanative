import React, { Component, PropTypes } from 'react';
import { View,ScrollView, Text,StyleSheet, TouchableHighlight,Animated,
  Alert,Button,TouchableOpacity,LayoutAnimation} from 'react-native';
import Header from './Header'
import Bottom from './Bottom'
import SecondPageComponent from './SecondPageComponent'
const customAnim = {
  customSpring: {
    duration: 400,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.6
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.6
    }
  },
  customLinear: {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut
    }
  }
}
export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state={
      text: '123',
      bounceValue: new Animated.Value(0),
      width: 100,
      height: 100,
    }
    this._add = this._add.bind(this);
    this._del = this._del.bind(this);
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
    Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,                 // 将`bounceValue`值动画化
      {
        toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
        friction: 1,                          // Bouncier spring
      }
    ).start();
    LayoutAnimation.spring();                                // 开始执行动画
  }
  componentWillUpdate() {
    LayoutAnimation.configureNext(customAnim.customLinear);
  }

  _add() {
    // LayoutAnimation.spring();
    this.setState({ width: this.state.width + 20, height: this.state.height + 20 });
  }
  _del() {
    // LayoutAnimation.spring();
    this.setState({ width: this.state.width - 20, height: this.state.height - 20 });
  }
  _pressButton() {
      const { navigator } = this.props;
      //为什么这里可以取得 props.navigator?请看上文:
      //<Component {...route.params} navigator={navigator} />
      //这里传递了navigator作为props
      if(navigator) {
          navigator.push({
              name: 'SecondPageComponent',
              component: SecondPageComponent,
              params: {
                  id: this.state.id
              }
          })
      }
  }
  render() {
    return (
      <View style={styles.home}>
      <Header/>
      <ScrollView style={{flex: 1, flexDirection: 'row'}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._pressButton.bind(this)}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
        <Animated.Image                         // 可选的基本组件类型: Image, Text, View
          source={{uri: 'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg'}}
          style={{
            width: 193, height: 110,
            transform: [                        // `transform`是一个有序数组（动画按顺序执行）
              {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
            ]
          }}
        />

        <View style={styles.container}>
          <View style={[styles.box, { width: this.state.width, height: this.state.height }]} />
          <View style={{flex:1,flexDirection: 'row',justifyContent:'flex-start'}}>
          <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'powderblue'}} onPress={this._add}>
            <View >
              <Text style={styles.buttonText}>Add</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 50, height: 50, backgroundColor: 'skyblue'}} onPress={this._del}>
            <View >
              <Text style={styles.buttonText}>Del</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>

        </ScrollView>
       <Bottom/>
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
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  box: {
    backgroundColor: 'red'
  },
  button: {
    marginTop: 10,
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

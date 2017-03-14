import React from 'react';
import {
    View,ScrollView,
    Navigator,TouchableOpacity,Text
} from 'react-native';
import Header from './Header'
export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          id: null
        };
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id
        });
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
    return (
      <View style={{flex:1}}>
        <Header/>
            <ScrollView style={{flex: 1, flexDirection: 'row'}}>
                <Text>获得的参数: id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </ScrollView>
      </View>
    );
    }
}

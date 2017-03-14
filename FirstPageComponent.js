import React from 'react';
import {
    View,ScrollView,StyleSheet,
    Navigator,TouchableOpacity,Text
} from 'react-native';

import SecondPageComponent from './comments/SecondPageComponent';
import Header from './comments/Header'
import Bottom from './comments/Bottom'
export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 5};
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
          <View style={{flex:1}}>
          <Header/>
          <ScrollView style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转并传递id</Text>
                </TouchableOpacity>
          </ScrollView>
          <Bottom/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

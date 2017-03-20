import React,{ Component } from 'react';
import { Image,StyleSheet,StatusBar,ScrollView,Text,AlertIOS,TouchableHighlight,TouchableOpacity,View } from 'react-native';
import Util from '../../service/util'
import style from '../../service/styles'
import ImageP from 'react-native-image-picker'

const styles=style.styles
export default class ImagePicker extends Component{
  constructor() {
    super();
    this.state = {
      avatarSource:''
    }
  }

  componentDidMount() {

  }

  getImage(){
    let options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
    ImageP.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    let source = { uri: response.uri };
    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    this.setState({
      avatarSource: source
    });
  }
});
  };

  render() {
    return (
      <View style={styles.detailContainView}>
        <ScrollView style={styles.hasHeader}>
          <TouchableOpacity onPress={this.getImage.bind(this)}>
            <View style={[styles.flex,styles.alignItemsCenter,styles.marginTop22]}>
              <View style={[styles.loginWidth,styles.longButtom,styles.borderRadiusLarge,styles.bgBottonGre]}>
              <Text style={[styles.textColorWhite]}>pick Image</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.flexCenter,styles.alignItemsCenter,styles.AllWidth,styles.halfHeight]}>
          <Image source={this.state.avatarSource} style={{width:200,height:150}} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'
import { nativeGetContact } from '../../libs/NativeBridge'

export default class Tab2Screen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      !isIphone && StatusBar.setBackgroundColor('#6a51ae');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  getContact= async ()=>{
 let result = await nativeGetContact()
 console.log('result',result)
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'orange' }}>
                      <Text
              onPress={this.getContact}
            >点我获取用户手机通讯录</Text>
        </View>
      );
    }
}
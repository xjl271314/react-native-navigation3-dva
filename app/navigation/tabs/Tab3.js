import React from 'react';
import { Text, View,StatusBar,TouchableOpacity } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'
import { NativePrintStr } from '../../libs/NativeBridge'

export default class Tab3Screen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      !isIphone && StatusBar.setBackgroundColor('#6a51ae');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  async test(){
    NativePrintStr('哈哈哈')
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'green' }}>
              <TouchableOpacity
                  onPress={this.test.bind(this)}
              >
                  <View>
                    <Text>点击测试调用原生方法</Text>
                  </View>
              </TouchableOpacity>
        </View>
      );
    }
}
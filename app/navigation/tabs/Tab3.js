import React from 'react';
import { Text, View,StatusBar,TouchableOpacity } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'
import { NativePrintStr } from '../../libs/NativeBridge'
import { StatusBarHoc } from '../../libs/statusBar'

@StatusBarHoc('light-content')
export default class Tab3Screen extends React.Component {
  async test(){
    await NativePrintStr('哈哈哈',(err,res)=>{
      if(err) console.error(err) 
      console.log('received from ios',res)
    })
    
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
import React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'
import { showContacts } from '../../libs/NativeBridge'
import Contacts from 'react-native-contacts';
import { StatusBarHoc } from '../../libs/statusBar'

@StatusBarHoc('light-content')
export default class Tab2Screen extends React.Component {
  getContact= async ()=>{
    // let result = await showContacts()
    console.log('result',Contacts)
    // await Contacts.getAll((err, contacts) => {
    //   if (err) {
    //     throw err;
    //   }
    //   // contacts returned
    //   console.log(contacts)
    // })
  }

  getContactNum = async () => {
    let result = await showContactsNum()
    console.log('result',result)
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'orange' }}>
        <Text onPress={this.getContact}>点我获取用户手机通讯录</Text>
        <Text style={{marginTop:20}} onPress={this.getContactNum}> 点击我显示通讯录总条数</Text>
        </View>
      );
    }
}
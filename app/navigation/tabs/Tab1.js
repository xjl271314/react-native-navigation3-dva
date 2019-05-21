import React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'
import { StatusBarHoc } from '../../libs/statusBar'

@StatusBarHoc('light-content')
export default class Tab1Screen extends React.Component {
  render() {
    console.log(this.props.navigation)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text
          onPress={_ => this.props.navigation.navigate('Discovery')}
        >前往发现</Text>
      </View>
    );
  }
}
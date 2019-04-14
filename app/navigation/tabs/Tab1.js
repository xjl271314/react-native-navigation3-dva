import React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { px2dp, isIphone } from '../../libs/commont'

export default class Tab1Screen extends React.Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      !isIphone && StatusBar.setBackgroundColor('#6a51ae');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text
          onPress={_ => this.props.navigation.push('Discovery')}
        >前往发现</Text>
      </View>
    );
  }
}
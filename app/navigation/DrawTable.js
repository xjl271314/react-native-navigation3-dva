import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Image,
  SafeAreaView
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../views/Home'

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerWidth:  300, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/refresh_nav.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


export default MyDrawTable = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
},
  {
    initialRouteName: 'Home'
  }
);
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Button,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';

import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation'
import HomeScreen from '../views/Home'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SwiperFlatListScreen from '../views/SwiperFlatList'
import SectionListScreen from '../views/SectionList'

export default MyDrawTable = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
      ),
    }
  },
  Discovery: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Page5',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  SwiperFlatList: {
    screen: SwiperFlatListScreen,
    navigationOptions: {
      drawerLabel: 'SwiperFlatList',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  SectionList:{
    screen: SectionListScreen,
    navigationOptions: {
      drawerLabel: 'SectionList',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />
      ),
    }
  }
},
  {
    contentOptions: {
      activeTintColor: '#179B16',
    },
    contentComponent: (props) => (
      <ScrollView style={{ backgroundColor: '#FFF', flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={{
            height: 100,
            backgroundColor: '#179B16'
          }}>
            <Text>我是其他位置区域</Text>
          </View>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
);
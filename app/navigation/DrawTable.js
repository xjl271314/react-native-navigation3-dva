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

import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from '../views/Home'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// class MyNotificationsScreen extends Component {
//   static navigationOptions = {
//     drawerWidth:  300, // 展示的宽度
//     drawerPosition: 'left', // 抽屉在左边还是右边
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('../assets/refresh_nav.png')}
//         style={[styles.icon, { tintColor: tintColor }]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Go back home"
//         />
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });


// export default MyDrawTable = createDrawerNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// },
//   {
//     initialRouteName: 'Home'
//   }
// );

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
          drawerIcon: ({tintColor}) => (
              <MaterialIcons
                  name="move-to-inbox"
                  size={24}
                  style={{color: tintColor}}
              />
          ),
      }
  },
},
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#179B16',
    },
    contentComponent: (props) => (
      <ScrollView style={{ backgroundColor: '#FFF', flex: 1 }}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    )
  }
);
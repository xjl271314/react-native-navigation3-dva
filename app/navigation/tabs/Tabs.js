import React from 'react';
import { 
    Image,
    View,
    Text
} from 'react-native';
import {
    StackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import {
    TouchableOpacity
} from '../../component/MyTouchable'
// 底部iocns
import Tab1Icon from 'react-native-vector-icons/AntDesign'
import Tab2Icon from 'react-native-vector-icons/AntDesign'
import Tab3Icon from 'react-native-vector-icons/AntDesign'
import Tab4Icon from 'react-native-vector-icons/AntDesign'

// 页面
import HomeScreen from '../../views/Home';
import MyDrawTable from '../DrawTable'
//tab
import Tab1Screen from './Tab1'
import Tab2Screen from './Tab2'
import Tab3Screen from './Tab3'
import MyScreen from '../../views/My'

export default Tabs = createBottomTabNavigator({
    Home: {
        screen: MyDrawTable,
        navigationOptions: ({ navigation, screenProps }) => ({
            tabBarLabel: '微信',
            tabBarIcon: ({ tintColor }) => (
                <Tab1Icon
                    name='message1'
                    size={22}
                    color={tintColor}
                />
            ),
        }),
    },
    tab1: {
        screen: Tab1Screen,
        navigationOptions: {
            tabBarLabel: '通讯录',
            tabBarIcon: ({ tintColor }) => (
                <Tab2Icon
                    name='solution1'
                    size={22}
                    color={tintColor}
                />
            ),
        },
    },
    tab2: {
        screen: Tab2Screen,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({ tintColor }) => (
                <Tab2Icon
                    name='search1'
                    size={22}
                    color={tintColor}
                />
            ),
        },
    },
    tab3: {
        screen: MyScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Tab2Icon
                    name='user'
                    size={22}
                    color={tintColor}
                />
            ),
        },
    }
},
    {
        animationEnabled: true, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: true, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        initialRouteName: 'Home',
        lazy:true,//是否一次性加载所有tab页面 默认是false
        optimizationsEnabled:true,//是否将tab页嵌套在栈中，如果是一旦该tab页失去焦点将会被移除当前页面，从而提高内存使用率。
        tabBarOptions: {
            activeTintColor: '#0f9b0f', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                height: 50
            },
            labelStyle: {
                fontSize: 12, // 文字大小
            }
        }
    })
import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    SafeAreaView,
    Platform
} from 'react-native';
import {
    StackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import {
    TouchableOpacity
} from '../../component/MyTouchable'
import { connect } from 'react-redux'
import { createAction } from '../../utils'

// 底部iocns
import Tab1Icon from 'react-native-vector-icons/AntDesign'
import Tab2Icon from 'react-native-vector-icons/AntDesign'
import Tab3Icon from 'react-native-vector-icons/AntDesign'
import Tab4Icon from 'react-native-vector-icons/AntDesign'

// 页面
import HomeScreen from '../../views/Home';
import MyDrawTable from '../DrawTable'
import WebViewScreen from '../../views/WebView'

//tab
import Tab1Screen from './Tab1'
import Tab2Screen from './Tab2'
import Tab3Screen from './Tab3'
import MyScreen from '../../views/My'

const staticTabsConfig =
    {
        animationEnabled: true, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: true, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        lazy: true,//是否一次性加载所有tab页面 默认是false
        optimizationsEnabled: true,//是否将tab页嵌套在栈中，如果是一旦该tab页失去焦点将会被移除当前页面，从而提高内存使用率。
        initialRouteName: '1',
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
    }

@connect(({ app }) => ({
    tabs: app.tabs
}))
export default class Tabs extends Component {
    constructor(props) {
        super(props)
        this.tabs = {
            1: {
                screen: HomeScreen,
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
            2: {
                screen: Tab1Screen,
                navigationOptions: {
                    tabBarLabel: '通讯录',
                    tabBarIcon: ({ tintColor }) => (
                        <Tab2Icon
                            name='solution1'
                            size={22}
                            color={tintColor}
                        />
                    )
                },
            },
            3: {
                screen: WebViewScreen,
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
            4: {
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
        }
    }
    componentDidMount() {
        this.initData()
    }

    initData() {
        const { dispatch } = this.props
        dispatch(createAction('app/getTabs')()).then(() => {
            this._getTabs()
        })
    }

    _getTabs() {
        const { tabs } = this.props
        let tmps = {}
        if (tabs && tabs.length > 0) {
            tabs.forEach(element => {
                const id = element.id
                if (this.tabs[id]) {
                    tmps[id] = this.tabs[id]
                }
            })
        }
        else {
            tmps = { ...this.tabs }
        }
        return this.newTabs = createAppContainer(
            createBottomTabNavigator(
                tmps, {
                    tabBarComponent: TabBarComponent, 
                    ...staticTabsConfig
                }));
}
render() {
    const Tabs = this._getTabs()
    return (
        <Tabs />
    )
}
}


class TabBarComponent extends Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        const { routes, index } = this.props.navigation.state;
        if (routes[index].params) {
            const { theme } = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }

        /**
         * custom tabBarComponent
         * https://github.com/react-navigation/react-navigation/issues/4297
         */
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.theme.tintColor || this.props.activeTintColor}
            />
        );
    }

}
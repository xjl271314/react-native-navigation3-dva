import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Tabs from './tabs/Tabs'

import HomePage from '../views/Home';
import DiscoveryPage from '../views/Discovery'
import LoginPage from '../views/Login'
import DetailPage from '../views/Detail'
import WebViewPage from '../views/WebView'
import LinkingPage from '../views/Linking'


//App主页面
const AppStack = createStackNavigator({
    Home: {
        screen: Tabs
    },
    Discovery: {
        screen: DiscoveryPage
    },
    Detail:{
        screen:DetailPage
    },
    WebView:{
        screen:WebViewPage
    },
    Linking:{
        screen:LinkingPage
    }
}, {
        initialRouteName: 'Home',
        initialRouteParams: {}, //初始化参数
        defaultNavigationOptions: ({
            navigation
        }) => ({
            header: null,
            gesturesEnabled: true
        })
    });

// 登录页面
const AuthStack = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: ({
            header: null
        })
    },
});

// 配置只有登录后才会显示tab页面
const RootStack = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
},{
    initialRouteName:'App'
});

export default createAppContainer(RootStack);
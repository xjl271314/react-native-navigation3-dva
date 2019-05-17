import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Tabs from './tabs/Tabs'

import HomePage from '../views/Home';
import DiscoveryPage from '../views/Discovery'
import LoginPage from '../views/Login'

//App主页面
const AppStack = createStackNavigator({
    Home: {
        screen: Tabs
    },
    Discovery: {
        screen: DiscoveryPage
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
});

export default createAppContainer(RootStack);
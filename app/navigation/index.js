import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import Tabs from './tabs/Tabs'

import HomePage from '../views/Home';
import DiscoveryPage from '../views/Discovery'
import LoginPage from '../views/Login'

const AppStack = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: ({
            navigation
        }) => ({
            header: null
        })
    },
    Discovery: {
        screen: DiscoveryPage
    }

}, {
        initialRouteName: 'Home',
        initialRouteParams: {}, //初始化参数
        navigationOptions: ({
            navigation
        }) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            gesturesEnabled: true
        })
    });

// 认证页面
const AuthStack = createStackNavigator({
    Login: {
        screen: LoginPage
    },
});

// 配置只有登录后才会显示tab页面
const RootStack = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
}, {
        initialRouteName: 'Auth'
    });

export default createAppContainer(RootStack);
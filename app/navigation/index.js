import { 
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import Tabs from '../views/Tabs'

import HomePage from '../views/Home';
import DiscoveryPage from '../views/Discovery'
import LoginPage from '../views/Login'

const MainStack = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Discovery: {
        screen: DiscoveryPage
    }

}, {
        initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            gesturesEnabled: true
        })
    }
);

//所有视图页面和全屏视图页面
const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Login: {
            screen: LoginPage
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }

);

export default createAppContainer(RootStack);
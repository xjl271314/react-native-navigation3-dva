import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StatusBar,
    Switch,
    Image,
    Button,
    SafeAreaView,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
import FindRecommendList from '../component/FindRecommendList'
import FindRecommendBlock from '../component/FindRecommendBlock'
import FindHYList from '../component/FindHYList'
import FindMGTXList from '../component/FindMGTXList'
import FindArticleDetail from '../component/FindArticleDetail'
import { px2dp, ifIphoneX } from '../services/commont'

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.logo}><Text>我是Logo</Text></View>

                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder="用户名"
                        />

                         <TextInput
                            placeholder="密码"
                        />
                    </View>
                    <TouchableOpacity style={styles.close} onPress={_=>this.props.navigation.goBack()}>
                        <View>
                            <Image
                                source={require('../assets/all.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        marginTop: px2dp(60),
        width: px2dp(60),
        height: px2dp(60),
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        position: 'absolute',
        left: px2dp(20),
        top: px2dp(20)
    }
});

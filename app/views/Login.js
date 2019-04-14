import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native';
import { px2dp, ifIphoneX, deviceH } from '../libs/commont'
import AsyncStorage from '@react-native-community/async-storage'
import commonStyle from '../libs/commonStyle'
import BaseInput from '../component/BaseInput'
import { TouchableOpacity } from '../component/MyTouchable'
import Button from '../component/Button'

const Logos = () => (
    <View style={{
        alignItems: 'center'
    }}>
        <Image
            source={require('../assets/logo.png')}
        />
        <Text style={{
            marginVertical: px2dp(5),
            fontSize: px2dp(14),
            color: '#999'
        }}>WeChat</Text>
    </View>
)

const Footer = () => (
    <View style={{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        left:0,
        right:0,
        bottom:px2dp(20),
    }}>
        <Text style={styles.messageButtonText}>找回密码</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.messageButtonText}>紧急冻结</Text>
        <Text style={styles.divider}>|</Text>
        <Text style={styles.messageButtonText}>更多选项</Text>
    </View>
)

export default class Login extends Component {

    constructor(props){
        super(props)
        this.judgeLogin()
    }
    static navigationOptions = {
        header:null
    }

    state = {
        account: '',
        password: ''
    }
    
    async judgeLogin(){
        let isLogin = await AsyncStorage.getItem('login')
        if(isLogin){
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        const { account, password } = this.state
        const { state } = this.props.navigation
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainer}>
                    <Logos />
                    <View style={styles.formContainer}>
                        <BaseInput
                            label="用户名"
                            animated
                            placeholder="请填写邮箱/手机号/微信号"
                            value={account}
                            onChangeText={e => this.setState({ account: e })}
                        />

                        <BaseInput
                            label="密码"
                            animated
                            placeholder="请填写微信密码"
                            value={password}
                            onChangeText={e => this.setState({ password: e })}
                        />

                        <TouchableOpacity style={styles.messageButton}>
                            <Text style={styles.messageButtonText}>用短信验证码登录</Text>
                        </TouchableOpacity>


                        <Button
                            style={styles.loginButton}
                            underlayColor="#52c41a"
                        >
                            <Text style={styles.loginButtontext}>登录</Text>
                        </Button>

                        <Footer />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyle.mainColor,
        flex: 1,
        alignItems: 'center'
    },
    viewContainer: {
        paddingTop: px2dp(0.15 * deviceH),
        paddingHorizontal: px2dp(15),
    },
    formContainer: {
        width: '100%',
        flex: 1,
        marginTop: px2dp(30),
    },
    messageButton: {
        marginVertical: px2dp(15),

    },
    messageButtonText: {
        color: '#1565C0',
        fontSize: px2dp(15)
    },
    loginButton: {
        marginTop: px2dp(50),
    },
    loginButtontext: {
        fontSize: px2dp(20),
        color: '#FFF'
    },
    divider:{
        marginHorizontal: px2dp(5),
        color:'#333',
        alignSelf: 'center',
    }
});

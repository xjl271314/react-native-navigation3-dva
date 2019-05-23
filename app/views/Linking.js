import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Linking
} from 'react-native';
import { StatusBarHoc } from '../libs/statusBar'
import commonStyle from '../libs/commonStyle'
import MyHeader from '../component/MyHeader'
import Button from '../component/Button'

@StatusBarHoc()
export default class LinkingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    sendEmail = () => {
        const url = 'mailto://crazycodeboy@gmail.com';
        Linking.canOpenURL(url)
            .then(support => {
                if (!support) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    Linking.openURL(url);
                }
            }).catch(e => {
                console.error('An error occurred', e);
            });
    }

    render() {
        const { title } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <MyHeader
                    hiddenLeft={true}
                    navigation={this.props.navigation}
                    title="Linkg"
                />
                <Button
                    style={styles.mailButton}
                    underlayColor="#52c41a"
                    onPress={this.sendEmail}
                >
                    <Text style={styles.loginButtontext}>测试是否可以打开邮件</Text>
                </Button>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mailButton: {
        backgroundColor: 'red'
    }
})

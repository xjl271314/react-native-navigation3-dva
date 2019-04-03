import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView
} from 'react-native';
import { px2dp, ifIphoneX } from '../libs/commont'
import AsyncStorage  from '@react-native-community/async-storage'
import commonStyle from '../libs/commonStyle'

export default class Login extends Component {
    componentDidMount = () => {
      
    };
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:commonStyle.mainColor,
        flex: 1,
        alignItems: 'center'
    },
});

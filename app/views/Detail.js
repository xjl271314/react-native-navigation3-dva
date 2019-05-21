import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    StatusBar,
    ImageBackground
} from 'react-native';
import { createAction } from '../utils'
import { connect } from 'react-redux'
import { px2dp, ifIphoneX, isIphone } from '../libs/commont'
import { TouchableOpacity, TouchableHighlight } from '../component/MyTouchable';
import FlatList from '../component/FlatList'
import TextInput from '../component/TextInput'
import Header from '../component/MyHeader'
import Ellipsis from '../component/Ellipsis'
import Icon from 'react-native-vector-icons/Ionicons'
import commonStyle from '../libs/commonStyle'
import FindRecommendBlock from '../component/FindRecommendBlock'
import { StatusBarHoc } from '../libs/statusBar'

@connect(({ app, home }) => ({

}))

@StatusBarHoc()
export default class Detail extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <Text>detail page</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    }
});

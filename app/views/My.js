import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux'
import { px2dp, ifIphoneX,isIphone, deviceH } from '../libs/commont'
import commonStyle from '../libs/commonStyle'
import { 
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight
} from '../component/MyTouchable'
import { createAction } from '../utils'
import { StatusBarHoc } from '../libs/statusBar'
//Header

const MyAvatar = props =>(
    <TouchableWithoutFeedback>
        <View>

        </View>
    </TouchableWithoutFeedback>  
)

@connect(( user ) => ({
    userInfo:user.userInfo
}))
@StatusBarHoc()
export default class My extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.initData()
    }
    
    initData(){
        const { dispatch } = this.props
        dispatch(createAction('user/loadMyPageInfo')())
    }
    render() {
        const { state } = this.props.navigation
        return (
            <SafeAreaView style={styles.container}>
                {/* <MyAvatar 

                /> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyle.mainColor,
        flex: 1,
        alignItems: 'center'
    }
})

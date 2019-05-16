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

//Header

const MyAvatar = props =>(
    <TouchableHighlight>
        

    </TouchableHighlight>  
)

@connect(( user ) => ({
    userInfo:user.userInfo
}))
export default class My extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header:null
    }
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
          StatusBar.setBarStyle('dark-content');
          !isIphone && StatusBar.setBackgroundColor('#6a51ae');
        });
        this.initData()
    }
    
    initData(){
        const { dispatch } = this.props
        dispatch(createAction('user/loadMyPageInfo'))
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        const { state } = this.props.navigation
        return (
            <SafeAreaView style={styles.container}>
                <MyAvatar 

                />
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

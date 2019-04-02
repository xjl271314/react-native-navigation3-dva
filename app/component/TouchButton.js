import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native'
import { px2dp, isIphone } from './../libs/commont'
import commonStyle from '../libs/commonStyle'

const TouchButton = (props) => {
    return (
        isIphone ?
            <TouchableHighlight onPress={props.onPress}
                underlayColor={commonStyle.underlayColor}
                activeOpacity={commonStyle.activeOpacity}
            >
                {props.children}
            </TouchableHighlight> :
            <TouchableNativeFeedback>
                {props.children}
            </TouchableNativeFeedback>
    )
}


export default TouchButton
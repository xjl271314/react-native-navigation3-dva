/**
 * created by 许将龙 2019-04-04
 * 基础的Button组件样式
 * 继成自定义Touchable系列
 * 可定制主题 
 */

import React, { useState } from 'react'
import {
    StyleSheet,
    Animated,
    View,
    Text,
    Easing
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp, deviceW } from '../../libs/commont'
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from '../MyTouchable'
import LinearGradient from 'react-native-linear-gradient';


const typesColor = {
    'primary':{
        disabledColor:commonStyle.disabledColor,
        normalColor:commonStyle.primaryColor,
        textNormalColor:'#FFF'
    }
}
const Button = (props) => {
    const { onPress, title, backgroundColor,style } = props
    const buttonType = props.buttonType || 'TouchableHighlight'
    const type = props.type || 'primary'
    const disabledColor = props.disabledColor || '#ccc'

    const TouchButton = () => {
        switch (buttonType) {
            case 'TouchableHighlight':
                return <TouchableHighlight {...props} style={[styles.normalButton,style]}>{props.children}</TouchableHighlight>
                break;

            case 'TouchableWithoutFeedback':
                return <TouchableWithoutFeedback {...props} style={[styles.normalButton,style]}>{props.children}</TouchableWithoutFeedback>
                break;

            case 'TouchableOpacity':
                return <TouchableOpacity {...props} style={[styles.normalButton,style]}>{props.children}</TouchableOpacity>
                break;

            default:
                return <TouchableHighlight {...props} style={[styles.normalButton,style]}>{props.children}</TouchableHighlight>
                break;
        }
    }

    return (
        <View
            {...props}
        >
            {
                typeof props.backgroundColor == 'object' ?
                    <LinearGradient colors={backgroundColor}  >
                        <TouchButton>{props.children}</TouchButton>
                    </LinearGradient> : <TouchButton/>

            }
        </View>

    )
}

const styles = StyleSheet.create({
    normalButton:{
        height:55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor:commonStyle.primaryColor
    }
})
export default Button 
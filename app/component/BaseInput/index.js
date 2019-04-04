/**
 * 基础的input样式
 * 继成TextInput  
 * 默认是 label+input focus的可控制是否高亮
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Animated,
    View,
    Text,
    TouchableWithoutFeedback,
    Easing
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import TextInput from '../TextInput'
import { px2dp, deviceW } from '../../libs/commont';
import dismissKeyboard from 'dismissKeyboard'

const BaseInput = (props) => {
    const [show, setShow] = useState(new Animated.Value(0))
    const { label } = props
    const animated = props.animated || false
    const animatedColor = props.animatedColor || commonStyle.textInputAnimatedColor
    const placeholderTextColor = props.placeholderTextColor || commonStyle.placeholderColor
    const placeholder = props.placeholder || '请输入'

    onFocus = () => {
        Animated.timing(show, {
            duration: 450,
            toValue: 1,
            ease: Easing.inOut,
        }).start();
    }

    onBlur = () => {
        dismissKeyboard()
        Animated.timing(show, {
            duration: 450,
            toValue: 0,
            ease: Easing.inOut,
        }).start();
    }
    return (

        <View
            style={[styles.InputContainer]}
        >
            <TouchableWithoutFeedback onPress={onBlur}>
                <View style={[styles.labelBox, { ...props.labelStyle }]}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
            
            <TextInput
                {...props}
                style={[styles.TextInput]}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholderTextColor={placeholderTextColor}
            />
            <Animated.View
                style={[styles.lineActive, {
                    zIndex: 10,
                    backgroundColor: animated ? show.interpolate({
                        inputRange: [0, 1],
                        outputRange: [commonStyle.normalInputBorderColor, animatedColor]
                    }) : commonStyle.normalInputBorderColor,
                    right: animated ? show.interpolate({
                        inputRange: [0, 1],
                        outputRange: [deviceW, 0]
                    }) : 0
                }]}>
            </Animated.View>

            <Animated.View
                style={[styles.lineActive, {
                    opacity: animated ? show.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0]
                    }) : 1,
                }]}>
            </Animated.View>
        </View>

    )
}

const styles = StyleSheet.create({
    InputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    TextInput: {
        flex: 1,
        borderBottomWidth: 0,
    },
    labelBox: {
        minWidth: px2dp(80)
    },
    label: {
        fontSize: px2dp(20),
    },
    lineActive: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: commonStyle.halfBorderWidth,
        backgroundColor: commonStyle.normalInputBorderColor
    }
})
export default BaseInput 
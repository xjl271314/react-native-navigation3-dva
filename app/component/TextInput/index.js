/**
 * 
 */

import React from 'react';
import {
    TextInput as RNTextInput,
    StyleSheet
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';

const TextInput = (props) =>{
    return(
        <RNTextInput
            {...props}
            style={[styles.TextInput,props.style]}
            
        />
    )
}

const styles = StyleSheet.create({
    TextInput:{
        padding:0,//fix android
        height:55,
        color:'#999',
        fontSize:px2dp(20),
        borderBottomWidth: commonStyle.halfBorderWidth,
        borderBottomColor: commonStyle.normalBorderColor,
    }
})
export default TextInput 
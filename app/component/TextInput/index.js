/**
 * 
 */

import React from 'react';
import {
    TextInput as RNTextInput,
    StyleSheet
} from 'react-native'
import commonStyle from '../../libs/commonStyle'

const TextInput = (props) =>{
    return(
        <RNTextInput
            style={styles.TextInput}
            {...props}
            
        />
    )
}

const styles = StyleSheet.create({
    TextInput:{
        height:55,
        borderBottomWidth: commonStyle.halfBorderWidth,
        borderBottomColor: commonStyle.normalBorderColor,
    }
})
export default TextInput 
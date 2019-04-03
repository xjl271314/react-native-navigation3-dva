/**
 * 超出隐藏文本 默认单行超出隐藏
 * numberOfLines number  多少行后隐藏
 * 
 */

import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';

const Ellipsis = (props) =>{
    return(
        <Text
            {...props}
            adjustsFontSizeToFit={false}
            style={[styles.Text,props.style || '']}
            numberOfLines={props.numberOfLines || 1}
        >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize: px2dp(15),
        color:'#999'
    }
})
export default Ellipsis 
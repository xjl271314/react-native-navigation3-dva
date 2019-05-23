/**
 * 占位填充view xjl 2019-05-22
 * 
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';

const WhiteSpace = (props) =>{
    return(
        <View
            {...props}
            style={[{
                width:'100%',
                height:props.heigh || px2dp(10)
            },styles.WhiteSpace,props.style || '']}
        />
    )
}

const styles = StyleSheet.create({
    WhiteSpace:{
        backgroundColor:commonStyle.whiteSpaceDefaultColor
    }
})
export default WhiteSpace 
/**
 * created by 许将龙  2019-4-2
 * 列表为空的样式
 */

import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet,
    ImageBackground
} from 'react-native'
import {
    deviceH
} from '../../libs/commont'

const ListEmptyComponent = (props) => {
    return (
        <View
            {...props}
            style={[
                styles.container,
                {
                    height: props.height || 'auto',
                    ...props.style
                }
            ]}
        >
            <Text>发挥想象力,这里是列表为空的显示</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default ListEmptyComponent 
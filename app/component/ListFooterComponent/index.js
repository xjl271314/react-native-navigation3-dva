/**
 * created by 许将龙  2019-4-3
 * FlatList列表 的尾部组件
 */

import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const ListFooterComponent = (props) => {
    return (
        <View
            {...props}
            style={[
                styles.container,
                {
                    ...props.style
                }
            ]}
        >
            <Text style={styles.text}>{
                props.loadEnd?'我是有底线的':'正在玩命加载中...'
            }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        color:'#999',
        paddingVertical: 15,
    }
})
export default ListFooterComponent 
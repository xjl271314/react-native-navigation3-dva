/**
 * created by 许将龙  2019-4-2
 * 
 * 类似ant design的Badge组件
 * 
 * count number  未读消息数
 * point boolean 是否只显示小圆点
 * status enum[string]  枚举类型['Success','Error','Default','Processing','Warning']
 * showIcon boolean 是否显示数字 
 * overflowCount number  超出指定数字后显示99+等
 * color color 小圆点的背景色 会覆盖默认的status
 * textColor color 小圆点的文字颜色 会覆盖默认的status文本颜色
 * size enum[string] 枚举类型['tiny','small','default','large']
 */

import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';

const statusColor = {
    Success: '#52c41a',
    Error: '#f5222d',
    Default: '#d9d9d9',
    Processing: '#1890ff',
    Warning: '#faad14'
}

const statusTextColor = {
    Success: '#FFF',
    Error: '#FFF',
    Default: '#d9d9d9',
    Processing: '#FFF',
    Warning: '#FFF'
}
const sizes = {
    tiny:{
        minWidth:6,
        height:6
    },
    small: {
        minWidth: 12,
        height: 12
    },
    default: {
        minWidth: 20,
        height: 20
    },
    large: {
        minWidth: 30,
        height: 30
    }
}
let defaultWidth = 20

const Badge = (props) => {
    const {
        count
    } = props

    const point = props.point || false
    const status = props.status || 'Error'
    const showIcon = props.showIcon || false
    const overflowCount = props.overflowCount || 99
    const color = props.color || statusColor['Error']
    const textColor = props.textColor || statusTextColor['Error']
    const size = point?sizes['tiny']:sizes[props.size] || sizes['default']
    

    _onLayout = (e) => {
        defaultWidth = e.nativeEvent.layout.width
    }
    return (
        <View
            {...props}
            onLayout={(e) => _onLayout(e)}
            style={[
                styles.Badge,
                { ...size },
                {
                    backgroundColor: color || statusColor[status] ,
                    borderRadius: size.height / 2,
                    paddingHorizontal: props.size == 'small' && count < 10 || point ? 0 : 5,
                    transform: [{
                        // matrix: [
                        //     1, 0, 0, 0,
                        //     0, 1, 0, 0,
                        //     0, 0, 1, 0,
                        //     0, -10 || -props.style.height / 2, 0, 1
                        // ],
                        translate: [defaultWidth/2, -size.height / 2 || -props.style.height / 2]
                    }]
                },
                { ...props.style }
            ]}
        >
            {showIcon || count > 0 ?
                <Text style={{
                    color: textColor || statusTextColor[status],
                    fontSize: 10
                }}>
                    {count > overflowCount ? `${overflowCount}+` : count}
                </Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    Badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Badge 
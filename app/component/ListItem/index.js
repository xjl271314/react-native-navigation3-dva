/**
 * 通用ListItem xjl 2019-05-22
 * 
 * @params 
 * 
 * @thumb       String/React.Element 缩略图(当为 string 类型时作为 Image source)根据是否包含http显示为网络图片或者本地图片   无 
 * @style       style  最外层样式
 * @children    ListItem内部的children
 * @wrap        Boolean 是否换行，默认情况下，文字超长会被隐藏， false
 * @extra       String/React.Element  右侧的内容  无
 * @arrow       Enum 箭头方向(右,上,下,左), 可选right,up,down,left 无
 * @borderLine  Boolean  是否显示底部边框 默认是内容下方有边框 false
 * @fullBorder  Boolean  是否整个item显示底部边框  false
 * @onPress     Function item点击回调事件 无
 * 
 */

import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';
import { TouchableHighlight } from '../MyTouchable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ListItem = (props) => {
    const {
        thumb,
        style,
        children,
        wrap,
        extra,
        arrow,
        borderLine,
        fullBorder,
        onPress
    } = props
    let numberOfLines = {};
    if (wrap === false || !wrap) {
        numberOfLines = {
            numberOfLines: 1,
        };
    }
    // 左侧thumb
    const Thumb = () => {
        const result = typeof thumb === 'string' ? thumb.includes('http') ?
            <Image
                style={styles.Thumb}
                source={{ uri: thumb }}
            /> :
            <Image
                style={styles.Thumb}
                source={reuire(thumb)}
            /> : thumb ? thumb : null
        return result
    }
    //中间内容
    let content = null
    if (Array.isArray(children)) {
        const tempContentDom = [];
        children.forEach((el, index) => {
            if (React.isValidElement(el)) {
                tempContentDom.push(el);
            } else {
                tempContentDom.push(
                    <Text
                        style={[styles.Content]}
                        {...numberOfLines}
                        key={`${index}-children`}
                    >
                        {el}
                    </Text>
                )
            }
        })
        content = (
            <View style={[styles.column]}>{tempContentDom}</View>
        )
    }
    else {
        if (children && React.isValidElement(children)) {
            content = <View style={[styles.column]}>{children}</View>;
        } else {
            content = (
                <View style={[styles.column]}>
                    <Text style={[styles.Content]} {...numberOfLines}>
                        {children}
                    </Text>
                </View>
            )
        }
    }
    //extra
    let extraDom;
    if (extra) {
        extraDom = (
            <View style={[styles.ExtraContainer]}>
                <Text style={[styles.Extra]} {...numberOfLines}>
                    {extra}
                </Text>
            </View>
        );
        if (React.isValidElement(extra)) {
            const extraChildren = extra.props.children;
            if (Array.isArray(extraChildren)) {
                const tempExtraDom = [];
                extraChildren.forEach((el, index) => {
                    if (typeof el === 'string') {
                        tempExtraDom.push(
                            <Text
                                {...numberOfLines}
                                style={[styles.Extra]}
                                key={`${index}-children`}
                            >
                                {el}
                            </Text>,
                        );
                    } else {
                        tempExtraDom.push(el);
                    }
                });
                extraDom = (
                    <View style={[styles.ExtraContainer]}>{tempExtraDom}</View>
                );
            } else {
                extraDom = extra;
            }
        }
    }
    //arrow
    const arrEnum = {
        left: <Icon name="chevron-left" size={22} color="#999" />,
        down: <Icon name="chevron-down" size={22}  color="#999"  />,
        up: <Icon name="chevron-up" size={22}  color="#999"  />,
        right:<Icon name="chevron-right" size={22} color="#999" />,
    };
    return (
        <TouchableHighlight
            style={[
                styles.ListItemContainer, 
                fullBorder?{
                    borderBottomColor:commonStyle.normalBorderColor,
                    borderBottomWidth:commonStyle.norderBorderWidth
                }:'',
                style
            ]}
            onPress={onPress.bind(this,props)}
        >
            <View style={styles.ListItemBox}>
                <Thumb />
                <View style={[
                    styles.ContentContainer,
                    borderLine?{
                        borderBottomColor:commonStyle.normalBorderColor,
                        borderBottomWidth:commonStyle.norderBorderWidth
                    }:''
                    ]
                }>
                    {content}
                    {extraDom}
                    {arrow? arrEnum[arrow]: null}
                </View>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    ListItemContainer: {
        height: 55,
        width: '100%',
        paddingLeft: px2dp(15),
        backgroundColor: '#FFF'
    },
    ListItemBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position:'relative'
    },
    Thumb: {
        width: px2dp(44),
        height: px2dp(44)
    },
    ContentContainer: {
        flexDirection: 'row',
        alignItems:'center',
        flex: 1,
        paddingRight: px2dp(15),
        marginLeft:px2dp(15),
        height:55
    },
    Content: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: px2dp(15),
        color: '#333'
    },
    column: {
        flex:1,
        flexWrap: 'wrap',
    },
    ExtraContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: px2dp(15),
    },
    Extra: {
        color: '#999',
        fontFamily: 'PingFangSC-Regular',
    }
})
export default ListItem 
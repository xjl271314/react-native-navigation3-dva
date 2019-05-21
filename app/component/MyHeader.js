/**
 * 优化后的header组件 xjl 2019-05-21
 * 高度采用44 一般在ios平台上都是44的高度  再安卓上一般是50的高度
 * 
 * @params 
 * title string | react-native element
 * leftComponent react-native element
 * rightComponent react-native element
 */

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    px2dp,
    ifIphoneX,
    deviceW,
    isIphone
} from '../libs/commont';
import Icon from 'react-native-vector-icons/Entypo'
import {
    TouchableWithoutFeedback
} from './MyTouchable'
import commonStyle from '../libs/commonStyle'

const HeaderHeight = isIphone ? 44 :50
export default class Header extends PureComponent {
    render() {
        const {
            title,
            leftComponent,
            hiddenLeft,
            rightComponent,
            style,
            leftClick,
            noborder,
            titleClick,
            ...params
        } = this.props;

        const leftonclick = leftClick ? leftClick : () => { this.props.navigation.goBack() };

        return (
            <View style={[styles.headerbox, style ? style : '',{borderBottomWidth:noborder?0:commonStyle.halfBorderWidth}]}>
                {leftComponent ? leftComponent: hiddenLeft?null:
                    <TouchableWithoutFeedback onPress={leftonclick}>
                        <View style={styles.defaultIcon} >
                            <Icon
                                name='chevron-thin-left'
                                size={px2dp(18)}
                                color={'#333'}
                            />
                        </View>
                    </TouchableWithoutFeedback>}
                <View style={styles.titleBox}>
                    {
                        typeof title === "object" ?title : 
                        <Text 
                            style={[styles.navtext]}
                            numberOfLines={1}
                        >{title}</Text>
                    }
                </View>
                <View style={styles.rightbtn}>
                    {rightComponent ? rightComponent : null}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    headerbox: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: commonStyle.normalBorderColor,
        height: 44,
        zIndex: 100,
        paddingHorizontal: px2dp(15),
    },
    defaultIcon: {
        position: 'absolute',
        left: px2dp(15),
    },
    titleBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 0.8*deviceW,
    },
    navtext: {
        fontSize: px2dp(20),
        color: '#333',
    },
    rightbtn:{
        position: 'absolute',
        right: px2dp(15),
    }
});

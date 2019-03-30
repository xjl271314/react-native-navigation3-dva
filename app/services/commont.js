// 设置自适应字体,以iphone6为例

import {
    PixelRatio,
    Dimensions,
    Platform
} from 'react-native';


//获取屏幕的实际宽度

export const deviceW = Dimensions.get('window').width;
export const deviceH = Dimensions.get('window').height;

const basePx = 375

export function px2dp(px) {
    return px * deviceW / basePx
}

//判断设备是否是ios平台
export const isIphone = Platform.OS == 'ios' ? true : false

// iPhoneX 适配问题   2018-4-4

const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((deviceH === X_HEIGHT && deviceW === X_WIDTH) ||
            (deviceH === X_WIDTH && deviceW === X_HEIGHT))
    )
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */

export function ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    } else if (Platform.OS === 'ios') {
        return iosStyle
    } else {
        if (androidStyle) return androidStyle;
        return iosStyle
    }
}
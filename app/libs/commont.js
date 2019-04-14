import {
    PixelRatio,
    Dimensions,
    Platform,
    findNodeHandle,
    UIManager
} from 'react-native';


/**
 * 日期格式化函数
 * @param {} date 
 */

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export function formatDate(date, format = "YYYY-MM-DD", separator) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    format.replace('YYYY', date.getFullYear())
        .replace('MM', formatNumber(month))
        .replace('DD', formatNumber(day))
        .replace('HH', formatNumber(hour))
        .replace('mm', formatNumber(Minute))
        .replace('ss', formatNumber(Seconds));

    return format;
}

//获取屏幕的实际宽度
export const deviceW = Dimensions.get('window').width;
export const deviceH = Dimensions.get('window').height;

// 设置自适应字体,以iphone6为例
const basePx = 375

export function px2dp(px) {
    return px * deviceW / basePx
}


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
        ((deviceH >= X_HEIGHT && deviceW >= X_WIDTH) ||
            (deviceH >= X_WIDTH && deviceW >= X_HEIGHT))
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


//判断设备是否是ios平台
export const isIphone = Platform.OS == 'ios' ? true : false


/** 
 * 返回精确的n位小数数值
 * @param num:number
 * @param dig:number
*/

export function digitToFixed(num, dig) {
    if (typeof (num) == 'undefined') {
        return '0.00'
    }
    else {
        let digit = dig ? dig : 2
        return parseFloat(num).toFixed(digit)
    }
}

/** 
 * 返回账户金额，每隔三位数字添加一个逗号
 * @param str:string

*/

export function threeNumberAPointer(str) {
    return parseFloat(str).toFixed(2).replace(/\d(?=(?:\d{3})+\b)/g, `$&,`)
}


/**
 * 根据时间戳计算得出 今天距离还款日期还剩多少天
 * @param endTime：dateNumber
 * 
 */

export function payBackDeadline(endTime) {
    let nowTime = new Date().getTime() / 1000;
    let diffience = parseFloat(endTime - nowTime);

    return Math.floor(diffience / (60 * 60 * 24))
}


/**
 * 将银行卡末尾4位数字截取出来
 *  @param cardCode:string 银行卡号
 *  @param digit:num  截取长度
*/

export function bankCardLastNum(cardCode, digit) {
    return cardCode.substring(cardCode.length - digit, cardCode.length)
}

/** 
 * 返回银行卡号，每隔四个数字添加一个空格
 * @param str:string

*/
export function formatBankCard(str) {
    let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `);
    return String(newStr)
}

/**
 * 将手机号码替换成134****6789类型格式
 * @param phone:number
 */

export function formatPhone(phone) {
    return String(phone).replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}


/**
 * 自定义antd-mobile-rn的DatePicker所用到的选择日期数据最小可选日期
 * 默认返回距离今日100年前的时间
 */

export function DatePickerMinDate() {
    let now = new Date()
    return new Date(now.getFullYear() - 100, 0, 1)

}

/**
* 自定义antd-mobile-rn的DatePicker所用到的选择日期数据最大可选日期
* 默认返回距离今日18年前的时间 保证某些业务是需要成年人可以进行
*/

export function DatePickerMaxDate() {
    let now = new Date()
    return new Date(now.getFullYear() - 18, 0, 1)

}

export function handleParams(path) {
    let paramsArr = []
    let params = {}
    if (path.indexOf('?')) {
        let tmp = path.split('?')
        path = tmp[0]
        paramsArr = tmp[1] ? tmp[1].split('&') : []
    }

    paramsArr.forEach(item => {
        let acc = item.split('=')
        params[acc[0]] = acc[1]
    })

    return [path, params]
}

//一维数组转化为指定维度的二维数组
export function TwoDimensionArray(arr, dimension) {
    let result = []
    for (var i = 0; i < arr.length; i += dimension) {
        result.push(arr.slice(i, i + dimension))
    }
    return result
}


//获取UI组件的宽高和位置信息
export function layout(ref) {
    const handle = findNodeHandle(ref);
     
    return new Promise((resolve) => {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            resolve({
                x,
                y,
                width,
                height,
                pageX,
                pageY
            });
        });
    });
}
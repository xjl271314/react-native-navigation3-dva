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

export function formatDate(date, type) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    if (type = 'YYYY-MM-DD') {
        return [year, month, day].map(formatNumber).join('-')
    }
    else {
        return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }
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
*获取react-native-element元素的宽度和高度等信息
* @param ref:ref 组件ref
*/

export function getRnElementInfo(ref) {
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

/** 
 * 返回银行卡号，每隔四个数字添加一个空格
 * @param str:string

*/
// replace(/.(?=.)/,`*`)
export function formatBankCard(str) {
    let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `);
    // let subStr = String(newStr).subStr(0,len-4)
    return String(newStr)
}

/** 
 * 返回格式化后的银行卡号 格式为保留银行卡后后几位，前面都显示为*号
 * @param bankCardNum:string
 * @param num:number
*/
// replace(/.(?=.)/,`*`)
export function secretBankCard(bankCardNum, num = 4) {
    console.log(bankCardNum)
    let len = bankCardNum.length;
    console.log(len)
    let str1 = bankCardNum.substring(0, len - num);
    console.log(str1)
    let str2 = bankCardNum.substring(len - num)
    console.log(str2)

    return str1 + str2
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

// 添加 图片到相册
export function saveImage(imgsrc, imgname) {
    return new Promise((resolve, reject) => {
        const Update = NativeModules.UpdateManager;
        const modelAlert = new Comclass().alert;
        let imgpath = '';
        if (imgname) {
            imgpath = /[\.jpg|\.png|\.jpeg|\.gif]$/.test(imgname) ? RNFS.CachesDirectoryPath + '/' + imgname : RNFS.CachesDirectoryPath + '/' + imgname + '.png';
        } else {
            imgpath = RNFS.CachesDirectoryPath + '/save_.png';
        }
        if (RNFS) {
            try {
                RNFS.exists(imgpath).then((e) => {
                    if (e) {
                        RNFS.unlink(imgpath)
                            .then((e) => {
                                RNFS.writeFile(imgpath, imgsrc, 'base64')
                                    .then((success) => {
                                        const promise2 = CameraRoll.saveToCameraRoll(imgpath);
                                        if (promise2 && promise2 != "undefined") {
                                            promise2.then((result) => {
                                                resolve('已保存到相册');
                                            }, (err) => {
                                                if (Platform.OS == "android") {
                                                    modelAlert({
                                                        title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                                            Update.open("2");
                                                        }
                                                    });
                                                } else {
                                                    Toast.fail('请先开启权限再试', 5);
                                                }
                                                reject("请先开启权限再试");
                                            });
                                        } else {
                                            if (Platform.OS == "android") {
                                                modelAlert({
                                                    title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                                        Update.open("2");
                                                    }
                                                });
                                            } else {
                                                Toast.fail('请先开启权限再试', 5);
                                            }
                                            reject("请先开启权限再试");
                                        }
                                    });
                            })
                            .catch((err) => {
                                if (Platform.OS == "android") {
                                    modelAlert({
                                        title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                            Update.open("2");
                                        }
                                    });
                                } else {
                                    Toast.fail('请先开启权限再试', 5);
                                }
                                reject("请先开启权限再试");
                            });
                    } else {
                        RNFS.writeFile(imgpath, imgsrc, 'base64')
                            .then((success) => {
                                const promise2 = CameraRoll.saveToCameraRoll(imgpath);
                                if (promise2 && promise2 != "undefined") {
                                    promise2.then((result) => {
                                        resolve('已保存到相册');
                                    }, (err) => {
                                        if (Platform.OS == "android") {
                                            modelAlert({
                                                title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                                    Update.open("2");
                                                }
                                            });
                                        } else {
                                            Toast.fail('请先开启权限再试', 5);
                                        }
                                        reject("请先开启权限再试");
                                    }).catch((error) => {
                                        if (Platform.OS == "android") {
                                            modelAlert({
                                                title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                                    Update.open("2");
                                                }
                                            });
                                        } else {
                                            Toast.fail('请先开启权限再试', 5);
                                        }
                                        reject("请先开启权限再试");
                                    });
                                } else {
                                    if (Platform.OS == "android") {
                                        modelAlert({
                                            title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                                                Update.open("2");
                                            }
                                        });
                                    } else {
                                        Toast.fail('请先开启权限再试', 5);
                                    }
                                    reject("请先开启权限再试");
                                }
                            })
                    }
                });
            } catch (e) {
                if (Platform.OS == "android") {
                    modelAlert({
                        title: "请到权限管理开启再试", titletext: "存储权限未开启，", oktext: "去设置", onOk: () => {
                            Update.open("2");
                        }
                    });
                } else {
                    Toast.fail('请先开启权限再试', 5);
                }
                reject("请先开启权限再试");
            }
        }
    })

}


//处理后台返回的字符串类型value转化为ant支持的array类型的value

export function string2AntArray(str) {
   str = str+'';
   const a = [];
   if(str&&str.length == 1){
       return Array.from(str)
   }
   else{
      a.push(String(str))
      return a
   }
}


export function handleParams(path){
    let paramsArr = []
    let params = {}
    if(path.indexOf('?')){
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
export function TwoDimensionArray(arr,dimension){
    let result = []
    for(var i = 0; i<arr.length; i+=dimension){
        result.push(arr.slice(i,i+dimension))
    }
    return result
}
import {
    NativeModules,
    NativeEventEmitter
} from 'react-native'

const BTEventEmitter = NativeModules.BTEventEmitter

/**
 * 输出字符串
 *
 * @export
 * @param
 * {
 *   text:要输出的字符串
 *   callback:callback
 * } 
 */
export async function NativePrintStr(text,cb) {
    return await BTEventEmitter.NativePrintStr(text,cb)
}

/**
 * toast轻提示
 *
 * @export
 * @param
 * {
 *   text:要提示的文案
 * }
 */


/**
 * 获取用户的手机通讯录
 *
 */

 export async function nativeGetContact(){
    return await BTEventEmitter.nativeGetContact()
 }
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
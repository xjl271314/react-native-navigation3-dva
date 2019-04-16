import { NativeModules, NativeEventEmitter } from 'react-native'

const BTEventEmitter = NativeModules.BTEventEmitter

/**
 * 输出字符串
 *
 * @export
 * @param
 * {
 *   str:要输出的字符串
 * } 
 */
export async function NativePrintStr(str) {
    return await BTEventEmitter.NativePrintStr(str)
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

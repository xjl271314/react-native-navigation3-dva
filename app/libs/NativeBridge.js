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
export async function NativePrintStr(params) {

console.log(BTEventEmitter)
    return await BTEventEmitter.NativePrintStr(params)
}

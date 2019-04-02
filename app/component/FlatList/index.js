/**
 * FlatList的思路是减少渲染的单元行数量，它在render时进行计算，只渲染屏幕中和缓冲区内的单元行，
 * 其余地方使用空白代替，这样不论FlatList有多少内容，实际渲染的单元行数量基本保持不变。
 * 因为有的单元行并没有渲染，当快速滑动到这个区域时，渲染是异步的，此时就会看到白屏，然后才开始显示内容。
 * 
 * 
 * @windowSize
 * 指定了屏幕外的区域渲染多少个屏幕单元(visible length)，默认是21，它也会影响初始渲染的单元行数量。
 * 假如一个android设备高度为640，减去20像素的状态栏，一个屏幕单元是620，会额外渲染20个。
 * 这个数字如果比较大，则同时渲染的单元格数量会比较多，也增加了初始化的时间，如果比较小，则会增加出现白屏的几率。
 */

import React from 'react';
import {
    FlatList as RNFlatList
} from 'react-native'

const FlatList = (props) =>{
    return(
        <RNFlatList
            {...props}
            windowSize = {300}
        />
    )
}

export default FlatList 
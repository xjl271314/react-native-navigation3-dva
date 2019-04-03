/**
 * created by 许将龙 2019-04-03
 * 
 * FlatList的思路是减少渲染的单元行数量，它在render时进行计算，只渲染屏幕中和缓冲区内的单元行，
 * 其余地方使用空白代替，这样不论FlatList有多少内容，实际渲染的单元行数量基本保持不变。
 * 因为有的单元行并没有渲染，当快速滑动到这个区域时，渲染是异步的，此时就会看到白屏，然后才开始显示内容。
 * 
 * 
 * @windowSize
 * 指定了屏幕外的区域渲染多少个屏幕单元(visible length)，默认是21，它也会影响初始渲染的单元行数量。
 * 假如一个android设备高度为640，减去20像素的状态栏，一个屏幕单元是620，会额外渲染20个。
 * 这个数字如果比较大，则同时渲染的单元格数量会比较多，也增加了初始化的时间，如果比较小，则会增加出现白屏的几率。
 * 
 * 
 * @enptyComponentHeight
 * 目前采用列表为空的时候空组件高度和列表高度一致
 * 
 * @ListFooterComponent
 * 默认采用ListFooterComponent 组件
 */

import React, { Component } from 'react';
import {
    FlatList as RNFlatList,
    RefreshControl,
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import ListEmptyComponent from '../ListEmptyComponent'
import ListFooterComponent from '../ListFooterComponent'

export default class FlatList extends Component {
    state = {
        enptyComponentHeight: 0
    }
    // 底部触发
    onEndReached = () => {
        const pageSize = this.props.pageSize || 10
        const len = this.props.data.length
        if (len == 0 || len % pageSize !== 0) {
            return
        }

        if (!this.onEndReachedCalledDuringMomentum) {
            console.log("FlatList:onEndReached");
            this.props.onEndReached && this.props.onEndReached()
            this.onEndReachedCalledDuringMomentum = true;
        }
        
    }
    // 底部组件
    renderFooter = () => {
        let footer = null;
        footer = (
            <View>
                <ActivityIndicator size="small" color="#888888" />
                <Text>数据加载中…</Text>
            </View>
        )
        return footer;
    }
    render() {
        const { enptyComponentHeight } = this.state
        const {
            refreshing,
            onEndReachedThreshold,
            onRefresh
        } = this.props
        return (
            <RNFlatList
                {...this.props}
                style={[{ flex: 1 }, { ...this.props.style }]}
                keyExtractor={(item, index) => item.key + index}
                extraData={this.props}
                onLayout={e => {
                    let height = e.nativeEvent.layout.height;
                    if (this.state.enptyComponentHeight < height) {
                        this.setState({ enptyComponentHeight: height })
                    }
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"
                    />
                }
                refreshing={refreshing || false}
                onMomentumScrollBegin={() => { 
                    this.onEndReachedCalledDuringMomentum = false    
                }}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={onEndReachedThreshold || 0.1}
                ListEmptyComponent={
                    this.props.ListEmptyComponent ||
                    !this.props.refreshing &&<ListEmptyComponent
                        height={enptyComponentHeight}
                    />}
                ListFooterComponent={
                    this.props.ListEmptyComponent ||
                    <ListFooterComponent 
                        loadEnd={this.props.loadEnd}
                    />
                }
                windowSize={300}
            />
        )
    }
}

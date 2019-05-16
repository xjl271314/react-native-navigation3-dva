/**
 * SectionList 例子
 * 
 */ 
import React, { Component } from 'react';
import {
    SectionList as RNSectionList,
    RefreshControl,
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import ListEmptyComponent from '../ListEmptyComponent'
import ListFooterComponent from '../ListFooterComponent'

export default class SectionList extends Component {
    state = {
        enptyComponentHeight: 0
    }
    // 底部触发
    onEndReached = () => {
        const pageSize = this.props.pageSize || 10
        const len = this.props.sections.length
        if (len == 0 || len % pageSize !== 0) {
            return
        }

        if (!this.onEndReachedCalledDuringMomentum) {
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
            onRefresh,
            initialNumToRender
        } = this.props
        return (
            <RNSectionList
                {...this.props}
                style={[{ flex: 1 }, { ...this.props.style }]}
                keyExtractor={(item, index) => index.toString()}
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
                        hiddenFooter={this.props.hiddenFooter || false}
                        loadEnd={this.props.loadEnd}
                    />
                }
                initialNumToRender={initialNumToRender || 10}
                windowSize={300}
            />
        )
    }
}
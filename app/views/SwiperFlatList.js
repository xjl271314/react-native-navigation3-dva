import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux'
import { px2dp, ifIphoneX, isIphone } from '../libs/commont'
import { TouchableOpacity, TouchableHighlight } from '../component/MyTouchable';
import Header from '../component/MyHeader'
import commonStyle from '../libs/commonStyle'
import SwiperFlatList from '../component/SwiperFlatlist'
import { Hoc } from '../libs/hoc'

@Hoc
export default class SwiperFlatListScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: ['上海', '北京', '宁波', '杭州']
        }
    }
    componentDidMount() {
        console.log(this,222)
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            !isIphone && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    _renderItem = data => (
        <TouchableHighlight onPress={()=>{this.$Toast.show("2333"),console.log('click')}}>
            <View style={{
                height: px2dp(55),
                backgroundColor: '#ff6677',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: commonStyle.halfBorderWidth,
                borderBottomColor: '#FFF'
            }}>
                <Text style={{
                    color: '#FFF',
                    fontSize: px2dp(18)
                }}>{data.item}</Text>
            </View>
        </TouchableHighlight>
    )

    _renderQuickActions = () => {
        return (
            <View style={{
                flex: 1,
                flexDirection:'row',
                justifyContent:'flex-end',
            }}>
                <TouchableHighlight>
                    <View style={{
                        flex:1,
                        backgroundColor: '#ff0000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: px2dp(80)
                    }}>
                        <Text style={{
                            fontSize: px2dp(16),
                            color: '#FFF'
                        }}>删除</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
    render() {
        const { chatList, chatLoadEnd, isRefresh } = this.props
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <Header
                    hiddenLeft
                    navigation={this.props.navigation}
                    title="SwiperFlatListScreen"
                    style={{
                        backgroundColor: '#f5f5f5'
                    }}
                />
                <SwiperFlatList
                    data={this.state.dataSource}
                    refreshing={false}
                    hiddenFooter={true}
                    renderItem={data => this._renderItem(data)}
                    renderQuickActions={this._renderQuickActions}
                    maxSwipeDistance={80}
                    bounceFirstRowOnMount={false}
                />

            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    }
});

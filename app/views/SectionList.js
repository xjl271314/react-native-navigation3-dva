import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux'
import { px2dp, ifIphoneX, isIphone } from '../libs/commont'
import { TouchableOpacity, TouchableHighlight } from '../component/MyTouchable';
import Header from '../component/MyHeader'
import commonStyle from '../libs/commonStyle'
import SectionList from '../component/SectionList'
import { Hoc } from '../libs/hoc'

@Hoc
export default class SectionListScreen extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            !isIphone && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    _renderSectionHeader = ({ section }) => (
        <View style={{
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#ff00ff'
        }}>
            <Text style={{
                fontSize: px2dp(24),
                color:'#FFF'
            }}>{section.title}</Text>
        </View>
    )
    _renderItem = data => (
        <TouchableHighlight onPress={() => { this.$Toast.show(data.item), console.log('click') }}>
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

    render() {
        const { chatList, chatLoadEnd, isRefresh } = this.props
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <Header
                    hiddenLeft
                    navigation={this.props.navigation}
                    title="SectionListScreen"
                    style={{
                        backgroundColor: '#f5f5f5'
                    }}
                />
                <SectionList
                    sections={[
                        { title: "Title1", data: ["item1", "item2"] },
                        { title: "Title2", data: ["item3", "item4"] },
                        { title: "Title3", data: ["item5", "item6"] }
                    ]}
                    renderSectionHeader={section => this._renderSectionHeader(section)}
                    refreshing={false}
                    hiddenFooter={true}
                    renderItem={data => this._renderItem(data)}
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

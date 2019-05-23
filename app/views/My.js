import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux'
import { px2dp, ifIphoneX, isIphone, deviceH, deviceW } from '../libs/commont'
import commonStyle from '../libs/commonStyle'
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight
} from '../component/MyTouchable'
import { createAction } from '../utils'
import { StatusBarHoc } from '../libs/statusBar'
import MateriaIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import WhiteSpace from '../component/WhiteSpace'
import ListItem from '../component/ListItem'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

const Header = props => (
    <View style={{
        width: deviceW,
        height: px2dp(40),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: px2dp(15)
    }}>
        <TouchableOpacity>
            <MateriaIcon
                name="camera"
                color="#333"
                size={22}
            />
        </TouchableOpacity>
    </View>
)
const MyAvatar = props => (
    <TouchableWithoutFeedback>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: px2dp(15),
            paddingVertical: px2dp(30),
            backgroundColor: '#FFF'
        }}>
            <Image
                style={{
                    width: px2dp(60),
                    height: px2dp(60),
                    marginRight: px2dp(15),
                    borderRadius: 5
                }}
                source={require('../assets/logo.png')}
            />
            <View style={{
                flex: 1,
                alignSelf: 'flex-start'
            }}>
                <Text style={{
                    fontFamily: 'PingFangSC-Semibold',
                    fontSize: px2dp(20),
                    color: '#111',
                    marginBottom: px2dp(5)
                }}>{props.userInfo.userName}</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontFamily: 'PingFangSC-Regular',
                        color: '#999',
                        fontSize: px2dp(16)
                    }}>微信号:{props.userInfo.wxCode}</Text>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: px2dp(30)
                        }}>
                        <MateriaIcon
                            name="qrcode"
                            color="#999"
                            size={16}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: px2dp(0)
                        }}>
                        <MateriaIcon
                            name="chevron-right"
                            color="#999"
                            size={22}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

@connect(({ user }) => ({
    userInfo: user.userInfo
}))
@StatusBarHoc()
export default class My extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.initData()
    }

    initData() {
        const { dispatch } = this.props
        dispatch(createAction('user/loadUserInfo')())
    }
    render() {
        const { userInfo, dispatch } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <Header />
                <MyAvatar
                    userInfo={userInfo}
                />
                <WhiteSpace />
                <ListItem
                    thumb={<AntIcon
                        name="pay-circle-o1"
                        color="#32CD32"
                        size={22}
                    />}
                    arrow="right"
                    fullBorder
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    支付
                </ListItem>
                <WhiteSpace />
                <ListItem
                    thumb={<FeatherIcon
                        name="box"
                        color="#EE3B3B"
                        size={22}
                    />}
                    arrow="right"
                    borderLine
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    收藏
                </ListItem>
                <ListItem
                    thumb={<IoniconsIcon
                        name="ios-albums"
                        color="#6495ED"
                        size={22}
                    />}
                    arrow="right"
                    borderLine
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    相册
                </ListItem>
                <ListItem
                    thumb={<MateriaIcon
                        name="credit-card"
                        color="#436EEE"
                        size={22}
                    />}
                    arrow="right"
                    borderLine
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    卡包
                </ListItem>
                <ListItem
                    thumb={<EntypoIcon
                        name="emoji-happy"
                        color="#EE9A00"
                        size={22}
                    />}
                    arrow="right"
                    fullBorder
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    表情
                </ListItem>
                <WhiteSpace />
                <ListItem
                    thumb={<FeatherIcon
                        name="settings"
                        color="#436EEE"
                        size={22}
                    />}
                    arrow="right"
                    fullBorder
                    onPress={e => {
                        console.log(e)
                    }}
                >
                    设置
                </ListItem>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center'
    }
})

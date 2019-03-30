import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { px2dp, isIphone, deviceW } from './../services/commont'
import commonStyle from '../libs/commonStyle'
import TouchButton from '../component/TouchButton'
import Icon from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';

export default class FindArticleDetail extends React.Component {

    render() {
        const {
            onPress,
            title
        } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIcon}>
                        <Icon
                            name='chevron-thin-left'
                            size={px2dp(18)}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.headerImg}
                        source={require('../assets/header.jpg')}
                    />
                    <Text style={styles.headerTitle}>{title}</Text>
                    <View style={styles.headerMask}>
                        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}>
                            <View style={{ height: px2dp(80) }}>

                            </View>
                        </LinearGradient>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.user}>
                        <View style={styles.userIconBox}>
                            <Image
                                style={styles.userIcon}
                                source={require('../assets/user.jpg')}
                            />
                        </View>

                        <View style={styles.userInfo}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.userName}>我的朋友是梦与爱丽丝的梦境</Text>
                                <Image
                                    source={require('../assets/female.png')}
                                    style={styles.userGender}
                                />
                                <LinearGradient 
                                    colors={['#41AAE3', '#3779D4']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={{borderRadius: 50}}
                                >
                                    <View style={styles.userRank}>
                                        <Text style={styles.userRankText}>Lv10</Text>
                                    </View>
                                </LinearGradient>
                            </View>
                            <Text style={styles.dateTime}>
                                <Text>08.09 </Text>
                                12:47:36
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {

    },
    headerIcon: {
        position: 'absolute',
        top: px2dp(34),
        left: px2dp(24),
        zIndex: 99,
    },
    headerTitle: {
        position: 'absolute',
        bottom: px2dp(12),
        left: px2dp(12),
        right: px2dp(12),
        fontFamily: 'PingFang-SC-Regular',
        color: '#FFF',
        fontSize: px2dp(20),
        zIndex: 10
    },
    headerMask: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    headerImg: {
        width: deviceW,
        height: px2dp(260)
    },
    content: {
        padding: px2dp(16),
        flex: 1,
        backgroundColor: '#FFF'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIconBox: {
        borderWidth: px2dp(2),
        borderRadius: px2dp(18),
        borderColor: '#3779D4',
        marginRight: px2dp(8),
    },
    userIcon: {
        width: px2dp(32),
        height: px2dp(32),
        borderRadius: px2dp(16),
    },
    userInfo: {
        justifyContent: 'center',

    },
    userName: {
        fontFamily: 'PingFang-SC-Regular',
        color: '#3779D4',
        fontSize: px2dp(12),
        marginRight: px2dp(5)
    },
    userGender: {
        width: px2dp(16),
        height: px2dp(16),
        marginRight: px2dp(6.5)
    },
    dateTime: {
        fontFamily: 'PingFang-SC-Light',
        color: '#999',
        fontSize: px2dp(10),
    },
    userRankBox: {

    },
    userRank: {
        paddingHorizontal: px2dp(7.5),
    },
    userRankText: {
        fontFamily: 'PingFang-SC-Regular',
        color: '#FFF',
        fontSize: px2dp(10),
        textAlign:'center'
    }
})

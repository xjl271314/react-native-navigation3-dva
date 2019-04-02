import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { px2dp } from './../libs/commont'
import commonStyle from '../libs/commonStyle'
import TouchButton from '../component/TouchButton'

export default class FindHYList extends React.Component {
    render() {
        const { onPress, title, date, scan } = this.props;
        return (
            <View>
                <TouchButton onPress={onPress}>
                    <View style={styles.container}>
                        <Image
                            style={styles.img}
                            source={require('./../assets/bb.jpg')}
                        />
                        <View style={styles.right}>
                            <Text style={[styles.title]}>
                                {title}
                            </Text>
                            <View style={styles.footer}>
                                <View style={styles.item}>
                                    <Image
                                        style={styles.icon}
                                        source={require('./../assets/release_time.png')}
                                    />
                                    <Text style={styles.tipText}>{date}</Text>
                                </View>
                                <View style={styles.item}>
                                    <Image
                                        style={styles.icon}
                                        source={require('./../assets/article_read.png')}
                                    />
                                    <Text style={styles.tipText}>{scan}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: px2dp(16),
        paddingVertical: px2dp(12),
        backgroundColor: '#FFF',
        borderBottomColor: commonStyle.normalBorderColor,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'PingFang-SC-Medium',
        color: '#333',
        fontSize: px2dp(14),
        marginBottom: px2dp(18),
    },
    img: {
        width: px2dp(108),
        height: px2dp(76),
        borderRadius: px2dp(2),
    },
    right: {
        flex: 1,
        paddingLeft: px2dp(16),
        alignSelf: 'flex-start',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: px2dp(17),
        height: px2dp(17),
        marginRight: px2dp(6),
    },
    tipText: {
        fontFamily: 'PingFang-SC-Regular',
        color: '#BBB',
        fontSize: px2dp(10),
    },
})

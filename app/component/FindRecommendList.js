import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    Image
} from 'react-native'
import { px2dp, isIphone } from './../libs/commont'
import commonStyle from '../libs/commonStyle'
import TouchButton from '../component/TouchButton'

export default class FindRecommendList extends React.Component {
    render() {
        const {
            title,
            containerStyle,
            titleStyle,
            subTitle,
            subTitleStyle,
            from,
            date,
            scan,
            onPress
        } = this.props;

        const children = (
            <View style={[styles.container, containerStyle ? containerStyle : '']}>
                <View>
                    <Text style={[styles.title, titleStyle ? titleStyle : '']}>
                        {title}
                    </Text>
                    <Text style={[styles.subTitle, subTitleStyle ? subTitleStyle : '']}>
                        {subTitle}
                    </Text>
                    <Image
                        style={styles.img}
                        source={require('./../assets/aa.jpg')}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.tipText}>{from}</Text>
                        <View style={styles.tips}>
                            <View style={[styles.item, { marginRight: px2dp(21) }]}>
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
            </View>
        )
        return (
            <View>
                <TouchButton onPress={onPress}>
                    {children}
                </TouchButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: px2dp(16),
        paddingVertical: px2dp(8),
        backgroundColor: '#FFF',
        borderBottomColor: commonStyle.normalBorderColor,
        borderBottomWidth: 0.5,
    },
    title: {
        fontFamily: 'PingFang-SC-Medium',
        color: '#333',
        fontSize: px2dp(14),
        marginBottom: px2dp(8),
    },
    subTitle: {
        fontFamily: 'PingFang-SC-Regular',
        color: '#999',
        fontSize: px2dp(10),
    },
    img: {
        width: px2dp(343),
        height: px2dp(180),
        marginVertical: px2dp(6),
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tips: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    tipText: {
        fontFamily: 'PingFang-SC-Regular',
        color: '#BBB',
        fontSize: px2dp(10),
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: px2dp(17),
        height: px2dp(17),
        marginRight: px2dp(6),
    }
})

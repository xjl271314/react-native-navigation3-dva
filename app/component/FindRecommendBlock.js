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
import { px2dp, isIphone,deviceW } from './../libs/commont'
import commonStyle from '../libs/commonStyle'
import TouchButton from '../component/TouchButton'

export default class FindRecommendBlock extends React.Component {
    render() {
        const {
            data,
            title,
            containerStyle,
            titleStyle,
            date,
            scan,
            onPress
        } = this.props;

        const children = data.map((item, index) => (
            <TouchButton onPress={onPress}
                key={index}
            >
                <View style={[styles.box, { borderRightWidth: index == 0 ? 0.5 : 0 }]} key={index}>
                    <Text style={[styles.title, titleStyle ? titleStyle : '']}>
                        {title}
                    </Text>
                    <Image
                        style={styles.img}
                        source={require('./../assets/bb.jpg')}
                    />
                    <View style={styles.footer}>
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
            </TouchButton>
        ))
        return (
            <View style={[styles.container, containerStyle ? containerStyle : '']}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    box: {
        paddingHorizontal: px2dp(16),
        paddingVertical: px2dp(10),
        width: 0.5*deviceW,
        borderWidth: 0,
        borderColor: commonStyle.normalBorderColor,
    },
    title: {
        fontFamily: 'PingFang-SC-Medium',
        color: '#333',
        fontSize: px2dp(14),
        marginBottom: px2dp(10),
    },
    img: {
        width: px2dp(155),
        height: px2dp(84),
        borderRadius: px2dp(2),
        marginBottom: px2dp(8)
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

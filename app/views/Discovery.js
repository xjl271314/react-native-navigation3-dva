import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StatusBar,
    Switch,
    Image,
    Button,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
import FindRecommendList from '../component/FindRecommendList'
import FindRecommendBlock from '../component/FindRecommendBlock'
import FindHYList from '../component/FindHYList'
import FindMGTXList from '../component/FindMGTXList'
import FindArticleDetail from '../component/FindArticleDetail'
import { px2dp, ifIphoneX } from '../services/commont'


class BackButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={_ => this.props.navigation.goBack()}>
                <Icon
                    style={{ paddingLeft: 8, color: '#FFF' }}
                    name="chevron-thin-left"
                    size={18}
                />
            </TouchableOpacity>
        );
    }
}

export default class Discovery extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Discovery',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <Button
                    onPress={navigation.getParam('rightButtonClick')}
                    title="Info"
                    color="#fff"
                />
            ),
        }
    };
    componentDidMount = () => {
      this.props.navigation.setParams({
        rightButtonClick:this._rightClick
      })
    }
    
    _rightClick=()=>{
        alert('click right button')
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>   
            <ScrollView style={styles.container}>
                <StatusBar barStyle="light-content" />
                {/* 发现页面-推荐板块1 */}
                <FindRecommendList
                    title="在E3《赛博朋克2077》闭门演示之后与CDPR的一次简短访谈"
                    subTitle="Writing A Good Headline For Your Advertisement"
                    from="黑鸦社"
                    date="04.09"
                    scan="65"
                    onPress={() => { }}
                />
                {/* 发现页面-推荐板块2 */}
                <FindRecommendBlock
                    data={[1, 2]}
                    title="《狱门山物语》：难得一见的高品质和风STG"
                    date="2小时前"
                    scan="65"
                    onPress={(e) => { console.log(e) }}
                />
                {/* 发现页面-黑鸭社 */}
                <FindHYList
                    title="【中古放映机】禁忌的血亲之恋，冬目景与《羊之歌》"
                    date="2小时前"
                    scan="65"
                    onPress={(e) => { console.log(e) }}
                />
                {/* 发现页面-萌猪突袭 */}
                <FindMGTXList
                    title="Characteristics Of A Successful Advertisement"
                    subTitle="Writing A Good Headline For Your Advertisement"
                    date="04.09"
                    scan="65"
                    onPress={() => { }}
                />
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>返回</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            </SafeAreaView> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        flex: 1
    },
    button: {
        marginTop: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'blue'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
    }
});

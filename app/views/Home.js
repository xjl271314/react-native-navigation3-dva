import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { px2dp, ifIphoneX, isIphone } from '../services/commont'
import Header from '../component/MyHeader'
import { TouchableOpacity } from '../component/MyTouchable';
import Icon from 'react-native-vector-icons/Ionicons'
import FindRecommendList from '../component/FindRecommendList'
import { connect } from 'react-redux'

export default class Home extends Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      !isIphone && StatusBar.setBackgroundColor('#6a51ae');
    });
    // this.props.dispatch({
    //   type:'app/test'
    // })
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <Header
          hiddenLeft
          noborder
          title="微信"
          style={{
            backgroundColor: '#f5f5f5'
          }}
          rightComponent={
            <TouchableOpacity>
              <Icon
                name="ios-add-circle-outline"
                color="#333"
                size={px2dp(24)}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#ecf0f1"
          />

          {/*<FindRecommendBlock
              data={[1,2]}
              title="《狱门山物语》：难得一见的高品质和风STG"
              date="2小时前"
              scan="65"
              onPress={(e)=>{console.log(e)}}
          />
           <FindHYList 
              title="【中古放映机】禁忌的血亲之恋，冬目景与《羊之歌》"
              date="2小时前"
              scan="65"
              onPress={(e)=>{console.log(e)}}
          />
          <FindMGTXList 
              title="Characteristics Of A Successful Advertisement"
              subTitle="Writing A Good Headline For Your Advertisement" 
              date="04.09"
              scan="65"
              onPress={()=>{}}
          />
          <FindArticleDetail
            title="为何选择3快攻？hasu讲述冬季赛的备战经历为何选择3快攻？"
            date="2小时前"
            scan="65"
            navigation={this.props.navigation}
            onPress={(e) => { console.log(e) }}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('Discovery', {
                id: 1111,
                name: '哈哈哈'
              })
            }}
          >
            <View style={styles.button}>
              <Text style={styles.text}>点击前往发现页</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.push('Login', {
                account: 'a123456',
                password: '222333'
              })
            }}
          >
            <View style={styles.button}>
              <Text style={styles.text}>点击显示登录页</Text>
            </View>
          </TouchableWithoutFeedback> */}



          <FindRecommendList
            title="在E3《赛博朋克2077》闭门演示之后与CDPR的一次简短访谈"
            subTitle="Writing A Good Headline For Your Advertisement"
            from="黑鸦社"
            date="04.09"
            scan="65"
            onPress={() => { }}
          />
          <Text></Text>
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
    backgroundColor: 'red'
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import { createAction } from '../utils'
import { connect } from 'react-redux'
import { px2dp, ifIphoneX, isIphone } from '../libs/commont'
import { TouchableOpacity, TouchableHighlight } from '../component/MyTouchable';
import FlatList from '../component/FlatList'
import TextInput from '../component/TextInput'
import Header from '../component/MyHeader'
import Ellipsis from '../component/Ellipsis'
import Icon from 'react-native-vector-icons/Ionicons'
import commonStyle from '../libs/commonStyle'
import Badge from '../component/Badge'
import FindRecommendBlock from '../component/FindRecommendBlock'

@connect(({ app, home }) => ({
  login: app.login,
  chatList: home.chatList,
  currentPage: home.chatPage,
  pageSize: home.chatPageSize,
  isLoading: home.isLoading,
  chatLoadEnd: home.chatLoadEnd,
  isRefresh: home.isRefresh
}))
export default class Home extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      !isIphone && StatusBar.setBackgroundColor('#6a51ae');
    });
    // 获取聊天列表
    this.props.dispatch(createAction('home/loadChatList')(
      {
        currentPage: 0,
        pageSize: this.props.pageSize
      }
    ))
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  onEndReached = () => {
    const {
      currentPage,
      pageSize
    } = this.props
    this.props.dispatch(createAction('home/loadChatList')(
      {
        currentPage,
        pageSize
      }
    ))
  }
  onRefresh = () => {
    this.props.dispatch(createAction('home/refreshChatList')())
  }

  itemPress = (e) => {
    console.log(e)
  }

  render() {
    const { chatList, chatLoadEnd, isRefresh } = this.props
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
        <FindRecommendBlock
          data={[1, 2]}
          title="《狱门山物语》：难得一见的高品质和风STG"
          date="2小时前"
          scan="65"
          onPress={(e) => { console.log(e) }}
        />
        <FlatList
          style={styles.container}
          data={chatList}
          refreshing={isRefresh}
          renderItem={item => <ChatItem dataSource={item} onPress={this.itemPress} />}
          onRefresh={this.onRefresh}
          loadEnd={chatLoadEnd}
          onEndReached={this.onEndReached}
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



        {/* <FindRecommendList
            title="在E3《赛博朋克2077》闭门演示之后与CDPR的一次简短访谈"
            subTitle="Writing A Good Headline For Your Advertisement"
            from="黑鸦社"
            date="04.09"
            scan="65"
            onPress={() => { }}
          /> */}

      </SafeAreaView>
    )
  }
}


const ChatItem = props => {
  const { index, item, separators } = props.dataSource
  return (
    <TouchableHighlight
      onPress={props.onPress.bind(this, { index, item })}
    >
      <View style={{
        flexDirection: 'row',
        paddingTop: px2dp(15),
        paddingLeft: px2dp(20),
        alignItems: 'flex-start'
      }}>
        <View style={{ borderRadius: 3, }}>
          <ImageBackground
            source={{ uri: item.img }}
            style={{
              width: px2dp(40),
              height: px2dp(40),
              marginRight: px2dp(15)
            }}
            imageStyle={{ borderRadius: 3 }}
          >
            <Badge
              count={9}
              size="small"
            />
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            paddingRight: px2dp(15),
            paddingBottom: px2dp(15),
            borderBottomColor: commonStyle.normalBorderColor,
            borderBottomWidth: commonStyle.halfBorderWidth
          }}
        >
          <View style={commonStyle.flexRowBetween}>
            <Ellipsis style={{
              fontFamily: 'PingFangSC-Medium',
              marginBottom: px2dp(6),
              color: '#333'
            }}>{item.title}</Ellipsis>
            <Text style={{
              fontSize: px2dp(12),
              color: '#999'
            }}>{item.time}</Text>
          </View>
          <Ellipsis style={{
            paddingRight: px2dp(30)
          }}>{item.desc}</Ellipsis>
        </View>


      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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

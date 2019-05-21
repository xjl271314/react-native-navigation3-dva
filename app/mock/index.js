import Mock from 'mockjs' // 引入mockjs
import apiConfig from '../config/apiConfig'
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// 是否模拟数据
const BaseUrl = apiConfig.mock ? apiConfig.devUrl : apiConfig.rootUrl
const FetchUrl = BaseUrl + apiConfig.version + apiConfig.prefix

// 模拟首页获取聊天记录列表
Mock.mock(FetchUrl + 'index/chatList', {
    'code': 1,
    'data|10': [{
        'key': String(Random.natural()),
        'img': Random.image(40 * 40, '#02adea', 'icon'),
        'title': Random.name(),
        'desc': Random.cparagraph(),
        'time': Random.date('HH:mm'),
        'news': Random.natural(0, 99)
    }]
})

// 模拟app获取tabs
Mock.mock(FetchUrl + 'app/appTabs', {
    'code': 1,
    'data': [{
        'key': String(Random.natural()),
        'id': 1
    }, {
        'key': String(Random.natural()),
        'id': 2
    }, {
        'key': String(Random.natural()),
        'id': 3
    }, {
        'key': String(Random.natural()),
        'id': 4
    }]
})
import io from './io'

// 获取首页的消息列表
export function getUserInfo(data) {
  let config = {
    url: 'user/getUserInfo',
    data: data
  }

  return io.get(config)
}


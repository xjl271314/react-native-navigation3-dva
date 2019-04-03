import io from './io'

// 获取首页的消息列表
export function loadChatList(data) {
  let config = {
    url: 'index/chatList',
    data: data
  }

  return io.get(config)
}


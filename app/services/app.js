import io from './io'

// 获取首页的消息列表
export function getAppTabs(data) {
  let config = {
    url: 'app/appTabs',
    data: data
  }

  return io.get(config)
}


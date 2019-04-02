import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import {
  loadChatList
} from '../services/home'

export default {
  namespace: 'home',
  state: {
    chatList:[]
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    // 加载首页聊天列表
    *loadChatList(action, { call, put }) {
        const result = yield call(loadChatList)
        console.log(result)
        // yield put(createAction('updateState')({ login, loading: false }))
    }
  },
  subscriptions: {
    
  },
}

import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import {
  loadChatList
} from '../services/home'

export default {
  namespace: 'home',
  state: {
    chatList: [],
    chatPage: 0,
    chatPageSize: 10,
    chatLoadEnd: false,
    isLoading: true,
    isRefresh:true
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    // 加载首页聊天列表
    *loadChatList(action, { call, put, select }) {
      let currentPage = yield select(state => state.home['chatPage'])
      let chatList = yield select(state => state.home['chatList'])
      if (currentPage >= 4) {
        yield put(createAction('updateState')({ chatLoadEnd: true }))
        return
      }
      const result = yield call(loadChatList)
      yield put(createAction('updateState')({ isLoading: true }))
      if (result.code == 1) {
        currentPage++
        yield put(createAction('updateState')({
          chatList: [...chatList, ...result.data],
          chatPage: currentPage,
          isLoading: false,
          isRefresh:false
        }))
      }
      else {
        console.error(result.message)
      }
    },
    *refreshChatList(action, { call, put, select }) {
      const result = yield call(loadChatList)
      yield put(createAction('updateState')({ isLoading: true,chatLoadEnd:false,isRefresh:true }))
      if (result.code == 1) {
        yield put(createAction('updateState')({
          chatList: [...result.data],
          chatPage: 1,
          isLoading: false,
          isRefresh:false
        }))
      }
      else {
        console.error(result.message)
      }
    },
  },
  subscriptions: {

  },
}

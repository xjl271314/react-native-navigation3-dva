import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import {
  loadChatList
} from '../services/home'

export default {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
     *loadUserInfo(action,{call,put}){

     }
  },
  subscriptions: {

  },
}

import { createAction, NavigationActions, Storage } from '../utils'
import {
  getUserInfo
} from '../services/user'

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
      const result = yield call(getUserInfo)
      if (result && result.code == 1) {
        yield put(createAction('updateState')({ userInfo: result.data }))
      }
     }
  },
  subscriptions: {

  },
}

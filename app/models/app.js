import { createAction, NavigationActions, Storage } from '../utils'
import * as authService from '../services/auth'
import {
  getAppTabs
} from '../services/app'
export default {
  namespace: 'app',
  state: {
    appLogin: false,
    loading: true,
    fetching: false,
    tabs: []
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false)
      yield put(createAction('updateState')({ appLogin: login, loading: false }))
      if (!login) {
        yield put(NavigationActions.navigate({
          routeName: 'Login'
        }))
      }
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }))
      const login = yield call(authService.login, payload)
      if (login) {
        yield put(NavigationActions.back())
      }
      yield put(createAction('updateState')({ login, fetching: false }))
      Storage.set('login', login)
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false)
      yield put(createAction('updateState')({ login: false }))
    },
    *test(action, { call, put }) {
      console.log(action)
    },
    *getTabs(action, { call, put }) {
      const result = yield call(getAppTabs)
      if (result.code == 1) {
        yield put(createAction('updateState')({
          tabs: result.data
        }))
      }
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}

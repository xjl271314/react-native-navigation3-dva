import React from 'react'
import { AppRegistry } from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import { persistStore, autoRehydrate } from 'redux-persist'
import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import { name as appName } from '../app.json';
// mock环境加载
import './mock'

// 加载所有models
import appModel from './models/app'
import homeModel from './models/home'

const app = dva({
  initialState: {},
  models: [
    appModel,
    homeModel
  ],
  extraReducers: { router: routerReducer},
  onAction: [routerMiddleware],
  // extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)
persistStore(app.getStore(), { storage: AsyncStorage })
AppRegistry.registerComponent(appName,()=> App)

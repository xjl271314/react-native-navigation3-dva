import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer,logger } from './router'
import { name as appName } from '../app.json'
import { createStore } from 'redux';
import { persistStore, persistReducer as persistReducerFn } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

// mock环境加载
import './mock'

// 加载所有models
import appModel from './models/app'
import userModel from './models/user'
import homeModel from './models/home'
import navigatorModel from './models/navigator'

//配置persit
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}


const app = dva({
  initialState: {},
  models: [
    appModel,
    homeModel,
    userModel,
    navigatorModel
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const persistReducer = persistReducerFn(persistConfig, routerReducer)
export const store = createStore(persistReducer)
export const persistor = persistStore(store)

// 目前这种配置redux-persit的方案还未经过测试
// 配置redux-persit 4.x版本的可以在网上查找
const App = app.start(
  <PersistGate loading={null} persistor={persistor}>
    <Router />
  </PersistGate>
)

AppRegistry.registerComponent(appName, () => App)

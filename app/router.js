import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigator from './navigation'

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  state => state.router,
  'root'
)

export const logger = store => next => action => {
  console.log('before',store.getState())
  if( typeof action === 'function'){
    console.log('dispatch a function')
  }
  else {
    console.log('dispatching',action)
  }
  const result = next(action)
  console.log('nextState',store.getState())
}

const App = createReduxContainer(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
export default class Router extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    // 判断是否登录

    this.props.dispatch({
      type:"app/loadStorage"
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    
    return <App dispatch={dispatch} state={router} />
  }
}


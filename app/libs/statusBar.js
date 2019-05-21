import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { isIphone } from './commont'
import { StatusBar } from 'react-native'

//添加属性的导航栏HOC
export const StatusBarHoc = (theme = 'dark-content',color = '#6a51ae') => WrappedComponent => {
    return class extends WrappedComponent {
        constructor(props) {
            super(props)
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        }

        componentDidMount() {
            this._navListener = this.props.navigation.addListener('didFocus', () => {
                StatusBar.setBarStyle(theme);
                !isIphone && StatusBar.setBackgroundColor(color);
            })
        }

        componentWillUnmount() {
            this._navListener.remove();
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}

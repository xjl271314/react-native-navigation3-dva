import React, { Component } from 'react'
import { View, Platform, Dimensions } from 'react-native'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Toast from 'react-native-root-toast'

export let screenW = Dimensions.get('window').width
export let screenH = Dimensions.get('window').height


/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
// iPhoneX
const X_WIDTH = 375
const X_HEIGHT = 812

export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((screenH >= X_HEIGHT && screenW >= X_WIDTH) ||
            (screenH >= X_WIDTH && screenW >= X_HEIGHT))
    )
}

export function isIphone() {
    return Platform.OS === 'ios' ? true : false
}

export const Hoc = WrappedComponent => {
    return class extends WrappedComponent {
        static navigationOptions = {
            header: null
        }

        constructor(props) {
            super(props)
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        }

        $Toast = Toast

        $isIphoneX = isIphoneX()

        $isIphone = isIphone()

        $goBack() {
            this.props.navigation.state.params &&
                this.props.navigation.state.params.__refresh &&
                this.props.navigation.state.params.__refresh()
            this.props.navigation.goBack()
        }

        render() {
            return super.render()
        }
    }
}

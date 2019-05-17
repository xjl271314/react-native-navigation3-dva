import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Toast from 'react-native-root-toast'
import { isIphoneX ,isIphone } from './commont'

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

import React,{ Component } from "react";
import {
    TouchableWithoutFeedback as RNTouchableWithoutFeedback,
    TouchableHighlight as RNTouchableHighlight,
    TouchableOpacity as RNTouchableOpacity
} from "react-native";
 
export class TouchableWithoutFeedback extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
        this.lastClickTime=0
    }
 
    onPress () {
        const clickTime = Date.now()
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 450) {  //450的时间可以延长，根据需要改变
            this.lastClickTime = clickTime
            if(this.props.onPress){
                this.props.onPress()
            }else{
                return ''
            }
 
        }
    }
 
    render() {
        return (
            <RNTouchableWithoutFeedback
                onPress={this.onPress.bind(this)}
                activeOpacity={this.props.activeOpacity || 0.85}
                style={this.props.style}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </RNTouchableWithoutFeedback>)
    }
}

export class TouchableOpacity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
        this.lastClickTime=0
    }
 
    onPress () {
        const clickTime = Date.now()
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 450) {  //450的时间可以延长，根据需要改变
            this.lastClickTime = clickTime
            if(this.props.onPress){
                this.props.onPress()
            }else{
                return ''
            }
 
        }
    }
 
    render() {
        return (
            <RNTouchableOpacity
                onPress={this.onPress.bind(this)}
                activeOpacity={this.props.activeOpacity || 0.85}
                style={this.props.style}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </RNTouchableOpacity>)
    }
}


export class TouchableHighlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
        this.lastClickTime=0
    }
 
    onPress () {
        const clickTime = Date.now()
        if (!this.lastClickTime || Math.abs(this.lastClickTime - clickTime) > 450) {  //450的时间可以延长，根据需要改变
            this.lastClickTime = clickTime
            if(this.props.onPress){
                this.props.onPress()
            }else{
                return ''
            }
 
        }
    }
 
    render() {
        return (
            <RNTouchableHighlight
                {...this.props}
                onPress={this.onPress.bind(this)}
                activeOpacity={this.props.activeOpacity || 0.85}
                style={this.props.style}
                disabled={this.props.disabled}
                
            >
                {this.props.children}
            </RNTouchableHighlight>)
    }
}
 
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'
import { StatusBarHoc } from '../libs/statusBar'
import commonStyle from '../libs/commonStyle'
import MyHeader from '../component/MyHeader'

@StatusBarHoc()
export default class WebViewPage extends Component {
    constructor(props) {
        super(props)
        this.state={
            title:''
        }
    }
    onNavigationStateChange(pageState){
        this.setState({
            title:pageState.title,
            canGoBack:pageState.canGoBack,
        })
    }
    leftClick = ()=>{
        if(this.state.canGoBack){
            this.webView.goBack();
        }
        else{
            this.props.navigation.goBack()
        }
    }
    render() {
        const { title } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <MyHeader 
                    leftClick={this.leftClick}
                    hiddenLeft={!this.state.canGoBack}
                    navigation={this.props.navigation}
                    title={title}
                />
                <WebView
                    ref={node => this.webView = node}
                    startInLoadingState={true}//初次加载显示loading
                    onNavigationStateChange={pageState => this.onNavigationStateChange(pageState)}
                    source={{ uri: 'https://h5.sharegoodsmall.com/spike' }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

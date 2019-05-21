/**
 * created by 许将龙  2019-05-21
 * 
 * Modal组件封装
 * 
 */

import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet,
    Modal
} from 'react-native'
import commonStyle from '../../libs/commonStyle'
import { px2dp } from '../../libs/commont';
import { TouchableOpacity } from '../MyTouchable'
const Modal = (props) => {
    return (
        <Modal
            {...props}
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => props.close()}
        >
            <TouchableOpacity style={styles.container}>
                {props.children}
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems: 'center'
    }
})
export default Modal 

// 公共文件变量和样式  2019-3-29
import {
    PixelRatio
} from 'react-native'
module.exports={
    mainColor:'#f5f5f5',//默认的背景色
    primaryColor:'#179B16',//正常的主色调
    disabledColor:'#9ED99D',//被静止的时候的颜色
    underlayColor:'#eee',    //TouchableHighlight触摸底色 color
    activeOpacity:0.9,          //TouchableHighlight透明度 Number,
    normalBorderColor:'#EEE',
    halfBorderWidth:1 / PixelRatio.get(), //1d
    norderBorderWidth:1,
    textInputAnimatedColor:'#52c41a',//textInput Focus borderColor
    placeholderColor:'#ccc',
    normalInputBorderColor:'#ccc',
    whiteSpaceDefaultColor:'#f5f5f5',//默认的占位view背景色
    flexRowBetween:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fullBorderLine:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        borderBottomColor: '#EEE',
        borderBottomWidth:1 / PixelRatio.get() ,
    }
}

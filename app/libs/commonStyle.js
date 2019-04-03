
// 公共文件变量和样式  2019-3-29
import {
    PixelRatio
} from 'react-native'
module.exports={
    mainColor:'#f5f5f5',//默认的背景色
    underlayColor:'#eee',    //TouchableHighlight触摸底色 color
    activeOpacity:0.9,          //TouchableHighlight透明度 Number,
    normalBorderColor:'#EEE',
    halfBorderWidth:1 / PixelRatio.get(), //1dp
    flexRowBetween:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

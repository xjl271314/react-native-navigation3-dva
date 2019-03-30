
// 公共文件变量和样式  2019-3-29
import {
    PixelRatio
} from 'react-native'
module.exports={
    underlayColor:'#1693F7',    //TouchableHighlight触摸底色 color
    activeOpacity:0.9,          //TouchableHighlight透明度 Number,
    normalBorderColor:'#E5E5E5',
    halfBorderWidth:1 / PixelRatio.get() //1dp
    
}

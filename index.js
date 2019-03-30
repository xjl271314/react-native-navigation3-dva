import './app/index'
import { YellowBox } from 'react-native'

// 注释一些在开发截断会弹出的错误
YellowBox.ignoreWarnings([
    'Require cycle:',
    'Warning: Expected instance props to match',
    'Warning: ViewPagerAndroid has been extracted from react-native core and will be removed in a future release.',
    'Warning: Slider has been extracted from react-native core and will be removed in a future release.',
    'Warning: Async Storage has been extracted from react-native core and will be removed in a future release.'
]);
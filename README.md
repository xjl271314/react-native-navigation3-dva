## react-native-react-navigation3.x-dva 模板


## 开发环境

#### 接口模拟:

1.采用easy mock 形式进行模拟 传送门https://www.easy-mock.com/ 

如果直接使用easy-mock的官网调用api 服务器会经常挂掉 

建议自己fork一下环境到自己的本地服务器  

本地部署教程 https://github.com/easy-mock/easy-mock/blob/dev/README.zh-CN.md

2.采用mock.js自己编写

本项目暂时使用mockjs自己编写

#### async storage 
采用 @react-native-community/async-storage

react-native link @react-native-community/async-storage

Async Storage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/async-storage' instead of 'react-native'


## 注意

图片命名的时候不要重名,不然iOS打包的时候会报错

ios开发真机调试的话 如遇无法连接chrome debug问题

请修改Libraries——>RCTWebScoket.xcodeproj文件下的RCTWebScoketExecutor以及RCTBundleURLProvider.m文件  修改localhost为本机ip 192.168.x.x

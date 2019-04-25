//
//  BTEventEmitter.m
//  rnBaseApp
//
//  Created by 许将龙 on 2019/4/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "BTEventEmitter.h"
#import "RNShowContactsModel.h" //获取系统通讯录

@implementation BTEventEmitter

RCT_EXPORT_MODULE();//必要导出宏

#pragma mark -返回处理后的字符串
RCT_EXPORT_METHOD(NativePrintStr:(NSString *)text callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"从react-native端接受到的数据%@",text);
  
  NSString *callbackData = text; //准备回调回去的数据
  
  callback(@[[NSNull null],callbackData]);
}


#pragma mark -展示系统通讯录页面
RCT_REMAP_METHOD(showContacts,
                 showContactsResolveBlock:(RCTPromiseResolveBlock)resolveBlock
                 showContactsRejectBlock:(RCTPromiseRejectBlock)rejectBlock){
 NSLog(@"准备调用系统通讯录方法@");
  

}


@end

//
//  BTEventEmitter.m
//  rnBaseApp
//
//  Created by 许将龙 on 2019/4/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "BTEventEmitter.h"

@implementation BTEventEmitter

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(NativePrintStr:(NSString *)text callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"从react-native端接受到的数据%@",text);
  
  NSString *callbackData = text; //准备回调回去的数据
  
  callback(@[[NSNull null],callbackData]);
}

@end

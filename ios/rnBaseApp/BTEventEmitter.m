//
//  BTEventEmitter.m
//  rnBaseApp
//
//  Created by 许将龙 on 2019/4/15.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "BTEventEmitter.h"

@implementation BTEventEmitter

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(NativePrintStr:(NSString *)text){
  NSLog(@"接收传过来的NSString+NSString: %@", text);
}

@end

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

RCT_EXPORT_MODULE();

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
  RNShowContactsModel *model = [[RNShowContactsModel alloc] init];
  model.object = [[ShowContactsResultModel alloc] init];
  dispatch_sync(dispatch_get_main_queue(), ^{
    [[BTDeviceTools sharedInstance] jumpSystemContactsPageWithSelectContactBlock:^(ContactEntity *contactModel) {
      model.object.tel = contactModel.tel;
      model.object.name = contactModel.name;
      resolveBlock([model.object toDictionary]);
    } notAllowContactBlock:^{
      //弹框提醒用户去开启权限
      NSMutableDictionary *userInfo = [[NSMutableDictionary alloc] init];
      userInfo[@"type"] = @"2";
      [BTRouter openURL:Router_URL_Common_NotiAlert withUserInfo:userInfo completion:nil];
    }];
  });
}
@end

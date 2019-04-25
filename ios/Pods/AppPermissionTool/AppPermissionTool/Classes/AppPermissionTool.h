//
//  AppPermissionTool.h
//  AKCar
//
//  Created by 周重阳 on 16/7/27.
//  Copyright © 2016年 AK. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void(^HandlePermissionBlock)(BOOL granted);
typedef void(^HandlerContactBlock)(BOOL granted);

@interface AppPermissionTool : NSObject

+ (void)requestAccessPermissionForRecord:(HandlePermissionBlock)block;
+ (void)requestAccessPermissionForContact:(HandlePermissionBlock)block;
+ (void)requestAccessPermissionForAlbum:(HandlePermissionBlock)block;
+ (void)requestAccessPermissionForCamera:(HandlePermissionBlock)block;
- (void)requestAceessPermissionForLocation:(HandlePermissionBlock)block;
+ (NSError *)requestAceessPermissionForLocalAuthentication;
+ (NSMutableArray*)loadSystemAddress;
//跳转定位设置
+ (void)gotoSystemLocationSetting;
//跳转通讯录设置
+ (void)gotoSystemAddressSetting;
//跳转相机权限设置
+ (void)toSetCameraAuthority;
//跳转录音麦克风设置
+ (void)toSetRecordAuthority;

@end

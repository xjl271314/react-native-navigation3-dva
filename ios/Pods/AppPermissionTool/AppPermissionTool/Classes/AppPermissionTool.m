//
//  AppPermissionTool.m
//  AKCar
//
//  Created by 周重阳 on 16/7/27.
//  Copyright © 2016年 AK. All rights reserved.
//

#import "AppPermissionTool.h"
#import <AddressBook/AddressBook.h>
#import <AVFoundation/AVFoundation.h>
#import <AssetsLibrary/AssetsLibrary.h>
#import "TKAddressBook.h"
#import "BTLog.h"
#import <CoreLocation/CoreLocation.h>
#import <LocalAuthentication/LocalAuthentication.h>

@interface AppPermissionTool()<CLLocationManagerDelegate>

@property(nonatomic,strong)CLLocationManager *locationManager;
@property(nonatomic,strong)HandlePermissionBlock locationStatusBlcok;
@property(nonatomic,assign)BOOL isLocationPermissionGranted;
@property(nonatomic,assign)BOOL hasRequestLocationPermission;

@end

@implementation AppPermissionTool

+ (void)requestAccessPermissionForRecord:(HandlePermissionBlock)block{
    AVAudioSession *session = [AVAudioSession sharedInstance];
    if ([session respondsToSelector:@selector(requestRecordPermission:)]) {
        [session performSelector:@selector(requestRecordPermission:) withObject:^(BOOL granted) {
            BT_dispatch_main_sync_safe(^{
                if (block) {
                    block(granted);
                }
            });
        }];
    }
}

+ (void)requestAccessPermissionForContact:(HandlePermissionBlock)block{
    if ([[UIDevice currentDevice].systemVersion floatValue] >= 6.0)
    {
        ABAddressBookRef addressBooks =  ABAddressBookCreateWithOptions(NULL, NULL);
        ABAddressBookRequestAccessWithCompletion(addressBooks, ^(bool granted, CFErrorRef error){
            BT_dispatch_main_sync_safe(^{
                if (block) {
                    block(granted);
                }
            });
        });
    }
}

+ (void)requestAccessPermissionForAlbum:(HandlePermissionBlock)block{
//    if ([PHPhotoLibrary authorizationStatus] == PHAuthorizationStatusNotDetermined) {
//        
//        [PHPhotoLibrary requestAuthorization:^(PHAuthorizationStatus status) {
//            
//            if (status == PHAuthorizationStatusAuthorized) {
//                
//                // TODO:...
//            }
//        }];
//    }
        ALAssetsLibrary *assetsLibrary = [[ALAssetsLibrary alloc] init];
        [assetsLibrary enumerateGroupsWithTypes:ALAssetsGroupAll usingBlock:^(ALAssetsGroup *group, BOOL *stop) {
            if (*stop) {
                BT_dispatch_main_sync_safe(^{
                    if (block) {
                        block(YES);
                    }
                });
                // TODO:...
                return;
            }
            *stop = TRUE;//不能省略
        } failureBlock:^(NSError *error) {
            BT_dispatch_main_sync_safe(^{
                if (block) {
                    block(NO);
                }
            });
        }];
}

+ (void)requestAccessPermissionForCamera:(HandlePermissionBlock)block{
    NSString *mediaType = AVMediaTypeVideo;
    [AVCaptureDevice requestAccessForMediaType:mediaType completionHandler:^(BOOL granted) {
        BT_dispatch_main_sync_safe(^{
            if (block) {
                block(granted);
            }
        });
    }];
}



- (void)requestAceessPermissionForLocation:(HandlePermissionBlock)block{
    self.locationStatusBlcok = block;
    if (self.hasRequestLocationPermission) {
        block(self.isLocationPermissionGranted);
    }else if ([self.locationManager respondsToSelector:@selector(requestWhenInUseAuthorization)]) {
        BTLogInfo(@"requestAceessPermissionForLocation");
        [self.locationManager requestWhenInUseAuthorization];
        self.hasRequestLocationPermission = YES;
        //[self.locationManager requestAlwaysAuthorization];
    }
}

-(CLLocationManager *)locationManager{
    if (!_locationManager) {
        _locationManager = [[CLLocationManager alloc] init];
        _locationManager.desiredAccuracy = kCLLocationAccuracyBest;
        _locationManager.delegate = self;
    }
    return _locationManager;
}

#pragma mark - cllocationMangaer delegate
- (void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status{
    BTLogInfo(@"found location status is : %d",status);
    if (status == kCLAuthorizationStatusAuthorizedAlways || status == kCLAuthorizationStatusAuthorizedWhenInUse || status == kCLAuthorizationStatusAuthorized) {
        self.isLocationPermissionGranted = YES;
        if (self.locationStatusBlcok) {
            __weak typeof(self) wkself = self;
            BT_dispatch_main_sync_safe(^{
                wkself.locationStatusBlcok(YES);
            });
        }
    }else{
        self.isLocationPermissionGranted = NO;
        if (self.locationStatusBlcok) {
            __weak typeof(self) wkself = self;
            BT_dispatch_main_sync_safe(^{
                wkself.locationStatusBlcok(NO);
            });
        }
    }
}

- (void)locationManager:(CLLocationManager *)manager didFailWithError:(NSError *)error{
    
}
+ (NSError *)requestAceessPermissionForLocalAuthentication {
    NSError *error;
    LAContext *context = [[LAContext alloc] init];
    [context canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error];
    return error;
}
#pragma mark 设置相机权限
+ (void) toSetCameraAuthority{
    [self jumpToAppSetting];
}

#pragma mark 设置录音权限
+ (void) toSetRecordAuthority{
    [self jumpToAppSetting];
}

+ (void)jumpToAppSetting{
    NSURL *url =[NSURL URLWithString:UIApplicationOpenSettingsURLString];
    if (SYSTEM_VERSION_GREATER_THAN_OR_EQUAL_TO(@"10")) {
        [[UIApplication sharedApplication] openURL:url options:@{} completionHandler:nil];
    }else{
        [[UIApplication sharedApplication] openURL:url];
    }
}

+ (NSMutableArray *)loadSystemAddress{
    
    NSMutableArray* addressBookTemp=[NSMutableArray new];
    ABAddressBookRef addressBooks = nil;
    if ([[UIDevice currentDevice].systemVersion floatValue] >= 6.0)
    {
        addressBooks =  ABAddressBookCreateWithOptions(NULL, NULL);
        //获取通讯录权限
        dispatch_semaphore_t sema = dispatch_semaphore_create(0);
        ABAddressBookRequestAccessWithCompletion(addressBooks, ^(bool granted, CFErrorRef error){dispatch_semaphore_signal(sema);});
        dispatch_semaphore_wait(sema, DISPATCH_TIME_FOREVER);
    }
    else
    {
        addressBooks = ABAddressBookCreate();
    }
     if (ABAddressBookGetAuthorizationStatus()==kABAuthorizationStatusDenied) {
    }
    //获取通讯录中的所有人
    CFArrayRef allPeople = ABAddressBookCopyArrayOfAllPeople(addressBooks);
    CFIndex nPeople = ABAddressBookGetPersonCount(addressBooks);
    //循环，获取每个人的个人信息
    for (NSInteger i = 0; i < nPeople; i++)
    {
        //新建一个addressBook model类
        TKAddressBook *contact = [[TKAddressBook alloc] init];
        //获取个人
        ABRecordRef person = CFArrayGetValueAtIndex(allPeople, i);
        //获取个人名字
        CFTypeRef abName = ABRecordCopyValue(person, kABPersonFirstNameProperty);
        CFTypeRef abLastName = ABRecordCopyValue(person, kABPersonLastNameProperty);
        CFStringRef abFullName = ABRecordCopyCompositeName(person);
        NSString *nameString = (__bridge NSString *)abName;
        NSString *lastNameString = (__bridge NSString *)abLastName;
        
        if ((__bridge id)abFullName != nil) {
            nameString = (__bridge NSString *)abFullName;
        } else {
            if ((__bridge id)abLastName != nil)
            {
                nameString = [NSString stringWithFormat:@"%@ %@", nameString, lastNameString];
            }
        }
        contact.name = nameString;
        contact.recordID = (int)ABRecordGetRecordID(person);
        
        CFTypeRef corporation = ABRecordCopyValue(person, kABPersonOrganizationProperty);
        contact.corporation = (__bridge NSString *)corporation; //公司或组织
        CFTypeRef remarks = ABRecordCopyValue(person, kABPersonNoteProperty);
        contact.remarks = (__bridge NSString *)remarks;         //备注
        //  通讯录地址
        ABMultiValueRef addressMulti = ABRecordCopyValue(person, kABPersonAddressProperty);
        NSInteger valuesCount = 0;
        if (addressMulti != nil) valuesCount = ABMultiValueGetCount(addressMulti);
        NSMutableString *address = @"".mutableCopy;
        for (int i = 0; i < valuesCount; i++) {
            CFTypeRef value = ABMultiValueCopyValueAtIndex(addressMulti, i);
            NSDictionary *addressDictionary = (__bridge NSDictionary *)value;
            NSString *state = [addressDictionary objectForKey:(NSString *)kABPersonAddressStateKey];
            if (state.length) [address appendString:state];
            NSString *city = [addressDictionary objectForKey:(NSString *)kABPersonAddressCityKey];
            if (city.length) [address appendString:city];
            NSString *street = [addressDictionary objectForKey:(NSString *)kABPersonAddressStreetKey];
            street = [street stringByReplacingOccurrencesOfString:@"\n" withString:@""];
            if (street.length) [address appendString:street];
            [address appendString:@","];
            CFRelease(value);
        }
        if ([address hasSuffix:@","]) [address deleteCharactersInRange:NSMakeRange(address.length-1, 1)];
        contact.address = address;
        if (addressMulti) CFRelease(addressMulti);
        
        
        ABPropertyID multiProperties[] = {
            kABPersonPhoneProperty,
            kABPersonEmailProperty
        };
        NSInteger multiPropertiesTotal = sizeof(multiProperties) / sizeof(ABPropertyID);
        for (NSInteger j = 0; j < multiPropertiesTotal; j++) {
            ABPropertyID property = multiProperties[j];
            ABMultiValueRef valuesRef = ABRecordCopyValue(person, property);
            NSInteger valuesCount = 0;
            if (valuesRef != nil) valuesCount = ABMultiValueGetCount(valuesRef);
            
            if (valuesCount == 0) {
                CFRelease(valuesRef);
                continue;
            }
            //获取电话号码和email
            for (NSInteger k = 0; k < valuesCount; k++) {
                CFTypeRef value = ABMultiValueCopyValueAtIndex(valuesRef, k);
                switch (j) {
                    case 0: {// Phone number
                        NSString *phone = [(__bridge NSString*)value stringByReplacingOccurrencesOfString:@"-" withString:@""];
                        [contact.tel addObject:phone];
                        break;
                    }
                    case 1: {// Email
                        contact.email = (__bridge NSString*)value;
                        break;
                    }
                }
                CFRelease(value);
            }
            CFRelease(valuesRef);
        }
        //将个人信息添加到数组中，循环完成后addressBookTemp中包含所有联系人的信息
        [addressBookTemp addObject:contact];
        
        if (abName) CFRelease(abName);
        if (abLastName) CFRelease(abLastName);
        if (abFullName) CFRelease(abFullName);
        if (corporation) CFRelease(corporation);
        if (remarks) CFRelease(remarks);
    }
    return addressBookTemp;
}

+ (void)gotoSystemLocationSetting{
    [self jumpToAppSetting];
}

+ (void)gotoSystemAddressSetting{
    [self jumpToAppSetting];
}

@end

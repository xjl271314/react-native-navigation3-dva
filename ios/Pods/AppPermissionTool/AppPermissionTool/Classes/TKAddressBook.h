//
//  TKAddressBook.h
//  AiCardForStaff
//
//  Created by chenhaibo on 15/8/13.
//  Copyright (c) 2015年 chenhaibo. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TKAddressBook : NSObject

@property (nonatomic,assign)NSInteger sectionNumber;
@property (nonatomic,assign)NSInteger recordID;
@property (nonatomic, strong) NSString *name;
@property (nonatomic, strong) NSString *email;
@property (nonatomic, strong) NSMutableArray *tel;
@property (nonatomic, strong) NSString *address;        //地址
@property (nonatomic, strong) NSString *corporation;    //公司
@property (nonatomic, strong) NSString *remarks;        //备注
@end

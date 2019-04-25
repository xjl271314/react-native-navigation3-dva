//
//  TKAddressBook.m
//  AiCardForStaff
//
//  Created by chenhaibo on 15/8/13.
//  Copyright (c) 2015年 chenhaibo. All rights reserved.
//

#import "TKAddressBook.h"

@implementation TKAddressBook
- (instancetype)init {
    self = [super init];
    if (self) {
        self.tel = [NSMutableArray array];
    }
    return self;
}
@end

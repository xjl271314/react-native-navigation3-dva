//
//  RNShowContactsModel.h
//  rnBaseApp
//
//  Created by 许将龙 on 2019/4/17.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JSONModel/JSONModel.h>


@interface ShowContactsResultModel : JSONModel
@property (nonatomic, strong) NSString *name;
@property (nonatomic, strong) NSString *tel;
@end



@interface RNShowContactsModel : JSONModel
@property (nonatomic,strong) ShowContactsResultModel *object;
@end

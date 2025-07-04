/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTUnstableModulesRequiringMainQueueSetupProvider.h"

@implementation RCTUnstableModulesRequiringMainQueueSetupProvider

+(NSArray<NSString *> *)modules
{
  return @[
    @"AccessibilityManager",
		@"Appearance",
		@"AppState",
		@"DeviceInfo",
		@"PlatformConstants",
		@"StatusBarManager"
  ];
}

@end

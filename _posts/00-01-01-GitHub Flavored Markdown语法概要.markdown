---
layout:     post
title:      "GitHub Flavored Markdown语法概要"
subtitle:   "GitHub Flavored Markdown"
date:       2000-01-01
author:     "author"
header-img: "img/post-bg-js-version.jpg"
tags:
    - 标签
---

 [github链接](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)

# 一级标题
## 二级标题
### 三级标题

#### 列表
- 一级列表
    - 二级列表
        - 三级列表
        - 三级列表
        - 三级列表    
    - 二级列表
    - 二级列表
    - 二级列表
    
#### 有序序列 
1、111111
2、222222
3、333333

#### 无须序列（-、* 或 +）
- 111111
- 222222
- 333333

#### 任务列表
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

#### 提及人员和团队
@github/support What do you think about these updates?

#### 引用文本
> Text that is a quote
  Text that is a quote
> Text that is a quote

#### 引用bash命令
```bash
$ gem install cocoapods
```
#### 引用ruby命令
```ruby
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '10.0'
use_frameworks!

target '<Your Target Name>' do
    pod 'SnapKit', '~> 5.6.0'
end
```

#### 引用c代码
```c
int WORD_MASK 7UL;
int word_align(int x) {
    return (x + WORD_MASK) & ~WORD_MASK;
}
```

#### 引用objective-c代码
```objective-c
+(BOOL)resolveInstanceMethod:(SEL)sel
+(BOOL)resolveClassMethod:(SEL)sel
```

#### 引用swift代码
```swift
func resolveInstanceMethod() -> bool {
    return true
}
```

#### 引用applescript代码  [applescript](https://sspai.com/post/46912)
```applescript
tell application "Safari"
    activate
end tell 
```

#### Some basic Git commands are:
```git
git status
git add
git commit
```

#### The background color is `#ffffff` for light mode and `#000000` for dark mode.

#### 程序启动
在启动App时，真正的加载过程是从exec()函数开始，系统会调⽤exec()函数创建进程，并且分配
内存。然后会执⾏以下的操作
1、把App对应的可执⾏⽂件加载到内存。
2、把dyld加载到内存。dyld也是⼀个可执⾏的程序
3、dyld进⾏动态链接。

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

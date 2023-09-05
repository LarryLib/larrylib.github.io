---
layout: post
title: "OC-setNeedsLayout、layoutIfNeeded、setNeedsDispaly的不同"
subtitle: ""
author: "LarryLib"
header-style: text
categories: [iOS]
tags:
  - OC
---

# layoutSubviews
```oc
- (void)layoutSubviews {
    [super layoutSubviews];
    /*
     何时触发：
     1、初始化且frame不为CGRectZero
     2、addSubview时
     3、view.frame发生编号时
     4、UIScrollView滚动时
     5、screen旋转时会触发父视图的layoutSubviews
     6、view.frame改变时，也会触发父视图的layoutSubviews
     */
}
```

# layoutIfNeeded & setNeedsLayout
```
#pragma
- (void)layoutIfNeeded {
    [self layoutIfNeeded];
    //  强制视图立即更新其布局
}

- (void)setNeedsLayout {
    [super setNeedsLayout];
    //  不强制立即更新，而是记录下来，等待下一个更新周期在更新
    //  应用场景：适用于所有布局更新合并到一个更新周期，这通常会提高性能；
    
    /*【layoutIfNeeded和setNeedsLayout】
     1、setNeedsLayout在runloop即将休眠时触发layoutSubviews；且一定会触发
     2、但layoutIfNeeded只有在布局发生变化的情况下才会立即触发layoutSubviews。
     */
}
```

# setNeedsDisplay
```
#pragma
- (void)setNeedsDisplay {
    [super setNeedsDisplay];
    /*
     可以使用setNeedsDisplay或setNeedsDisplayInRect:通知系统需要重新绘制视图的内容。此方法记录请求并立即返回。在下一个绘图周期之前，视图实际上不会重新绘制，此时所有无效的视图都会更新。 如果视图由caeAglayer对象支持，则此方法无效。它仅适用于使用本机绘图技术（如UIKit和核心图形）渲染其内容的视图。应该使用此方法请求仅当视图的内容或外观更改时才重新绘制视图。如果仅更改视图的几何图形，则通常不会重新绘制视图。而是根据视图的contentMode属性中的值调整其现有内容。重新显示现有内容可以避免重新绘制未更改的内容，从而提高性能。名词解释：CAEAGLayer （用OpenGLES绘制的层）。
     */
}
```
# setNeedsDisplayInRect & drawRect
```
- (void)setNeedsDisplayInRect:(CGRect)rect {
    
}

- (void)drawRect:(CGRect)rect {
    [super drawRect:rect];
    
    /*
     【drawRect在以下情况下会被调用】
     1、如果在UIView初始化时没有设置rect大小，将直接导致drawRect不被自动调用。drawRect 掉用是在Controller->loadView, Controller->viewDidLoad 两方法之后掉用的.所以不用担心在 控制器中,这些View的drawRect就开始画了.这样可以在控制器中设置一些值给View(如果这些View draw的时候需要用到某些变量 值).

     2、该方法在调用sizeToFit后被调用，所以可以先调用sizeToFit计算出size。然后系统自动调用drawRect:方法。
     3、通过设置contentMode属性值为UIViewContentModeRedraw。那么将在每次设置或更改frame的时候自动调用drawRect:。
     4、直接调用setNeedsDisplay，或者setNeedsDisplayInRect:触发drawRect:，但是有个前提条件是rect不能为0。

     以上1,2推荐；而3,4不提倡

     drawRect方法使用注意点：
     1、 若使用UIView绘图，只能在drawRect：方法中获取相应的contextRef并绘图。如果在其他方法中获取将获取到一个invalidate 的ref并且不能用于画图。drawRect：方法不能手动显示调用，必须通过调用setNeedsDisplay 或 者 setNeedsDisplayInRect，让系统自动调该方法。
     2、若使用calayer绘图，只能在drawInContext: 中（类似鱼drawRect）绘制，或者在delegate中的相应方法绘制。同样也是调用setNeedDisplay等间接调用以上方法
     3、若要实时画图，不能使用gestureRecognizer，只能使用touchbegan等方法来调用setNeedsDisplay实时刷新屏幕（但是实时画图时CPU占用率会非常高。）
     */
}
```

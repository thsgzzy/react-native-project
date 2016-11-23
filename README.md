# react-native项目，豆果美食

##前言
当我第一次接触react-native的时候，我觉得它是网页制作进军原生App的歪门邪道。

但是随着我对react-native的深入了解，我已经被react-native那强大的功能所深深的折服。

那么react-native到底有什么强大之处呢？套用官方的话来说：

- React Native使你能够在Javascript和React的基础上获得完全一致的开发体验，构建世界一流的原生APP。

- React Native着力于提高多平台开发的开发效率 —— 仅需学习一次，编写任何平台。(Learn once, write anywhere)

- Facebook已经在多项产品中使用了React Native，并且将持续地投入建设React Native。

- 使用React Native，你可以使用标准的平台组件， 这使你的app获得平台一致的视觉效果和体验，并且获得最佳的性能和流畅性。 使用对应的React component，就可以轻松地把这些原生组件整合到你的React Native应用中，让你的应用能快速的开发。

##项目运行
1. 首先确保你项目有react-native开发环境，如果没有搭建环境的可以查看这篇博客[http://www.open-open.com/lib/view/open1451012403948.html](http://www.open-open.com/lib/view/open1451012403948.html)
2. 其次，你可以将本项目克隆至本地`git clone https://github.com/dushao103500/react-native-project.git`
3. 你可以将项目文件直接覆盖你初始化好了的文件，然后使用`react-native run-android`将项目文件打包至真机或者虚拟机中
4. 使用`react-native start`运行本项目

##项目组成
本项目是一款提供各种美食的App——豆果美食。

**本项目主要有一下部分组成：**

- 底部Tabbar

	- 底部Tabbar做了兼容，采用了`Navigator`，使用`Navigator`提供的replace方法进行`router`切换

- 主页面

主页面主要提供美食信息的预览

<img src="http://oe51jhwvd.bkt.clouddn.com/douguoHome.jpg" width="270" height="480">

- 列表页

列表页主要提供列表选择

<img src="http://oe51jhwvd.bkt.clouddn.com/douguoList.jpg" width="270" height="480">

- 购物页

购物页主要提供商品选购

<img src="http://oe51jhwvd.bkt.clouddn.com/douguoShop.jpg" width="270" height="480">

- 详情页

详情页主要记录了菜谱信息

<img src="http://oe51jhwvd.bkt.clouddn.com/douguoHomeDetail.jpg" width="270" height="480">

- 列表信息页

购物页主要记录了不同列表页的信息

<img src="http://oe51jhwvd.bkt.clouddn.com/douguoListDetail.jpg" width="270" height="480">

**项目主要使用的技术：**

- 搜索框是由`TextInput`组成
- 轮播图主要是应用了第三方插件`react-native-swiper`（不了解的可自行上网搜）
- 美食信息列表主要是有`ListView`组成，
- 页面头部固定，其他部分采用`ScrollView`

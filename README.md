# 捌柒注音 —— 注音输入的「曲线救国」解决方案
![image](https://github.com/signxer/zhuyin87/raw/master/images/small.jpg)

## 前言
在台湾待过一段时间的人总是知道，在一些情况下，总会有许多机器(比如同学的电脑)没办法用拼音输入法。

在这个时候要想输入东西就会变得十分痛苦，而「捌柒注音」就是为此而生的。

## 简介
「捌柒注音」只为满足一个情景而生：

不会打注音输入法，但会使用其他方式输入中文。想要在某些只能通过注音来输入的地方完成输入，可以借助本工具。

由于一般完成这一「转换」过程的工具通常为手机，所以网页专门做成了 Web App 的形式，例如 iOS 可以通过「添加到主屏幕」，方便快捷使用。

[在线Demo](https://o8b.club/87zy/)

本项目大部分代码魔改自[sxei/pinyinjs](https://github.com/sxei/pinyinjs)，自制了两个词典，如下：

### Unicode到注音词典
由[sxei/pinyinjs](https://github.com/sxei/pinyinjs)中的[pinyin_dict_withtone.js](https://github.com/sxei/pinyinjs/blob/master/dict/pinyin_dict_withtone.js)通过汉语拼音转注音而来，[转换对照表](http://www.mandarintools.com/pychart.html)。
修正了原拼音词典中的一些错误。

### 注音到汉语拼音词典
通过[转换对照表](http://www.mandarintools.com/pychart.html)修改而来，借用了[sxei/pinyinjs](https://github.com/sxei/pinyinjs)中的[pinyin_dict_notone.js](https://github.com/sxei/pinyinjs/blob/master/dict/pinyin_dict_notone.js)当做壳，这样的好处是其他代码我都不用修改，反正都是对照表的关系。

## 使用
同[sxei/pinyinjs](https://github.com/sxei/pinyinjs)一样，只需要引用即可。
```html
<script type="text/javascript" src="dict/pinyin_dict_notone.js"></script>
<script type="text/javascript" src="dict/pinyin_dict_withtone.js"></script>
<script type="text/javascript" src="pinyinUtil.js"></script>
<script type="text/javascript" src="zhuyinUtil.js"></script>
```

## 功能
通过以上两张表，就可以达成以下功能：

### 汉字转注音(带声调)
```javascript
pinyinUtil.getPinyin('捌柒注音'); //输出 ㄅㄚˉ ㄑㄧˉ ㄓㄨˋ ㄧㄣˉ
```

### 注音转键位(英文表示)
```javascript
Zhuyin2Keyboard('ㄅㄚˉ ㄑㄧˉ ㄓㄨˋ ㄧㄣˉ'); //输出 18 fu 5j4 up
```

### 注音转拼音(带声调)
```javascript
Zhuyin2Pinyin('ㄅㄚˉ ㄑㄧˉ ㄓㄨˋ ㄧㄣˉ'); //输出 bā qī zhù yīn
```

### 注音键盘转拼音(带声调)
```javascript
Keyboard2Pinyin('18 fu 5j4 up'); //输出 bā qī zhù yīn
```

所以通过以上几个函数，经过组合，还可以得到更多的转换：

### 汉字转键位(英文表示)
```javascript
Zhuyin2Pinyin(pinyinUtil.getPinyin('捌柒注音')); //输出 bā qī zhù yīn
```

### 汉字转拼音(带声调)
```javascript
Zhuyin2Pinyin(pinyinUtil.getPinyin('捌柒注音')); //输出 bā qī zhù yīn
```

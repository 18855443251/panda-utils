## panda-utils
> 自己平常用的一些的工具函数

### 如何使用

```
# 安装
$ npm install panda-utils --save

# 引入
import pandaUtils from 'panda-utils'

# 使用
pandaUtils.somefunc()
```

### 分为以下几个模块

- [时间日期相关](时间日期相关)
- [表单验证相关](表单验证相关)
- [判断客户端环境](#判断客户端环境)

## 时间日期相关
- 月维度：
```javascript
// 获取某年某月中有多少天
getDaysInOneMonth(<year>,<month>)

// eg:
pandaUtils.getDaysInOneMonth(2020,2); // 29
```

```javascript
// 获取上月第一天的开始时刻
getStartTimeInLastMonth()

// eg（统一返回string格式的GMT中国标准时间）:
pandaUtils.getStartTimeInLastMonth(); // Sat Feb 01 2020 00:00:00 GMT+0800 (中国标准时间)
```

```javascript
// 获取上月最后一天的结束时刻
getEndTimeInLastMonth()

// eg:
pandaUtils.getEndTimeInLastMonth(); // Sat Feb 29 2020 23:59:59 GMT+0800 (中国标准时间)

// 扩展
如果要获取上月最后一天的开始时刻就减掉一天的毫秒数：pandaUtils.getEndTimeInMonth().getTime()-86400000
```

```javascript
// 获取本月第一天的开始时刻
getStartTimeInMonth()

// eg:
pandaUtils.getStartTimeInMonth(); // Sun Mar 01 2020 00:00:00 GMT+0800 (中国标准时间)
```

```javascript
// 获取本月最后一天的结束时刻
getEndTimeInMonth()

// eg:
pandaUtils.getEndTimeInMonth(); // Tue Mar 31 2020 23:59:59 GMT+0800 (中国标准时间)
```

- 周维度：
```javascript
// 获取本周第一天的开始时刻
getStartTimeInWeek()

// eg:
pandaUtils.getStartTimeInWeek(); // Mon Mar 02 2020 00:00:00 GMT+0800 (中国标准时间)
```

```javascript
// 获取本周最后一天的结束时刻
getEndTimeInWeek()

// eg:
pandaUtils.getEndTimeInWeek(); // Sun Mar 08 2020 23:59:59 GMT+0800 (中国标准时间)
```

- 日维度：
```javascript
// 获取昨天的开始时刻
getStartTimeInYesterday()

// eg:
pandaUtils.getStartTimeInYesterday(); // Wed Mar 04 2020 00:00:00 GMT+0800 (中国标准时间)
```

```javascript
// 获取昨天的结束时刻
getEndTimeInYesterday()

// eg:
pandaUtils.getEndTimeInYesterday(); // Wed Mar 04 2020 23:59:59 GMT+0800 (中国标准时间)
```

```javascript
// 获取今天的开始时刻
getStartTimeInToday()

// eg:
pandaUtils.getStartTimeInToday(); // Thu Mar 05 2020 00:00:00 GMT+0800 (中国标准时间)
```

```javascript
// 获取今天的结束时刻
getEndTimeInToday()

// eg:
pandaUtils.getEndTimeInToday(); // Thu Mar 05 2020 23:59:59 GMT+0800 (中国标准时间)
```

- 时间处理
```javascript
// 将时间戳转化为自定义的时间格式
formatTime(<number>, <format>)

// eg:
const num = new Date().getTime();
pandaUtils.formatTime(num, "Y-M-D h:m:s"); // 2020-03-05 17:38:33
pandaUtils.formatTime(num, "Y年M月D日h时m分s秒"); // 2020年03月05日17时38分33秒
```

## 表单验证相关
```javascript
// 手机号码格式验证
checkPhoneNum(<手机号码(Number类型)>)

// eg：
pandaUtils.checkPhoneNum(12345678901); // false
```


## 判断客户端环境
```
// 判断是否为IOS
checkInIOS()

// eg:
pandaUtils.checkInIOS(); 
```

```
// 判断是否为Andriod
checkInAndriod()

// eg:
pandaUtils.checkInAndriod(); 
```

```
// 判断是否为微信
checkInWx()

// eg:
pandaUtils.checkInWx();
```

### 完善中...

## License

[MIT](https://github.com/Ewall1106/panda-utils/blob/master/LICENSE)

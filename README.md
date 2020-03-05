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

- [时间日期相关]()
- ...

### 时间日期相关
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

// eg（统一返回）:
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
// 获取本月最后一天的结束时刻
getEndTimeInMonth()

// eg:
pandaUtils.getEndTimeInMonth(); // Tue Mar 31 2020 23:59:59 GMT+0800 (中国标准时间)
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

### 完善中...

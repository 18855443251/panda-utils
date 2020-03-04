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

```javascript
// 获取某年某月中有多少天
getDaysInOneMonth(<year>,<month>)

// eg:
pandaUtils.getDaysInOneMonth(2020,2); // 29
```

```javascript
// 获取上月第一天的开始时间
getStartTimeInMonth

// eg:
pandaUtils.getStartTimeInMonth(); // 1580486400000
```

```javascript
// 获取上月最后一天的结束时间
getEndTimeInMonth

// eg:
pandaUtils.getEndTimeInMonth(); // 1580486400000

// 扩展
如果要获取最后一天的开始时间就减去一天的毫秒数：pandaUtils.getEndTimeInMonth()-86400000
```

### 完善中...

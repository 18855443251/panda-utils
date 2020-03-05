/* ---处理时间日期相关的工具函数--- */

const NOW = new Date();

/**
 * 获取某年某月中有多少天
 * @param {Numer} year
 * @param {Number} month
 */
export function getDaysInOneMonth(year, month) {
  const d = new Date(year, parseInt(month, 10), 0);
  return d.getDate();
}

/**
 * 获取上月第一天的开始时刻
 * @returns {String} GMT+0800(中国标准时间)
 */
export function getStartTimeInLastMonth() {
  return new Date(NOW.getFullYear(), NOW.getMonth() - 1, 1);
}

/**
 * 获取上月最后一天的结束时刻
 * @returns {String}
 */
export function getEndTimeInLastMonth() {
  const y = NOW.getFullYear();
  const d = new Date(y, NOW.getMonth(), 1);
  return new Date(d.getTime() - 1000);
}

/**
 * 获取本月第一天的开始时刻
 * @returns {String}
 */
export function getStartTimeInMonth() {
  const y = NOW.getFullYear();
  return new Date(y, NOW.getMonth(), 1);
}

/**
 * 获取本月最后一天的结束时刻
 * @returns {String}
 */
export function getEndTimeInMonth() {
  const y = NOW.getFullYear();
  const d = new Date(y, NOW.getMonth() + 1, 1);
  return new Date(d.getTime() - 1000);
}

/**
 * 获取本周第一天的开始时刻
 * @returns {String}
 */
export function getStartTimeInWeek() {
  return new Date(
    NOW.getFullYear(),
    NOW.getMonth(),
    NOW.getDate() - NOW.getDay() + 1
  );
}

/**
 * 获取本周最后一天的结束时刻
 * @returns {String}
 */
export function getEndTimeInWeek() {
  const d = new Date(
    NOW.getFullYear(),
    NOW.getMonth(),
    NOW.getDate() + (6 - NOW.getDay()) + 2
  );
  return new Date(d.getTime() - 1000);
}

/**
 * 获取昨天的开始时刻
 * @returns {String}
 */
export function getStartTimeInYesterday() {
  return new Date(
    new Date(new Date().toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000
  );
}

/**
 * 获取昨天的结束时刻
 * @returns {String}
 */
export function getEndTimeInYesterday() {
  return new Date(new Date(new Date().toLocaleDateString()).getTime() - 1);
}

/**
 * 获取今天的开始时刻
 * @returns {String}
 */
export function getStartTimeInToday() {
  return new Date(new Date(new Date().toLocaleDateString()).getTime());
}

/**
 * 获取今天的结束时刻
 * @returns {String}
 */
export function getEndTimeInToday() {
  return new Date(
    new Date(new Date().toLocaleDateString()).getTime() +
      24 * 60 * 60 * 1000 -
      1
  );
}

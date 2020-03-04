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
 * 获取上月第一天的开始时间
 * @returns {Number}
 */
export function getStartTimeInMonth() {
  return new Date(NOW.getFullYear(), NOW.getMonth() - 1, 1).getTime();
}

/**
 * 获取上月最后一天的结束时间
 * @returns {Number}
 */
export function getEndTimeInMonth() {
  const d = new Date(NOW.getFullYear(), NOW.getMonth(), 0).getDate();
  return (
    new Date(NOW.getFullYear(), NOW.getMonth() - 1, d).getTime() + 86400000
  );
}

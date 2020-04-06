/* ---处理价格数字--- */

/**
 * 分转换为元
 * @param {Number} num
 */
export function toDecimal(num) {
  return num == null ? null : +num / 100;
}

/**
 * 分转换为元，去掉小数点后面的数值
 * @param {Number} num
 */
export function toDecimal0(num) {
  return num == null ? null : parseFloat((+num / 100) >> 0);
}

/**
 * 分转换为元，并保留小数点后两位
 * @param {Number} num
 */
export function toDecimal2(num) {
  return num == null ? null : (+num / 100).toFixed(2);
}

/* ---表单验证相关的工具函数--- */

/**
 * 手机号码格式验证
 * @param {Number} num
 */
export function checkPhoneNum(num) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (num !== "" && reg.test(num)) {
    return true;
  }
  return false;
}

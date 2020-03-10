/* ---判断客户端环境--- */
const u = navigator.userAgent;

/**
 * 判断是否为IOS
 * @returns {Boolean}
 */
export function checkInIOS() {
  const flag = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  return flag;
}

/**
 * 判断是否为Andriod
 * @returns {Boolean}
 */
export function checkInAndriod() {
  const flag = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  return flag;
}

/**
 * 判断是否为微信H5
 * @returns {Boolean}
 */
export function checkInWx() {
  const flag = u.indexOf("MicroMessenger") !== -1;
  return flag;
}

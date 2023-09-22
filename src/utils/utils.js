/**
 * 获取url上的参数
 */
function getLocaltionUrlParam() {
  let paramObj = {};
  let paramStrArr =
    window.location.href.split("?").length > 1
      ? window.location.href.split("?")[1]
      : [];
  let paramArr = paramStrArr.length > 0 ? paramStrArr.split("&") : [];
  for (var i = 0; i < paramArr.length; i++) {
    let objArr = paramArr[i].split("=");
    paramObj[objArr[0]] = objArr.length > 1 ? objArr[1] : "";
  }
  return paramObj;
}

function deepCopy(obj) {
  if (typeof obj == "object") {
    return JSON.parse(JSON.stringify(obj));
  }
  return obj;
}

/**
 * 如果传入的时间为当天，则只显示时分秒，否则显示完整时间
 * @param {Number} time
 * @returns {String}
 */
function formatDayTime(time) {
  if (!time) {
    return "";
  }
  let timeDate = new Date(time);
  let nowDate = new Date();
  let nowYear = nowDate.getFullYear();
  let nowMonth = nowDate.getMonth() + 1;
  let nowDay = nowDate.getDate();
  let timeYear = timeDate.getFullYear();
  let timeMonth = timeDate.getMonth() + 1;
  let timeDay = timeDate.getDate();
  let timeHour = timeDate.getHours();
  timeHour = timeHour < 10 ? `0${timeHour}` : timeHour;
  let timeMinutes = timeDate.getMinutes();
  timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
  let timeSeconds = timeDate.getSeconds();
  timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;
  let nowStr = `${nowYear}-${nowMonth}-${nowDay}`;
  let timeStr = `${timeYear}-${timeMonth}-${timeDay}`;
  // 同一天，只返回时分秒
  if (timeStr == nowStr) {
    let resTime = `${timeHour}:${timeMinutes}:${timeSeconds}`;
    return resTime;
  } else {
    return `${timeStr} ${timeHour}:${timeMinutes}:${timeSeconds}`;
  }
}

//是否滚到底部
function checkScrollBottom(curDom) {
  if (!curDom) {
    return false;
  }
  if (curDom.scrollTop + curDom.clientHeight >= curDom.scrollHeight - 40) {
    return true;
  } else {
    return false;
  }
}

export { getLocaltionUrlParam, deepCopy, formatDayTime, checkScrollBottom };

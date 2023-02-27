// 다양한 간격을 갖고 만료되는 타임아웃 타이머
function simpleTimeout(consoleTimer) {
  console.timeEnd(consoleTimer);
}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

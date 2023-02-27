// 블로킹 fs 호출과 immediate 타이머, nextTick() 호출의 실행 순서를 확인할 수 있도록 해당 함수들을 연속적으로 구성
let fs = require("fs");

fs.stat("nexttick.js", function () {
  console.log("nexttick.js Exists");
});

setImmediate(function () {
  console.log("Immediate Timer 1 Executed");
});

setImmediate(function () {
  console.log("Immediate Timer 2 Executed");
});

process.nextTick(function () {
  console.log("Next Tick 1 Executed");
});

process.nextTick(function () {
  console.log("Next Tick 2 Executed");
});

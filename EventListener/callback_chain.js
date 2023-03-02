// 익명 함수의 콜백 함수에서 목록을 반복 처리하기 위해 초기 함수를 사용한 콜백 체인 구현 방식
function logCar(car, callback) {
  console.log("Saw a %s", car);
  if (cars.length) {
    process.nextTick(function () {
      callback();
    });
  }
}

function logCars(cars) {
  let car = cars.pop();
  logCar(car, function () {
    logCars(cars);
  });
}

const cars = ["Ferrari", "Porsche", "Bugatti", "Lamborghini", "Aston Martin"];

logCars(cars);

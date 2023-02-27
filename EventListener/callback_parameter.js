// 이벤트로 처리되지 않은 추가 매개변수를 생성하기 위한 임의 함수 생성
const events = require("events");

function CarShow() {
  events.EventEmitter.call(this);
  this.seeCar = function (make) {
    this.emit("sawCar", make);
  }; // CarShow 객체의 seeCar 메서드 정의
} // CarShow 생성자 정의

CarShow.prototype.__proto__ = events.EventEmitter.prototype;

let show = new CarShow(); // CarShow 객체 생성

function logCar(make) {
  console.log("Saw a " + make);
} // logCar 함수 정의

function logColorCar(make, color) {
  console.log("Saw a %s %s", color, make);
} // logColorCar 함수 정의

show.on("sawCar", logCar); // show 객체의 메서드가 실행될 때마다 logCar 함수 실행
show.on("sawCar", function (make) {
  const colors = ["red", "blue", "black"];
  const color = colors[Math.floor(Math.random() * 3)];
  logColorCar(make, color);
}); // show 객체의 메서드가 실행될 때마다 red, blue, black 셋 중 하나를 랜덤으로 출력

show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");

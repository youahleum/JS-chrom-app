const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(실행하고자하는 함수, 호출되는 함수의 시간의 간격(ms) )
// setInterval(sayHello, 5000);   //5초마다

// setTimeout(함수, 얼마나 기다릴지 시간(ms단위)) //1000: 1초후에 작동
getClock();
setInterval(getClock, 1000);

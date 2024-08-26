document.addEventListener("DOMContentLoaded", function () {
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  const hr = document.querySelector(".hour");
  const min = document.querySelector(".minute");
  const sec = document.querySelector(".second");
  const ms = document.querySelector(".millisecond");

  let clockWorking = false;
  var lastTime = [0, 0, 0, 0];
  let intervalId;

  const updateTime = (lastTime) => {
    if (lastTime[3] < 99) {
      lastTime[3] += 1;
    } else {
      lastTime[3] = 0;
      lastTime[2] += 1;
      if (lastTime[2] == 60) {
        lastTime[2] = 0;
        lastTime[1] += 1;
        if (lastTime[1] == 60) {
          lastTime[1] = 0;
          lastTime[0] += 1;
        }
      }
    }
    //console.log(lastTime);

    sec.textContent = String(lastTime[2]).padStart(2, "0");
    min.textContent = String(lastTime[1]).padStart(2, "0");
    hr.textContent = String(lastTime[0]).padStart(2, "0");
    ms.textContent = String(lastTime[3]).padStart(2, "0");
  };

  const startButton = () => {
    if (clockWorking == false) {
      clockWorking = true;
      //console.log(clockWorking);
      intervalId = setInterval(() => {
        updateTime(lastTime);
      }, 10);
    }
  };
  const stopButton = () => {
    if (clockWorking) {
      clockWorking = false;
      //console.log(clockWorking);
      clearInterval(intervalId);
    }
  };
  const resetButton = () => {
    if (clockWorking == false) {
      console.log(clockWorking);
      hr.textContent = "00";
      min.textContent = "00";
      sec.textContent = "00";
      ms.textContent = "00";
      lastTime = [0, 0, 0, 0];
    }
  };

  start.addEventListener("click", startButton);
  stop.addEventListener("click", stopButton);
  reset.addEventListener("click", resetButton);
});

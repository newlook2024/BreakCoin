let coin = document.querySelector(".coin");
let container = document.querySelector(".count-container");
let limit = document.querySelector("#limit");
let earnedCoins = document.querySelector('.earned-coins')

limit.textContent = 1000;
let minusCount = 1;
let limitEqual;

setInterval(() => {
  if (limit.textContent < 1000) {
    limit.textContent = limit.textContent * 1 + minusCount;
    if (limit.textContent > 1000) {
      limit.textContent = 1000;
    }
  }
}, 1500);

// setInterval(() => {
//   limitEqual = limit.textContent - minusCount;
// }, 100);

coin.addEventListener("click", (e) => {
  let counter = document.createElement("h1");
  earnedCoins.textContent = earnedCoins.textContent*1 + minusCount*1
  if (limit.textContent > 0) {
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    counter.style.left = `${cursorX - 10}px`;
    counter.style.top = `${cursorY - 50}px`;
    limit.textContent = limit.textContent - minusCount;
    setTimeout(() => {
      counter.style.top = "-100px";
      counter.style.opacity = "0";
    }, 1);
    counter.classList.add("counter");
    counter.textContent = `+${minusCount}`;
  }
  if (limit.textContent < limitEqual) {
    limit.textContent = 0;
  }
  setInterval(() => {
    if (limit.textContent * 1 < 0) {
      limit.textContent = 0;
    }
  }, 1);
  container.appendChild(counter);

  setTimeout(() => {
    counter.remove();
  }, 1000);

  setInterval(() => {
    if (limit.textContent > 0) {
      coin.style.opacity = "1";
    } else {
      coin.style.opacity = "0.5";
    }
  }, 200);
});

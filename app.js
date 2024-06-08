let coin = document.querySelector(".coin");
let container = document.querySelector(".count-container");
let limit = document.querySelector("#limit");
let earnedCoins = document.querySelector(".earned-coins");

limit.textContent = 99999999999;
let minusCount = 1;

setInterval(() => {
  if (limit.textContent < 1000) {
    limit.textContent = limit.textContent * 1 + minusCount;
    if (limit.textContent > 1000) {
      limit.textContent = 1000;
    }
  }
}, 1000);

// setInterval(() => {
//   limitEqual = limit.textContent - minusCount;
// }, 100);

coin.addEventListener("click", (e) => {
  let counter = document.createElement("h1");
  if (limit.textContent > 0) {
    earnedCoins.textContent = earnedCoins.textContent * 1 + minusCount * 1;
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    counter.style.left = `${cursorX - 10}px`;
    counter.style.top = `${cursorY - 50}px`;
    limit.textContent = limit.textContent - minusCount;
    setTimeout(() => {
      counter.style.top = "-30px";
      counter.style.opacity = "0";
    }, 1);
    counter.classList.add("counter");
    counter.textContent = `+${minusCount}`;
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

let levelOpen = document.querySelector("#level-up-opener");
let levelUp_modal = document.querySelector(".modal-container");
let modalCloser = document.querySelector("#modalCloser");
let levelUpBtn = document.querySelector("#level-up");
let coinForLevel = document.querySelector('#coinForLevel')
let level = document.querySelector('#next-level')
let level__title = document.querySelector('.level-title')

levelOpen.addEventListener("click", () => {
  levelUp_modal.style.display = "flex";
});

modalCloser.addEventListener("click", () => {
  levelUp_modal.style.display = "none";
});

levelUpBtn.addEventListener("click", () => {
  if(coinForLevel.textContent*1 <=  earnedCoins.textContent*1){
    level.textContent = level.textContent*1 + 1
    earnedCoins.textContent = earnedCoins.textContent*1 - coinForLevel.textContent*1
    coinForLevel.textContent = coinForLevel.textContent*1 + 5000
    level__title.textContent = `Your level ${level.textContent*1 -1}`
    minusCount = minusCount +1 
  }
});

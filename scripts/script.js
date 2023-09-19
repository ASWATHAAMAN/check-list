`use strict`;
// select elements
const tickEl = document.getElementById(`tick`);
const checkDataEl = document.getElementById(`check-data`);

const tickTwoEl = document.getElementById(`tick-two`);
const checkDataTwoEl = document.getElementById(`check-data-two`);

const tickThreeEl = document.getElementById(`tick-three`);
const checkDataThreeEl = document.getElementById(`check-data-three`);
const tickFourEl = document.getElementById(`tick-four`);
const checkDataFourEl = document.getElementById(`check-data-four`);
const tickFiveEl = document.getElementById(`tick-five`);
const checkDataFiveEl = document.getElementById(`check-data-five`);
// console.log(tickMarkEl);
// console.log(checkDataEl);

// function
const checkIn = (el, desc) => {
  if (el.checked === true) {
    desc.classList.add("strike");
  } else {
    desc.classList.remove("strike");
  }
};

// eventListeners
tickEl.addEventListener(`click`, () => {
  checkIn(tickEl, checkDataEl);
});
tickTwoEl.addEventListener(`click`, () => {
  checkIn(tickTwoEl, checkDataTwoEl);
});
tickThreeEl.addEventListener(`click`, () => {
  checkIn(tickThreeEl, checkDataThreeEl);
});
tickFourEl.addEventListener(`click`, () => {
  checkIn(tickFourEl, checkDataFourEl);
});
tickFiveEl.addEventListener(`click`, () => {
  checkIn(tickFiveEl, checkDataFiveEl);
});



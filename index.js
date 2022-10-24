const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

const date = new Date("Jan 1, 2023 00:00:00").getTime();

function calculateDate() {
  let date2 = new Date().getTime();
  let date3 = date - date2;
  date3 = new Date(date3);

  const days = Math.floor(date3 / (24 * 60 * 60 * 1000));
  const daysms = date3 % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = date3 % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = date3 % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = sec;

  setTimeout(() => {
    time();
  }, 1000);
}

calculateDate();

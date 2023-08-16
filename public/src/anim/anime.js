const year = 2023;
const month = 8; // Ağustos ayı (1-12 arasında)
const day = 31;
const hour = 20;
const minute = 0;
const second = 0;

const targetDate = new Date(year, month - 1, day, hour, minute, second).getTime();

let countdownInterval; // setInterval referansını saklamak için değişken

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('clock_result');
    countdownElement.textContent = `${formatNumber(days)} : ${formatNumber(hours)} : ${formatNumber(minutes)} : ${formatNumber(seconds)}`;
  } else {
    const countdownElement = document.getElementById('clock_result');
    countdownElement.textContent = "00 : 00 : 00 : 00";
    clearInterval(countdownInterval); // setInterval'i durdur
  }
}

updateCountdown(); // Sayacı başlat

// 1 saniyede bir güncelleme yaparak geriye sayımı güncel tutun
countdownInterval = setInterval(updateCountdown, 1000);

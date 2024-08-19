const count_down = document.getElementById("count-down");
const countDownDate = new Date("Sept 30, 2024 00:00:00").getTime(); // tarih

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const write = [days, hours, minutes, seconds].map(i => i.toString().padStart(2, "0")) // yanına sıfır koymak için kullandığım kod
  count_down.innerHTML = "";
  
  write.forEach((i) => {
    const div = document.createElement("div");
    div.textContent = i;
    count_down.appendChild(div);
  })

  if (distance < 0) {
    clearInterval(x);
    count_down.innerHTML = "<h2>zaman doldu!</h2>"
  }
}, 1000);
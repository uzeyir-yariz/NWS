document.addEventListener("DOMContentLoaded", () => {
    var toDayFromNow =
      new Date("Aug 31, 2024 23:59:59").getTime() / 1000 +
      3600 / 60 / 60 / 24 -
      1;
    var flipdown = new FlipDown(toDayFromNow).start().ifEnded(() => {
      document.querySelector(
        ".flipdown"
      ).innerHTML = `<h2>zaman doldu çık dışarı</h2>`;
    });
  });
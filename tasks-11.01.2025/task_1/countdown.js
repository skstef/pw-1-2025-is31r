const TARGET_DATE = new Date("2025-02-01T00:00:00");
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    countdownElement.textContent = "Time's up!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

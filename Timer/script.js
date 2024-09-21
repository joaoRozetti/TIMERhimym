// Calculating the end date (October 26th, 2024 at 00:00)
const endDate = new Date("2024-10-26T00:00:00");

function updateTimer() {
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Tempo esgotado!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

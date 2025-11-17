// ====================================================================
// 🚨 TARGET DATE SET FOR DECEMBER 03, 2025, 00:00:00
const TARGET_DATE = new Date("December 03, 2025 00:00:00").getTime();
// ====================================================================

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownMessage = document.getElementById('birthday-message');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').style.display = 'none';
        countdownMessage.classList.remove('hidden');
        countdownMessage.textContent = "🥳 Happy Birthday!";
        
        // Optional: Change the title 
        document.getElementById('countdown-title').textContent = "To a Wonderful Person!"; 
        return;
    }

    // Display the result, ensuring two digits (e.g., 05 instead of 5)
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Update the countdown immediately, then every 1 second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
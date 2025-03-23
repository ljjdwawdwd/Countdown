// Ziel-Datum (Ersetze dies mit deinem gewünschten Datum)
const targetDate = new Date("March 31, 2025 00:00:00").getTime();

// Update-Funktion für den Countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Berechnung der verbleibenden Tage, Stunden, Minuten und Sekunden
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Aktualisieren der Countdown-Anzeige
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Wenn der Countdown abgelaufen ist, zeige eine Nachricht
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>Das Event hat begonnen!</h2>";
    }
}

// Initiales Update
updateCountdown();

// Alle 1 Sekunde aktualisieren
const countdownInterval = setInterval(updateCountdown, 1000);

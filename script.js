//your JS code here. If required.
function updateTimer() {
    const now = new Date();
    // Format date and time manually or use toLocaleString for specific format
    const formattedDateTime = now.toLocaleString('en-US', {
        month: 'numeric', // numeric, 2-digit
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
        hour12: true // Use 12-hour clock
    });
    
    // Update the timer element
    document.getElementById('timer').innerText = formattedDateTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer on load to avoid delay
window.onload = updateTimer;


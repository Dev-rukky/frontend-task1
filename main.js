function updateDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    
    // Update current day of the week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfWeek[now.getUTCDay()]; // Get the day index and use it to retrieve the day name
    
    // Update current UTC time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const hours = now.getUTCHours().toString().padStart(2, '0'); // Ensure two-digit format
    const minutes = now.getUTCMinutes().toString().padStart(2, '0'); // Ensure two-digit format
    currentUTCTimeElement.textContent = `${hours}:${minutes} UTC`;
}

// Call the function to update the date and time initially
updateDateTime();

// Update date and time every minute (60000 milliseconds)
setInterval(updateDateTime, 60000);

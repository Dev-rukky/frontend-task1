// function updateDateTime() {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const now = new Date();

//     const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
//     currentDayElement.textContent = daysOfWeek[now.getUTCDay()];

//     const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
//     const hours = now.getUTCHours().toString().padStart(2, '0');
//     const minutes = now.getUTCMinutes().toString().padStart(2, '0');
//     const seconds = now.getUTCSeconds().toString().padStart(2, '0');
//     currentUTCTimeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
// }

// updateDateTime();

// setInterval(updateDateTime, 1000);


// const updateDateTime = () => {
//     const date = new Date();
    


// } 




// function updateNigeriaTime() {
//     const now = new Date();
    
//     // Adjust for Nigeria's UTC+1 time zone
//     const nigeriaMilliseconds = now.getTime() + (1 * 3600000); // Adding 1 hour in milliseconds
    
//     // Update current time in milliseconds for Nigeria
//     const nigeriaTimeElement = document.querySelector('[data-testid="nigeriaTime"]');
//     nigeriaTimeElement.textContent = `${nigeriaMilliseconds} ms since midnight in Nigeria`;
    
//     // Increment the total milliseconds by 1
//     setTimeout(updateNigeriaTime, 1);
// }

// // Call the function to update the time initially
// updateNigeriaTime();


function updateCurrentTime() {
    const now = new Date();
    
    // Calculate the total milliseconds since midnight
    const totalMilliseconds = now.getUTCHours() * (1 * 3600000) + now.getUTCMinutes() * 60000 + now.getUTCSeconds() * 1000 + now.getUTCMilliseconds();
    
    // Update current time in milliseconds
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `${totalMilliseconds} ms since midnight UTC`;
    
    // Increment the total milliseconds by 1
    setTimeout(updateCurrentTime, 1);
}

// Call the function to update the time initially
updateCurrentTime();


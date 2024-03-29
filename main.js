const updateDateTime = () => {
    const today = new Date();


    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const currentDayElement = document.querySelector(`[data-testid="currentDayOfTheWeek"]`);


    currentDayElement.textContent = daysOfTheWeek[today.getUTCDay()];


    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const milliSeconds = Date.now();

     currentUTCTimeElement.textContent = milliSeconds;
} 

updateDateTime();

setInterval(updateDateTime, 1000);





const updateDateTime = () => {
    const today = new Date();
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const currentDayElement = document.querySelector(`[data-testid="currentDayOfTheWeek"]`);
    currentDayElement.textContent = daysOfTheWeek[today.getUTCDay()];

    

    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // const hours = today.getUTCHours().toString().padStart(2, '0');
    // const minutes = today.getUTCMinutes().toString().padStart(2, '0');
    //  const seconds = today.getUTCSeconds().toString().padStart(2, '0');

    //  const milliseconds = ((hours * 3600) + (minutes * 60) + seconds) * 1000;

     


     const totalMilliseconds = today.getUTCHours() * (1 * 3600000) + today.getUTCMinutes() * 60000 + today.getUTCSeconds() * 1000 + today.getUTCMilliseconds();
     currentUTCTimeElement.textContent = `${totalMilliseconds}`;
    


} 

updateDateTime();

setInterval(updateDateTime, 1000);



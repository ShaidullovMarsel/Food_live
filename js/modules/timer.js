function timer(id, deadline) {
///Timer

function getTimerRemaining(endtime) {

    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0 ){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);
    }
        
return {
    'total' : t,
    'days' : days,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
};
}

function getZeroDown(num) {
    if (num >= 0 && num <10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

    function updateClock() {
        const t = getTimerRemaining(endtime);

        days.innerHTML = getZeroDown(t.days);
        hours.innerHTML = getZeroDown(t.hours);
        minutes.innerHTML = getZeroDown(t.minutes);
        seconds.innerHTML = getZeroDown(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock(id, deadline);
}

export default timer;
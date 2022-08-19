function calculateTimeAfterFifteenMinutes([arg1, arg2]) {
    let hours = parseInt(arg1);
    let minutes = parseInt(arg2);
    minutes += 15;

    if (minutes > 59) {
        hours += 1;
        minutes -= 60;
    }
    if (hours > 23) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
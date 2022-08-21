function checkTimeForFirm([arg1, arg2, arg3]) {
    let neededHours = parseInt(arg1);
    let availableDays = parseInt(arg2);
    let workers = parseInt(arg3);
    availableDays *= 0.9;
    let availableHours = Math.floor(workers * availableDays * 10);
    if (availableHours >= neededHours) {
        console.log(`Yes!${availableHours - neededHours} hours left.`);
    } else {
        console.log(`Not enough time!${neededHours - availableHours} hours needed.`);
    }
}
function sumSeconds([first, second, third]) {
    let timeFirst = parseInt(first);
    let timeSecond = parseInt(second);
    let timeThird = parseInt(third);
    
    let totalSeconds = timeFirst + timeSecond + timeThird;
    let minutes = totalSeconds / 60;
    let seconds = totalSeconds % 60;

    if (seconds < 10) {
        console.log(`${Math.trunc(minutes)}:0${seconds}`);
    } else {
        console.log(`${Math.trunc(minutes)}:${seconds}`);
    }
}
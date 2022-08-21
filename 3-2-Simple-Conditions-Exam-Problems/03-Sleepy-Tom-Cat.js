function calculate(arg1) {
    let restDays = parseInt(arg1);
    let timeForPlay = (restDays * 127) + ((365 - restDays) * 63);
    
    if (timeForPlay > 30000) {
        let time = (timeForPlay - 30000);
        let hours = Math.trunc(time / 60);
        let minutes = time - (hours * 60);
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        let time = (30000 - timeForPlay);
        let hours = Math.trunc(time / 60);
        let minutes = time - (hours * 60);
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
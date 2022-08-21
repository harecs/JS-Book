function calculateWaterInPool([arg1, arg2, arg3, arg4]) {
    let volume = parseInt(arg1);
    let pipe1 = parseInt(arg2);
    let pipe2 = parseInt(arg3);
    let hours = parseFloat(arg4);
    let water = (pipe1 + pipe2) * hours;

    if (water <= volume) {
        let percentageFull = Math.trunc((water / volume) * 100);
        let percentagePipe1 = Math.trunc(((pipe1 * hours) / water) * 100);
        let percentagePipe2 =  Math.trunc(((pipe2 * hours) / water) * 100);
        console.log(`The pool is ${percentageFull}% full. Pipe 1: ${percentagePipe1}%. Pipe 2: ${percentagePipe2}%.`);
    } else if (water > volume){
        let overflow = water - volume;
        console.log(`For ${hours} hours the pool overflows with ${Math.floor(overflow * 100) / 100} liters.`);
    }
}
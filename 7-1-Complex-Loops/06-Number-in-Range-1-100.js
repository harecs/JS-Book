function numberInRange(args) {
    let i = 0;
    let num = parseInt(args[i]);

    while (num < 1 || num > 100) {
        i++;
        console.log("Invalid number!");
        num = parseInt(args[i]);
    }

    console.log(`The number is: ${num}`);
}
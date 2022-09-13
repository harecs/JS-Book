function checkEven(args) {
    let i = 0;
    let num = 0;

    while (true) {
        num = parseInt(args[i]);
        
        if (num % 2 === 0) {
            break;
        } else {
            console.log("The number is not even.");
            i++;
        }
    }

    console.log(`Even number entered: ${num}`);
}
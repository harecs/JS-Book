function findMinNumber(args) {
    let n = Number(args[0]);
    let minNumber = Number(args[1]);

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }        
    }

    console.log(minNumber);
}
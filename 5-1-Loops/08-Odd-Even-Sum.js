function checkEvenAndOddSum(args) {
    let n = Number(args[0]);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += Number(args[i]);
        } else {
            oddSum += Number(args[i]);
        }
    }

    if (evenSum === oddSum) {
        console.log("Yes");
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}
function findElementEqualSum(args) {
    let n = Number(args[0]);
    let sum = 0;
    let biggestNumber = Number.NEGATIVE_INFINITY;
    let output = "";
    let sumOrDiff = "";

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(args[i]);
        sum += currentNumber;

        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        }
    }

    let sumExceptBiggestNumber = sum - biggestNumber;

    if (sumExceptBiggestNumber === biggestNumber) {
        output = "Yes";
        sumOrDiff = `Sum = ${biggestNumber}`;
    } else {
        output = "No";
        sumOrDiff = `Diff = ${Math.abs(sumExceptBiggestNumber - biggestNumber)}`;
    }

    console.log(output);
    console.log(sumOrDiff);
}
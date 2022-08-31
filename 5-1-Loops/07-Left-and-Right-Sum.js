function checkLeftAndRightSum(args) {
    let nLeft = Number(args[0]);
    let nRightStart = nLeft + 1;
    let nRightEnd = nLeft * 2;
    let sumLeft = 0;
    let sumRight = 0;
    let output = "";

    for (let i = 1; i <= nLeft; i++) {
        sumLeft += Number(args[i]);
    }

    for (let i = nRightStart; i <= nRightEnd; i++) {
        sumRight += Number(args[i]);       
    }

    if (sumLeft === sumRight) {
        output = `Yes, sum = ${sumLeft}`;
    } else {
        let diff = sumLeft - sumRight;
        output = `No, diff = ${Math.abs(diff)}`;
    }

    console.log(output);
}
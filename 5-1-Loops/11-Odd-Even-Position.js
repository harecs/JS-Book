function OddEvenPositionCheck(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;
    let evenSum = 0.0;
    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;
    
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);

        if (i % 2 !== 0) {
            oddSum += currentNum;

            if (currentNum > oddMax) {
                oddMax = currentNum;
            }
            if (currentNum < oddMin) {
                oddMin = currentNum;
            }
        } else if (i %2 === 0) {
            evenSum += currentNum;

            if (currentNum > evenMax) {
                evenMax = currentNum;
            }
            if (currentNum < evenMin) {
                evenMin = currentNum;
            }
        }
    }

    if (oddMin === 1000000000.0) {
        oddMin = "No";
    }
    if (oddMax === -1000000000.0) {
        oddMax = "No";
    }
    if (evenMin === 1000000000.0) {
        evenMin = "No";
    }
    if (evenMax === -1000000000.0) {
        evenMax = "No";
    }

    console.log("OddSum=" + oddSum + ",");
    console.log("OddMin=" + oddMin + ",");
    console.log("OddMax=" + oddMax + ",");
    console.log("EvenSum=" + evenSum + ",");
    console.log("EvenMin=" + evenMin + ",");
    console.log("EvenMax=" + evenMax);
}
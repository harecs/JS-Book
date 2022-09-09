function printSunglasses(input) {
    let n = Number(input);

    let topAndBottomRow = "*".repeat(n * 2) + " ".repeat(n) + "*".repeat(n * 2);
    console.log(topAndBottomRow);
    
    for (let i = 1; i <= n - 2; i++) {
        let nosePartIndex = 0;

        if (n % 2 === 0) {
            nosePartIndex = (n - 2) / 2;
        } else {
            nosePartIndex = Math.ceil((n - 2) / 2);
        }

        let lens = "*" + "/".repeat((n * 2) - 2) + "*";

        if (i === nosePartIndex) {
            lens += "|".repeat(n);
        } else {
            lens += " ".repeat(n);
        }

        lens += "*" + "/".repeat((n * 2) - 2) + "*";

        console.log(lens);
    }

    console.log(topAndBottomRow);
}
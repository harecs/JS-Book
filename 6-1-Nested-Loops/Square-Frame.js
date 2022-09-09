function printSquareFrame(input) {
    let n = Number(input);

    let topRow = "+" + " -".repeat(n - 2) + " +";
    console.log(topRow);

    for (let i = 0; i < n - 2; i++) {
        let middleRow = "|";

        for (let j = 0; j < n - 2; j++) {
            middleRow += " -";
        }

        middleRow += " |";
        console.log(middleRow);
    }

    let bottormRow = "+" + " -".repeat(n - 2) + " +";
    console.log(bottormRow);
}
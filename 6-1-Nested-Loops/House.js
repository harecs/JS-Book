function printHouse(input) {
    let n = parseInt(input);

    let stars = 1;
    if (n % 2 === 0) {
        stars++;
    }

    let roofLength = Math.ceil(n / 2);

    for (let i = 0; i < roofLength; i++) {
        let padding = (n - stars) / 2;

        let line = "-".repeat(padding) + "*".repeat(stars) + "-".repeat(padding);
        console.log(line);

        stars += 2;
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let line = "|" + "*".repeat(n - 2) + "|";
        console.log(line);
    }
}
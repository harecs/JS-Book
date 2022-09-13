function sumDigits(input) {
    let num = parseInt(input);
    let sum = 0;

    do {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    } while (num > 0);

    console.log("Sum of digits: " + sum);
}
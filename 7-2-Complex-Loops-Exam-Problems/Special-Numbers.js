function printSpecialNumbers(input) {
    let n = parseInt(input);
    let output = "";

    for (let number = 1111; number <= 9999; number++) {
        let count = 0;

        for (let index = 0; index < 4; index++) {
            let numberChars = number.toString();
            let currentChar = Number(numberChars[index]);

            if (n % currentChar === 0) {
                count++;
            }

            if (count === 4) {
                output += number + " ";
            }
        }
    }

    console.log(output);
}

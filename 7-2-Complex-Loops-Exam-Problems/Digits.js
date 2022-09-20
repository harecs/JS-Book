function printDigits([input]) {
    let numberText = input;
    let number = parseInt(numberText);
    let digit1 = parseInt(numberText[0]);
    let digit2 = parseInt(numberText[1]);
    let digit3 = parseInt(numberText[2]);

    let n = digit1 + digit2;
    let m = digit1 + digit3;

    let output = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (number % 5 === 0) {
                number -= digit1;
            } else if (number % 3 === 0) {
                number -= digit2;
            } else if (number % 5 !== 0 && number % 3 !== 0) {
                number += digit3;
            }

            output += `${number} `;
        }

        console.log(output);
        output = "";
    }
}
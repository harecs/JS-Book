function printNumberWithWords(input) {
    let number = parseInt(input);
    let firstNumber = "";
    let secondNumber = "";

    if (number >= 0 && number < 20) {
        if (number === 0) {
            console.log("zero");
        } else if (number === 1) {
            console.log("one");
        } else if (number === 2) {
            console.log("two");
        } else if (number === 3) {
            console.log("three");
        } else if (number === 4) {
            console.log("four");
        } else if (number === 5) {
            console.log("five");
        } else if (number === 6) {
            console.log("six");
        } else if (number === 7) {
            console.log("seven");
        } else if (number === 8) {
            console.log("eight");
        } else if (number === 9) {
            console.log("nine");
        } else if (number === 10) {
            console.log("ten");
        } else if (number === 11) {
            console.log("eleven");
        } else if (number === 12) {
            console.log("twelve");
        } else if (number === 13) {
            console.log("thirteen");
        } else if (number === 14) {
            console.log("fourteen");
        } else if (number === 15) {
            console.log("fifteen");
        } else if (number === 16) {
            console.log("sixteen");
        } else if (number === 17) {
            console.log("seventeen");
        } else if (number === 18) {
            console.log("eighteen");
        } else if (number === 19){
            console.log("nineteen");
        }
    } else if (number > 19 && number < 100) {
        if (Math.trunc(number / 10) === 2) {
            firstNumber = "twenty";
        } else if (Math.trunc(number / 10) === 3) {
            firstNumber = "thirty";
        } else if (Math.trunc(number / 10) === 4) {
            firstNumber = "forty";
        } else if (Math.trunc(number / 10) === 5) {
            firstNumber = "fifty";
        } else if (Math.trunc(number / 10) === 6) {
            firstNumber = "sixty";
        } else if (Math.trunc(number / 10) === 7) {
            firstNumber = "seventy";
        } else if (Math.trunc(number / 10) === 8) {
            firstNumber = "eighty";
        } else if (Math.trunc(number / 10) === 9) {
            firstNumber = "ninety";
        }
        if (number % 10 === 1) {
            secondNumber = "one";
        } else if (number % 10 === 2) {
            secondNumber = "two";
        } else if (number % 10 === 3) {
            secondNumber = "three";
        } else if (number % 10 === 4) {
            secondNumber = "four";
        } else if (number % 10 === 5) {
            secondNumber = "five";
        } else if (number % 10 === 6) {
            secondNumber = "six";
        } else if (number % 10 === 7) {
            secondNumber = "seven";
        } else if (number % 10 === 8) {
            secondNumber = "eight";
        } else if (number % 10 === 9) {
            secondNumber = "nine";
        }
        if (number % 10 === 0){
            console.log(`${firstNumber}`);
        } else if (number % 10 !== 0) {
            console.log(`${firstNumber} ${secondNumber}`);
        }
    } else if (number === 100){
        console.log("one hundred");
    } else {
        console.log("invalid number");
    }
}
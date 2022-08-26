function calculate([arg1, arg2, arg3]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    let result = 0;
    let printedResult = "";
    let evenOrOdd = "";

    switch (operator) {
        case "+":
            result = num1 + num2;
            printedResult = `${num1} + ${num2} = ${result} - `;
            break;
        case "-":
            result = num1 - num2;
            printedResult = `${num1} - ${num2} = ${result} - `;
            break;
        case "*":
            result = num1 * num2;
            printedResult = `${num1} * ${num2} = ${result} - `;
            break;
        case "/":
            if (num2 === 0) {
                printedResult = `Cannot divide ${num1} by zero`
            } else {
                result = (num1 / num2).toFixed(2);
                printedResult = `${num1} / ${num2} = ${result}`;
            }
            break;
        case "%":
            if (num2 === 0) {
                printedResult = `Cannot divide ${num1} by zero`
            } else {
                result = num1 % num2;
                printedResult = `${num1} % ${num2} = ${result}`;   
            }
            break;
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
            if ((result % 2) === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            printedResult += evenOrOdd;
    }

    console.log(printedResult);
}
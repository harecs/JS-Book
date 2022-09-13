function calculateFactorial(input) {
    let n = Number(input);
    let fact = 1;

    do {
        fact *= n;
        n--;
    } while (n > 1);

    console.log(fact);
}
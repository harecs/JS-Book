function calculateFibonacci(input) {
    let n = parseInt(input);
    let f0 = 1;
    let f1 = 1;

    for (let i = 0; i < n - 1; i++) {
        let fNext = f0 + f1;
        f0 = f1;
        f1 = fNext;        
    }

    console.log(f1);
}
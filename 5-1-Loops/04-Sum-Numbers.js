function sumNumbers(args) {
    let n = Number(args[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let number = parseInt(args[i]);
        sum += number;        
    }

    console.log(sum);
}
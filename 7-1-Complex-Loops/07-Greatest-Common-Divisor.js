function greatestCommonDivisor([arg1, arg2]) {
    let a = parseInt(arg1);
    let b = parseInt(arg2);

    while (b !== 0) {
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    console.log("GCD = " + a);
}
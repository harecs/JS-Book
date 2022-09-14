function printNumbers([arg1, arg2, arg3]) {
    let n = parseInt(arg1);
    let m = parseInt(arg2);
    let s = parseInt(arg3);
    let output = "";
    let stop = false;

    for (let i = m; i > n; i--) {
        if (stop === false) {
            if (i % 2 === 0 && i % 3 === 0) {
                if (i === s) {
                    stop = true;
                    break;
                }
                output += i + " ";
            }
        }
    }

    console.log(output);
}
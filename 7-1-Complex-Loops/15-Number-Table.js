function printNumberTable(input) {
    let n = parseInt(input);
    let result = "";

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            let num = row + col + 1;

            if (num > n) {
                num = 2 * n - num;
            }

            result = result + num + " ";
        }

        console.log(result);
        result = "";
    }
}
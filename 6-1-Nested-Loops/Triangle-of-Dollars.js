function printTriangle(input) {
    let n = Number(input);

    for (let i = 1; i <= n; i++) {
        let ouptut = "$";

        for (let j = 1; j < i; j++) {
            ouptut += " $";
        }

        console.log(ouptut);
    }
}
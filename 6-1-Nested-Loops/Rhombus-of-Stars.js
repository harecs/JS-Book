function printRhombus(input) {
    let n = Number(input);

    for (let i = 1; i <= n; i++) {
        let line = "";
        line += " ".repeat(n - i);

        for (let j = n - i; j < n; j++) {
            line += "* ";
        }
        line += " ".repeat(n - i);

        console.log(line);
    }

    for (let i = n - 1; i >= 1; i--) {
        let line = "";
        line += " ".repeat(n - i);

        for (let j = n - i; j < n; j++) {
            line += "* ";
        }
        line += " ".repeat(n - i);

        console.log(line);
        
    }
}
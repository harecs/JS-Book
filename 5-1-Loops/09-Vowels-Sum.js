function sumVowels(input) {
    let word = input;
    let sum = 0;
    let n = word.length;

    for (let i = 0; i < n; i++) {
        let symbol = word[i];

        switch (symbol) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }

    console.log(sum);
}
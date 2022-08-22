function checkForInvalidNumber(input) {
    let number = Number(input);

    if (!(number >= 100 && number <= 200 || number === 0)) {
        console.log("invalid");
    }
}
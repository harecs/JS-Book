function chooseTheCheapestTransport([arg1, arg2]) {
    let kilometers = parseInt(arg1);
    let partOfTheDay = arg2.toString();
    let price = 0;

    if (kilometers < 20) {
        if (partOfTheDay === "day") {
            price = 0.70 + kilometers * 0.79;
        } else if (partOfTheDay === "night") {
            price = 0.70 + kilometers * 0.90;
        }
    } else if (kilometers >= 20 && kilometers < 100) {
        price = kilometers * 0.09;
    } else if (kilometers >= 100) {
        price = kilometers * 0.06;
    }

    console.log(price);
}
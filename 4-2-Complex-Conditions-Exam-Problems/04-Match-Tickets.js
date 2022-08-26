function checkMoneyForTickets([arg1, arg2, arg3]) {
    let money = parseFloat(arg1);
    let ticketType = arg2.toLowerCase();
    let peopleCount = parseInt(arg3);

    if (peopleCount <= 4) {
        money *= 0.25;
    } else if (peopleCount <= 9) {
        money *= 0.40;
    } else if (peopleCount <= 24) {
        money *= 0.50;
    } else if (peopleCount <= 49) {
        money *= 0.60;
    } else if (peopleCount >= 50) {
        money *= 0.75;
    }

    switch (ticketType) {
        case "normal":
            money -= peopleCount * 249.99;
            break;
        case "vip":
            money -= peopleCount * 499.99;
            break;
    }

    if (money >= 0) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
    } else {
        money *= -1;
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }
}
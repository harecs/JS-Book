function checkMoneyEnough(args) {
    let money = parseFloat(args[0]);
    let toYearLiving = parseInt(args[1]);
    let output = ``;
    let age = 18;

    for (let i = 1800; i <= toYearLiving; i++) {
        if (i % 2 === 0) {
            money -= 12000;
        } else {
            money -= (12000 + 50 * age);
        }
        age++;
    }

    if (money >= 0) {
        output = `Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`;
    } else if (money < 0) {
        output = `He will need ${Math.abs(money.toFixed(2))} dollars to survive.`;
    }

    console.log(output);
}
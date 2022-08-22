function calcualateFruitsPrice([arg1, arg2, arg3]) {
    let fruitType = arg1.toLowerCase();
    let day = arg2.toLowerCase();
    let quantity = parseFloat(arg3);
    let price = 0;
    let error = false;

    if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        if (fruitType === "banana") {
            price = 2.50;
        } else if (fruitType === "apple") {
            price = 1.20;
        } else if (fruitType === "orange") {
            price = 0.85;
        } else if (fruitType === "grapefruit") {
            price = 1.45;
        } else if (fruitType === "kiwi") {
            price = 2.70;
        } else if (fruitType === "pineapple") {
            price = 5.50;
        } else if (fruitType === "grapes") {
            price = 3.85;
        } else {
            error = true;
        }
    } else if (day === "saturday" || day == "sunday") {
        if (fruitType === "banana") {
            price = 2.70;
        } else if (fruitType === "apple") {
            price = 1.25;
        } else if (fruitType === "orange") {
            price = 0.90;
        } else if (fruitType === "grapefruit") {
            price = 1.60;
        } else if (fruitType === "kiwi") {
            price = 3.00;
        } else if (fruitType === "pineapple") {
            price = 5.60;
        } else if (fruitType === "grapes") {
            price = 4.20;
        } else {
            error = true;
        }
    } else {
        error = true;
    }

    if (error) {
        console.log("error");
    } else {
        let totalPrice = quantity * price;
        console.log(totalPrice.toFixed(2));
    }
}
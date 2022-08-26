function chooseTripDestination([arg1, arg2]) {
    let budget = parseFloat(arg1);
    let season = arg2.toLowerCase();

    let destination = "Somewhere in ";
    let tripPrice = 0;
    let sleepingIn = "";
    let percentageBudget = 0;

    switch (season) {
        case "summer":
            sleepingIn = "Camp - ";
            break;
        case "winter":
            sleepingIn = "Hotel - ";
            break;
    }

    if (budget <= 100) {
        destination += "Bulgaria";
        switch (season) {
            case "summer":
                percentageBudget = 0.30;
                break;
            case "winter":
                percentageBudget = 0.70;
                break;
        }
    } else if (budget <= 1000) {
        destination += "Balkans";
        switch (season) {
            case "summer":
                percentageBudget = 0.40;
                break;
            case "winter":
                percentageBudget = 0.80;
                break;
        }
    } else if (budget > 1000) {
        destination += "Europe";
        percentageBudget = 0.90;
        sleepingIn = "Hotel - ";
    }

    tripPrice = (budget * percentageBudget).toFixed(2);

    console.log(destination);
    console.log(sleepingIn + tripPrice);
}
function calculateLogisticsStats(args) {
    let cargoCount = Number(args[0]);
    let totalPrice = 0;
    let totalWeight = 0;
    let busPercentage = 0;
    let truckPercentage = 0;
    let trainPercentage = 0;

    for (let currentCargoIndex = 1; currentCargoIndex <= cargoCount; currentCargoIndex++) {
        let currentCargoWeight = Number(args[currentCargoIndex]);

        if (currentCargoWeight <= 3) {
            busPercentage += currentCargoWeight;
            totalPrice += (currentCargoWeight * 200);
            totalWeight += currentCargoWeight;
        } else if (currentCargoWeight > 3 && currentCargoWeight <= 11) {
            truckPercentage += currentCargoWeight;
            totalPrice += (currentCargoWeight * 175);
            totalWeight += currentCargoWeight;
        } else if (currentCargoWeight > 11) {
            trainPercentage += currentCargoWeight;
            totalWeight += currentCargoWeight;
            totalPrice += (currentCargoWeight * 120);
        }
    }

    let pricePerWeight = (totalPrice / totalWeight).toFixed(2);
    busPercentage = ((busPercentage / totalWeight) * 100).toFixed(2);
    truckPercentage = ((truckPercentage / totalWeight) * 100).toFixed(2);
    trainPercentage = ((trainPercentage / totalWeight) * 100).toFixed(2);

    console.log(pricePerWeight);
    console.log(busPercentage + "%");
    console.log(truckPercentage + "%");
    console.log(trainPercentage + "%");
}

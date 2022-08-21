function checkHarvest([arg1, arg2, arg3, arg4]) {
    let area = parseInt(arg1) * 0.4;
    let grapePerAreaMeter = parseFloat(arg2);
    let neededWine = parseInt(arg3);
    let workers = parseInt(arg4);
    let neededGrape = neededWine * 2.5;
    let totalGrape = area * grapePerAreaMeter;
    
    if (totalGrape < neededGrape) {
        console.log(`It will be a tough winter! More ${Math.floor((neededGrape - totalGrape) / 2.5)} liters wine needed.`);
    } else {
        let totalWine = totalGrape / 2.5;
        let leftWine = totalWine - neededWine;
        let winePerWorker = leftWine / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
}
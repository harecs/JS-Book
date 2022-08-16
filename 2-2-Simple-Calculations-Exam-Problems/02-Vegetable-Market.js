function calculateEarnings([n, m, nKg, mKg]) {
    priceVegetable = parseFloat(n);
    priceFruit = parseFloat(m);
    kgVegetable = parseFloat(nKg);
    kgFruit = parseFloat(mKg);

    totalEarningsInEuro = ((kgVegetable * priceVegetable) + (kgFruit * priceFruit)) / 1.94;

    console.log(totalEarningsInEuro);
}
function calculateHotelPrice([arg1, arg2]) {
    let month = arg1.toLowerCase();
    let days = Number(arg2);
    
    let priceStudio = 0;
    let priceApartment = 0;
    let totalPriceStudio = 0;
    let totalPriceApartment = 0;
    
    switch (month) {
        case "may":
        case "october":
            priceStudio = 50;
            priceApartment = 65;
            if (days > 7 && days <= 14) {
                priceStudio *= 0.95;
            } else if (days > 14) {
                priceStudio *= 0.70;
            }
            break;
        case "june":
        case "september":
            priceStudio = 75.20;
            priceApartment = 68.70;
            if (days > 14) {
                priceStudio *= 0.80;
            }
            break;
        case "july":
        case "august":
            priceStudio = 76;
            priceApartment = 77;
            break;
    }

    if (days > 14) {
        priceApartment *= 0.90;
    }

    totalPriceStudio = (days * priceStudio).toFixed(2);
    totalPriceApartment = (days * priceApartment).toFixed(2);

    let outputStudio = `Studio: ${totalPriceStudio} lv.`;
    let outputApartment = `Apartment: ${totalPriceApartment} lv.`;

    console.log(outputApartment);
    console.log(outputStudio);
}
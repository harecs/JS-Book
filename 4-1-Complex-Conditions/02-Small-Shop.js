function calculatePrice([arg1, arg2, arg3]) {
    let product = arg1.toLowerCase();
    let city = arg2.toLowerCase();
    let count = parseFloat(arg3);

    if (city === "sofia") {
        if (product === "coffee") {
            console.log((count * 0.50).toFixed(2));
        } else if (product === "water") {
            console.log((count * 0.80).toFixed(2));
        } else if (product === "beer") {
            console.log((count * 1.20).toFixed(2));
        } else if (product === "sweets") {
            console.log((count * 1.45).toFixed(2));
        } else if (product === "peanuts") {
            console.log((count * 1.60).toFixed(2));
        }
    } else if (city === "plovdiv") {
        if (product === "coffee") {
            console.log((count * 0.40).toFixed(2));
        } else if (product === "water") {
            console.log((count * 0.70).toFixed(2));
        } else if (product === "beer") {
            console.log((count * 1.15).toFixed(2));
        } else if (product === "sweets") {
            console.log((count * 1.30).toFixed(2));
        } else if (product === "peanuts") {
            console.log((count * 1.50).toFixed(2));
        }
    } else if (city === "varna") {
        if (product === "coffee") {
            console.log((count * 0.45).toFixed(2));
        } else if (product === "water") {
            console.log((count * 0.70).toFixed(2));
        } else if (product === "beer") {
            console.log((count * 1.10).toFixed(2));
        } else if (product === "sweets") {
            console.log((count * 1.35).toFixed(2));
        } else if (product === "peanuts") {
            console.log((count * 1.55).toFixed(2));
        }
    }
}
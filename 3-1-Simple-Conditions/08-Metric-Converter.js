function metricConverter([arg1, arg2, arg3]) {
    let size = parseFloat(arg1);
    let convertingFrom = arg2.toLowerCase();
    let convertingTo = arg3.toLowerCase();

    if (convertingFrom === "mm") {
        size /= 1000;
    } else if (convertingFrom === "cm") {
        size /= 100;
    } else if (convertingFrom === "mi") {
        size /= 0.000621371192;
    } else if (convertingFrom === "in") {
        size /= 39.3700787;
    } else if (convertingFrom === "km") {
        size /= 0.001;
    } else if (convertingFrom === "ft") {
        size /= 3.2808399;
    } else if (convertingFrom === "yd") {
        size /= 1.0936133;
    }

    if (convertingTo === "mm") {
        size *= 1000;
    } else if (convertingTo === "cm") {
        size *= 100;
    } else if (convertingTo === "mi") {
        size *= 0.000621371192;
    } else if (convertingTo === "in") {
        size *= 39.3700787;
    } else if (convertingTo === "km") {
        size *= 0.001;
    } else if (convertingTo === "ft") {
        size *= 3.2808399;
    } else if (convertingTo === "yd") {
        size *= 1.0936133;
    }

    console.log(size);
}
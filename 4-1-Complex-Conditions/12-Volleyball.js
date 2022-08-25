function calculateVolleyballPerYear([arg1, arg2, arg3]) {
    let yearType = arg1.toLowerCase();
    let daysOff = parseInt(arg2);
    let weekendsHome = parseInt(arg3);

    let totalVolleyball = ((48 - weekendsHome) * 3/4) + weekendsHome + (daysOff * 2/3);
    if (yearType === "leap") {
        totalVolleyball *= 1.15;
        console.log(Math.floor(totalVolleyball));
    } else if (yearType === "normal") {
        console.log(Math.floor(totalVolleyball));
    }
}
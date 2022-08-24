function calculateCinemaIncome([arg1, arg2, arg3]) {
    let projection = arg1.toLowerCase();
    let rows = parseInt(arg2);
    let columns = parseInt(arg3);
    let seats = rows * columns;

    switch (projection) {
        case "premiere":
            console.log(`${(seats * 12).toFixed(2)} leva`);
            break;
        case "normal":
            console.log(`${(seats * 7.50).toFixed(2)} leva`);
            break;
        case "discount":
            console.log(`${(seats * 5).toFixed(2)} leva`);
            break;
    }
}
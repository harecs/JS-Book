function calculateFigureArea([arg1, arg2, arg3]) {
    let figure = arg1.toLowerCase();
    // to string
    if (figure === "square") {
        let side =  Number(arg2);
        console.log((side * side).toFixed(3));
    } else if (figure === "rectangle") {
        let sideFirst = Number(arg2);
        let sideSecond = Number(arg3);
        console.log((sideFirst * sideSecond).toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(arg2);
        console.log((Math.PI * radius * radius).toFixed(3));
    } else if (figure === "triangle") {
        let side = Number(arg2);
        let height = Number(arg3);
        console.log(((side * height) / 2).toFixed(3));
    }
}
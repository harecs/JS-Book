function calculate([arg1, arg2]) {
    let l = parseFloat(arg1);
    let w = parseFloat(arg2);

    let rows = (l * 100) / 120;
    let desks = ((w * 100) - 100) / 70;
    let result = Math.floor(rows) * Math.floor(desks) - 3;

    console.log(result);
}
function calculateNeededRecourses([arg1, arg2, arg3, arg4, arg5]) {
    let n = parseFloat(arg1);
    let w = parseFloat(arg2);
    let l = parseFloat(arg3);
    let m = parseFloat(arg4);
    let o = parseFloat(arg5);
    let area = n * n;
    let tile = w * l;
    let bench = m * o;

    let neededTiles = (area - bench) / tile;
    let neededTime = neededTiles * 0.2;

    console.log(Math.round(neededTiles * 100) / 100);
    console.log(Math.round(neededTime * 100) / 100);
}
function divisionHistogram(args) {
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        
        if (currentNum % 2 === 0) {
            p1++;
        }
        if (currentNum % 3 === 0) {
            p2++;
        }
        if (currentNum % 4 === 0) {
            p3++;
        }
    }

    p1 = (p1 / n) * 100;
    p2 = (p2 / n) * 100;
    p3 = (p3 / n) * 100;

    let outputP1 = p1.toFixed(2) + "%";
    let outputP2 = p2.toFixed(2) + "%";
    let outputP3 = p3.toFixed(2) + "%";

    console.log(outputP1);
    console.log(outputP2);
    console.log(outputP3);
}
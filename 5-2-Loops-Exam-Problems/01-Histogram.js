function createHistogram(args) {
    let n = Number(args[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum < 200) {
            p1++;
        } else if (currentNum >= 200 && currentNum <= 399) {
            p2++;
        } else if (currentNum >= 400 && currentNum <= 599) {
            p3++;
        } else if (currentNum >= 600 && currentNum <= 799) {
            p4++;
        } else if (currentNum >= 800) {
            p5++;
        }
    }

    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    p4 = p4 / n * 100;
    p5 = p5 / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
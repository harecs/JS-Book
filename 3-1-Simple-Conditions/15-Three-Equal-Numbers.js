function checkEqualNumbers([arg1, arg2, arg3]) {
    let numFirst = Number(arg1);
    let numSecond = Number(arg2);
    let numThird = Number(arg3);

    if (numFirst === numSecond && numFirst === numThird && numSecond === numThird) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
 function checkPointInRectangle([arg1, arg2, arg3, arg4, arg5, arg6]) {
    let x1 = parseFloat(arg1);
    let y1 = parseFloat(arg2);
    let x2 = parseFloat(arg3);
    let y2 = parseFloat(arg4);
    let x = parseFloat(arg5);
    let y = parseFloat(arg6);

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        console.log("Inside");
    } else {
        console.log("Outside");
    }
 }
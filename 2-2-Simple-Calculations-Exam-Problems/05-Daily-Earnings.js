function claculateDailyIncome ([arg1, arg2, arg3]) {
    let workingDays = parseInt(arg1);
    let dailyIncome = parseFloat(arg2);
    let usdToBgn = (arg3);

    let monthlyIncome = workingDays * dailyIncome;
    let yearIncome = monthlyIncome * 12 + monthlyIncome * 2.5;
    yearIncome *= 0.75;
    let yearIncomeBgn = yearIncome*  usdToBgn;
    let finalDailyIncomeBgn = yearIncomeBgn / 365;

    console.log(finalDailyIncomeBgn.toFixed(2));
}
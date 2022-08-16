function calculateMoney([arg1, arg2, arg3]) {
    let btc = parseInt(arg1);
    let yuan = parseFloat(arg2);
    let commission = parseFloat(arg3) / 100;

    let btcInEuro = (btc * 1168) / 1.95;
    let yuanInEuro = (yuan * 0.264) / 1.95;
    let money = (btcInEuro + yuanInEuro);
    money -= commission * money;

    console.log(money.toFixed(2));
}
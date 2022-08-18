function calculateFahrenheit([arg1]) {
    let celsius = parseFloat(arg1);
    let fahrenheit = celsius * (9/5) + 32;
    console.log(fahrenheit.toFixed(2));
}
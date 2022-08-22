function checkFruitOrVegetable([input]) {
    let product = input.toLowerCase();

    if (product === "banana" || product === "apple" || product === "kiwi" || product === "cherry" || product === "lemon" || product === "grapes") {
        console.log("fruit");
    } else if (product === "tomato" || product === "cucumber" || product === "pepper" || product === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
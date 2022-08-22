function checkPersonalTitle([arg1, arg2]) {
    let age = parseFloat(arg1);
    let maleOfFemale = arg2.toLowerCase();

    if (age >= 16) {
        if (maleOfFemale === "m") {
            console.log("Mr.");
        } else if (maleOfFemale === "f") {
            console.log("Ms.");
        }
    } else {
        if (maleOfFemale === "m") {
            console.log("Master");
        } else if (maleOfFemale === "f") {
            console.log("Miss");
        }
    }
}
function generateStupidPasswords(input) {
    const n = parseInt(input[0]);
    const l = parseInt(input[1]);
    let output = "";

    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3ascii = 97; s3ascii < 97 + l; s3ascii++) {
                let s3 = String.fromCharCode(s3ascii);
                
                for (let s4ascii = 97; s4ascii < 97 + l; s4ascii++) {
                    let s4 = String.fromCharCode(s4ascii);

                    for (let s5 = Math.max(s1, s2) + 1; s5 <= n; s5++) {
                        let password = `${s1}${s2}${s3}${s4}${s5}`;
                        output += password + " ";
                    }
                }
            }
        }
    }

    console.log(output);
}
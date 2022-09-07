function checkPatients(args) {
    let n = Number(args[0]);
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctorsCount = 7;

    for (let i = 1; i <= n; i++) {
        let patientsCount = parseInt(args[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctorsCount++;
        }
        if (patientsCount < doctorsCount) {
            treatedPatients += patientsCount;
        } else {
            treatedPatients += doctorsCount;
            untreatedPatients += (patientsCount - doctorsCount);
        }
    }

    let treatedOutput = `Treated patients: ${treatedPatients}.`;
    let untreatedOutput = `Untreated patients: ${untreatedPatients}.`;

    console.log(treatedOutput);
    console.log(untreatedOutput);
}
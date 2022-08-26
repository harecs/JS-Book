function checkIfOnTimeForExam([arg1, arg2, arg3, arg4]) {
    let examHours = parseInt(arg1);
    let examMinutes = parseInt(arg2);
    let arrivalHours = parseInt(arg3);
    let arrivalMinutes = parseInt(arg4);

    if (examHours === arrivalHours && examMinutes === arrivalMinutes) {
        console.log("on time");
        return;
    }

    let late = "Late";
    let onTime = "On time";
    let early = "Early";
    let studentArrival = late;

    let examTime = (examHours * 60) + examMinutes;
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes;
    let totalMinutesDifference = arrivalTime - examTime;

    if (totalMinutesDifference < -30) {
        studentArrival = early;
    } else if (totalMinutesDifference < 0) {
        studentArrival = onTime;
    } else if (totalMinutesDifference === 0) {
        studentArrival = onTime;
    }

    let result = "";
    if (totalMinutesDifference != 0) {
        let hoursDifference = Math.abs(~~(totalMinutesDifference / 60));
        let minutesDifference = Math.abs(totalMinutesDifference % 60);

        if (hoursDifference > 0) {
            result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
        } else {
            result = minutesDifference + " minutes";
        }

        if (totalMinutesDifference < 0) {
            result += " before the start";
        } else {
            result += " after the start";
        }

        console.log(studentArrival);
        if (result) {
            console.log(result);
        }
    }
}
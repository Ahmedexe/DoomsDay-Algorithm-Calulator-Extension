const year = document.querySelectorAll("#year")[0];
const month = document.querySelectorAll("#month")[0];
const day = document.querySelectorAll("#day")[0];
const btn = document.querySelectorAll("button")[0];
const bar = document.querySelectorAll(".bar")[0];

btn.addEventListener("click", function() {
    var yearVal = year.value
    var monVal = month.value
    var dayVal = day.value


    if (isNumber(yearVal) && isNumber(monVal) && isNumber(dayVal)) {

        bar.innerHTML = DoomsDayAlg(parseInt(yearVal), parseInt(monVal), parseInt(dayVal));
    } else {
        bar.innerHTML = "All Values Must be Integers";
    }
})

function isNumber(value) {
    if (!isNaN(value)) {
        return Number.isInteger(parseFloat(value));
    } else {
        return false;
    }
}

function DoomsDayAlg(year, month, day) {

    // define some functions/lists and needed info

    let days = ["Sunday", "Monday", "Tuesday", "Wednseday", "Thusrday", "Friday", "Saturday"]

    let isLeap = () => {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }


    let anchorDayIdx = () => {
        let c = Math.floor(year / 100);
        return c % 4
    }



    // calculation 1:
    let calc1 = Math.floor((year % 100) / 12)


    // calculation 2:
    let calc2 = (year % 100) - (calc1 * 12);


    // calculation 3:
    let calc3 = Math.floor(calc2 / 4);

    // calculation 4:
    let calc4 = anchorDayIdx();

    // Doomsday of the year:
    let sumOfCalcs = calc1 + calc2 + calc3 + calc4;
    let doomsDayIdx = sumOfCalcs % 7



    //test
    return days[doomsDayIdx];

}
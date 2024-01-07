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
    
}
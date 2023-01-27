let myLat = 45.51;
let myLong = -122.84;


setInterval(displayTime, 1000);


$(document).ready(function() {
    var times = SunCalc.getTimes(new Date(), myLat, myLong);
    document.getElementById('sunrise').innerText = "Sunrise: " + formatTime(times.sunrise);
    document.getElementById('sunset').innerText = "Sunset: " + formatTime(times.sunset);
    document.body.className = getBackground(new Date(),times.sunrise,times.sunset);
});

function getBackground(thisTime,sunrise,sunset) {
	var n = thisTime.getHours();
    let bg_class = "day";
    if ((n >= sunrise.getHours() -1) && (n <= sunrise.getHours() + 1)) 
        bg_class = "sunrise";
    else if ((n >= sunset.getHours() - 1) && n <= (sunset.getHours() + 1))
        bg_class = "sunset";
	else if ((n >= (sunset.getHours() + 1)) || (n <= sunrise.getHours() - 1))
        bg_class = "night";
    return bg_class;
}


function formatTime(thisTime, showSecs = false) {
    let hrs = thisTime.getHours();
    let mins = thisTime.getMinutes();
    let secs = thisTime.getSeconds();
    let period = "AM";
    if (hrs > 12) {
        hrs -= 12;
        period = "PM";
    }
    if (hrs === 0) {
        hrs = 12;
        period = "AM"
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    let time = hrs + ":" + mins + period;
    if (showSecs) {
        secs = secs < 10 ? "0" + secs : secs;
        time = hrs + ":" + mins + ":" + secs + period;
    }
    return time;
}


function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let thisDay = timeNow.getDate();
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "AM";

    if (minutes % 5 === 0) {
        var times = SunCalc.getTimes(timeNow, myLat, myLong);
        document.getElementById('sunrise').innerText = "Sunrise: " + formatTime(times.sunrise);
        document.getElementById('sunset').innerText = "Sunset: " + formatTime(times.sunset);
        document.body.className = getBackground(timeNow,times.sunrise,times,sunset);
    }

    let time = formatTime(timeNow,true);
    document.getElementById('Clock').innerHTML = time + "<br/>" + today + "<br/>" + months + " " + thisDay;

}
displayTime();
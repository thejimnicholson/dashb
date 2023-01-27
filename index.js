setInterval(displayTime, 1000);

$(document).ready(function(){

    var times = SunCalc.getTimes(new Date(), 45.51, -122.84);
    document.getElementById('sunrise').innerText = "Sunrise: " + times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
    document.getElementById('sunset').innerText = "Sunset: " + times.sunset.getHours() + ':' + times.sunset.getMinutes();
	var d = new Date();
	var n = d.getHours();
	if ((n > (times.sunset.getHours() + 1)) || (n < times.sunrise.getHours() -1))
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n >= (times.sunset.getHours() - 1) && n <= (times.sunset.getHours() + 1))
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});

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

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + "<br/>" + today + "<br/>" + months + " " + thisDay + " " + year;

}
displayTime();
// function toUTC(date){
//     return date.toLocaleString('tr-TR', {
//                                 timeZone: 'Asia/Istanbul',
//                                 year: 'numeric',
//                                 month: '2-digit',
//                                 day: '2-digit',
//                                 hour: '2-digit',
//                                 minute: '2-digit',
//                                 second: '2-digit',
//                                 timeZoneName: 'short'
//     })
// }

// const wedding_ist = new Date(
//         2023,
//         9, 
//         28,
//         17,
//         0,
//         0
// );

// const wedding_ant = new Date(
//         2023,
//         9, 
//         21,
//         17,
//         0,
//         0
// );

// var now = new Date();

// var now = new Date();


// document.getElementById("day").innerText = rest_data[0];
// document.getElementById("hour").innerText = rest_data[1];
// document.getElementById("min").innerText = rest_data[2];
// document.getElementById("sec").innerText = rest_data[3];

// The data/time we want to countdown to
var countDownDate = new Date("Oct 28, 2023 17:00:00").getTime();

var date = new Date();

console.log(date);

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;

console.log(timeleft);
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("day").innerHTML = days 
document.getElementById("hour").innerHTML = hours 
document.getElementById("min").innerHTML = minutes
document.getElementById("sec").innerHTML = seconds
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);
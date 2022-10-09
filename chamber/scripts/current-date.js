const date = new Date();
const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let weekday = dayList[date.getDay()];
let day = date.getDate();
let month = monthList[date.getMonth()];
let year = date.getFullYear();

let currentDate = `${weekday}, ${day} ${month} ${year}`;

document.getElementById("current-date").innerHTML = currentDate
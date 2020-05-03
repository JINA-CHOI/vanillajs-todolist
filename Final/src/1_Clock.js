
/*
1) Clock.
2) Username Persistance.
3) To Do List.
4) Random Background Image.
5) Weather with Geolocation. 
*/

const clockOperation = document.querySelector(".clockZone"),
    clockShowing = clockOperation.querySelector(".clock");
const monthNames=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];    
const weekNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

function Time(){
    const date= new Date(),
     year = date.getFullYear(),
     month = monthNames[date.getMonth()],
     day = date.getDate(),
     week = weekNames[date.getDay()],
     hr= date.getHours(),
     min = date.getMinutes(),
     sec=date.getSeconds();
    clockShowing.innerText = `${year} ${month} ${day<10?`0${day}`:day}th ${week}day 
    ${hr<10?`0${hr}`:hr}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`;

}


function init(){
    Time();
    setInterval(Time, 1000);
}
init();

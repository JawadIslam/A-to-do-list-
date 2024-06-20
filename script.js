const countdown =()=>{
const countdate = new Date(" Augest 20,2024 00:00:00").getTime();
const now = new Date().getTime();
const gap = countdate - now;

const second= 1000;
const minute= second * 60;
const hour = minute * 24
const day = hour*24;

const textDay = Math.floor(gap/day);
const textHour = Math.floor((gap%day)/hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute)/second);

document.querySelector(".second").innerHTML= textSecond;
document.querySelector(".minute").innerText = textMinute;
document.querySelector(".day").innerText=textDay;
document.querySelector(".hour").innerText=textHour;

console.log(textMinute)



 };

setInterval( countdown,3000)



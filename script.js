function display(){
let dateTime = new Date()
let hrs = dateTime.getHours()
let mins = dateTime.getMinutes()
let sec = dateTime.getSeconds()
let ampm = document.getElementById("ampm")
document.getElementById("hours").innerText=hrs
document.getElementById("minutes").innerText=mins
document.getElementById("seconds").innerText=sec
if(hrs>=12){
    ampm.innerText = "PM"
}
else{
    ampm.innerText = "AM"
}
}
setInterval(display,10)

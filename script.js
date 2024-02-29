let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let amPm = document.getElementById('ampm');

let hr = document.querySelector('#hr');
let min = document.querySelector('#mn');
let sec = document.querySelector('#sc');

setInterval(() => {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    amPm.innerHTML = h >= 12 ? 'PM' : 'AM';

    hr.style.transform = `rotateZ(${h * 30}deg)`;
    min.style.transform = `rotateZ(${m * 6}deg)`;
    sec.style.transform = `rotateZ(${s * 6}deg)`;
}, 1000); // Add 1000 milliseconds interval for every second
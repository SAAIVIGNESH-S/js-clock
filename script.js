const splash = document.querySelector(".splash");
const clock = document.querySelector(".clock_class");
const img = document.querySelector(".image")

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        clock.classList.add('active');
        img.classList.add('active');
    }, 3000)
});

function showTime() {
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h < 12) {
        image = "images/good_morning.jpg";
    } else if (h < 16) {
        image = "images/good_afternoon.jpg";
    } else if (h < 20) {
        image = "images/good_evening.jpg";
    } else {
        image = "images/good_night.jpg";
    }
    img.src = image;

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock_id").innerText = time;
    document.getElementById("clock_id").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();
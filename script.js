let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

function runStopwatch() {
    seconds++;
    if (seconds === 60) { seconds = 0; minutes++; }
    if (minutes === 60) { minutes = 0; hours++; }

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

document.getElementById("startBtn").onclick = () => {
    if (!isRunning) {
        timer = setInterval(runStopwatch, 1000);
        isRunning = true;
        animateCircle(true);
    }
};

document.getElementById("stopBtn").onclick = () => {
    clearInterval(timer);
    isRunning = false;
    animateCircle(false);
};

document.getElementById("resetBtn").onclick = () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    document.getElementById("display").innerText = "00:00:00";
    isRunning = false;
    document.getElementById("laps").innerHTML = "";
    animateCircle(false);
};

document.getElementById("lapBtn").onclick = () => {
    if (isRunning) {
        const lapTime = document.getElementById("display").innerText;
        const li = document.createElement("li");
        li.innerText = lapTime;
        document.getElementById("laps").appendChild(li);
    }
};

function animateCircle(isActive) {
    const circle = document.querySelector(".circle");
    circle.style.boxShadow = isActive
        ? "0 0 20px rgba(0, 255, 0, 0.7)"
        : "0 0 15px rgba(0, 0, 0, 0.3)";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
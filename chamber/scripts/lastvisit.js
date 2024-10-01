const visitsElement = document.querySelector("#visits");
const currentDate = new Date();
const msToDays = 86400000;

let today = Date.now();
let lastDate = window.localStorage.getItem("lastDate") || 0;
let difference = today - lastDate;
let days = difference / msToDays;

if (lastDate == 0) {
   visitsElement.textContent = "Welcome! Let us know if you have any questions."
} else if (difference < msToDays) {
    visitsElement.textContent = "Back so soon! Awesome!";
} else if (difference >= msToDays) {
    if (days < 2) {
        visitsElement.textContent = `You last visited ${Math.floor(days)} day ago.`;
    } else {
        visitsElement.textContent = `You last visited ${Math.floor(days)} days ago.`;
    }
}

localStorage.setItem("lastDate", today);
const banner = document.querySelector("#banner");
const closeButton = document.querySelector("#close");
const day = new Date();
const currentDay = day.getDay();

closeButton.addEventListener("click", () => {
    banner.style.display = "none";
});

if (currentDay == 1 || currentDay == 2 || currentDay == 3) {
    banner.style.display = "grid";
}
else {
    banner.style.display = "none";
}
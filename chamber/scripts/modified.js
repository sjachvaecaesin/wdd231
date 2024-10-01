document.querySelector("#lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const modeButton = document.querySelector("#mode");
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes("🕶")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "👓";
	}
	else {
		body.style.background = "#fff";
		body.style.color = "#000";
		modeButton.textContent = "🕶";
	}
});
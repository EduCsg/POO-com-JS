const changeThemeBtn = document.getElementById("change-theme");

let toggleDarkMode = () => {
	document.body.classList.toggle("dark");

	console.log("teste");
};

// check latest theme

function loadTheme() {
	const darkMode = localStorage.getItem("dark");

	if (darkMode) {
		document.body.classList.add("dark");
	}
}

// Load light or dark theme
loadTheme();

changeThemeBtn.addEventListener("change", () => {
	toggleDarkMode();

	localStorage.setItem("dark", false);

	if (document.body.classList.contains("dark")) {
		localStorage.setItem("dark", true);
	}
});

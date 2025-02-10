const themeSwitcher = document.getElementById(
	"theme-switcher",
) as HTMLInputElement;
const root = document.documentElement;
const theme = localStorage.getItem("theme");

if (theme === "dark") {
	themeSwitcher.checked = true;
	root.classList.add("dark");
} else {
	root.classList.add("light");
}

themeSwitcher.addEventListener("change", () => {
	if (themeSwitcher.checked) {
		root.classList.remove("light");
		root.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		root.classList.remove("dark");
		root.classList.add("light");
		localStorage.setItem("theme", "light");
	}
});

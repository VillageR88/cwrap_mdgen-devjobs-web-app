document.addEventListener("DOMContentLoaded", () => {
	const themeSwitcher = document.getElementById(
		"theme-switcher",
	) as HTMLInputElement;
	const rootElement = document.documentElement;

	// Function to apply the theme
	const applyTheme = (theme: string | null) => {
		if (theme === "dark") {
			rootElement.classList.add("dark");
			themeSwitcher.checked = true;
		} else {
			rootElement.classList.remove("dark");
			themeSwitcher.checked = false;
		}
		rootElement.style.display = "unset";
	};

	// Apply the saved theme on load
	const savedTheme = localStorage.getItem("theme");
	applyTheme(savedTheme);

	// Toggle theme on switch
	themeSwitcher.addEventListener("change", () => {
		if (themeSwitcher.checked) {
			localStorage.setItem("theme", "dark");
			applyTheme("dark");
		} else {
			localStorage.removeItem("theme");
			applyTheme(null);
		}
	});
});

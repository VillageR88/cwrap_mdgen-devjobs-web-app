interface DataJson {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
}

const themeSwitcher = document.getElementById(
	"theme-switcher",
) as HTMLInputElement;
const root = document.documentElement;
const theme = localStorage.getItem("theme");
const scriptTag = document.querySelector(
	"script[data-route]",
) as HTMLScriptElement;
const dataRoute = scriptTag.getAttribute("data-route");
const main = document.querySelector("main") as HTMLElement;
const mainInner = main.querySelector("div") as HTMLElement;

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

console.log(dataRoute);

async function fetchData() {
	const response = await fetch("static/data.json");
	const data: DataJson[] = await response.json();
	for (const item of data) {
		item.logo = item.logo.replace("./assets", "static/images");
		const itemContainer = document.createElement("div");
		mainInner.appendChild(itemContainer);
	}
	console.log(data);
}

fetchData();

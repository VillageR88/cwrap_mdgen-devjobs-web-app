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
const mainInner = main.querySelector("ul") as HTMLUListElement;

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
		const itemContainer = document.createElement("li");
		const itemContainerInner = document.createElement("div");
		const itemContainerInner1stRow = document.createElement("div");

		const postedAt = document.createElement("p");
		postedAt.textContent = item.postedAt;
		itemContainerInner1stRow.appendChild(postedAt);

		const separator = document.createElement("span");
		separator.textContent = "•";
		itemContainerInner1stRow.appendChild(separator);

		const contract = document.createElement("p");
		contract.textContent = item.contract;
		itemContainerInner1stRow.appendChild(contract);

		itemContainerInner.appendChild(itemContainerInner1stRow);

		const position = document.createElement("h2");
		position.textContent = item.position;
		itemContainerInner.appendChild(position);

		const company = document.createElement("p");
		company.textContent = item.company;
		itemContainerInner.appendChild(company);

		const location = document.createElement("p");
		location.textContent = item.location;
		itemContainerInner.appendChild(location);

		const logoBackgroundDiv = document.createElement("div");
		logoBackgroundDiv.style.backgroundColor = item.logoBackground;

		const logoImg = document.createElement("img");
		logoImg.setAttribute("src", item.logo);
		logoBackgroundDiv.appendChild(logoImg);

		itemContainerInner.insertBefore(
			logoBackgroundDiv,
			itemContainerInner.firstChild,
		);

		itemContainer.appendChild(itemContainerInner);
		mainInner.appendChild(itemContainer);
	}
	console.log(data);
}

fetchData();

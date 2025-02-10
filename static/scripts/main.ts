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
const loadMore = document.getElementById("load-more") as HTMLButtonElement;
const searchItem = document.getElementById("search-item") as HTMLInputElement;
const searchLocation = document.getElementById(
	"search-location",
) as HTMLInputElement;
const fullTimeOnly = document.getElementById(
	"full-time-only",
) as HTMLInputElement;
const search = document.getElementById("search") as HTMLButtonElement;

let currentIndex = 0;
const itemsPerPage = 12;

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

search.addEventListener("click", () => {
	const searchItemValue = searchItem.value.toLowerCase();
	const searchLocationValue = searchLocation.value.toLowerCase();
	const isFullTimeOnly = fullTimeOnly.checked;

	fetchData().then((data) => {
		const filteredData = data.filter((item) => {
			const matchesSearchItem =
				item.company.toLowerCase().includes(searchItemValue) ||
				item.position.toLowerCase().includes(searchItemValue);
			const matchesLocation = item.location
				.toLowerCase()
				.includes(searchLocationValue);
			const matchesFullTimeOnly =
				!isFullTimeOnly || item.contract.toLowerCase() === "full time";

			return matchesSearchItem && matchesLocation && matchesFullTimeOnly;
		});
		mainInner.innerHTML = ""; // Clear previous results
		currentIndex = 0; // Reset current index
		displayItems(filteredData);
	});
});

async function fetchData(): Promise<DataJson[]> {
	const response = await fetch("static/data.json");
	const data: DataJson[] = await response.json();
	for (const item of data) {
		item.logo = item.logo.replace("./assets", "static/images");
	}
	displayItems(data); // Display all items by default
	return data;
}

function displayItems(data: DataJson[]) {
	const itemsToDisplay = data.slice(currentIndex, currentIndex + itemsPerPage);
	for (const item of itemsToDisplay) {
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
	currentIndex += itemsPerPage;
	if (currentIndex >= data.length) {
		loadMore.style.display = "none";
	} else {
		loadMore.style.display = "block";
	}
}

fetchData().then((data) => {
	loadMore.addEventListener("click", () => displayItems(data));
});

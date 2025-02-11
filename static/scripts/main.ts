import type { DataJson } from "./types";

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

const searchLocationDuplicate = document.getElementById(
	"search-location-duplicate",
) as HTMLInputElement;
const fullTimeOnlyDuplicate = document.getElementById(
	"full-time-only-duplicate",
) as HTMLInputElement;
const searchDuplicate = document.getElementById(
	"search-duplicate",
) as HTMLButtonElement;

const filterButton = document.getElementById("filter") as HTMLButtonElement;
const asideElement = document.querySelector("aside") as HTMLElement;

filterButton.addEventListener("click", () => {
	if (asideElement.style.opacity === "1") {
		asideElement.style.opacity = "0";
		asideElement.style.userSelect = "none";
		asideElement.style.pointerEvents = "none";
	} else {
		asideElement.style.opacity = "1";
		asideElement.style.userSelect = "unset";
		asideElement.style.pointerEvents = "unset";
	}
});

let currentIndex = 0;
const itemsPerPage = 12;

search.addEventListener("click", () => {
	const searchItemValue = searchItem.value.toLowerCase();
	const searchLocationValue = searchLocation.value.toLowerCase();
	const isFullTimeOnly = fullTimeOnly.checked;

	handleSearch(searchItemValue, searchLocationValue, isFullTimeOnly);
});

searchDuplicate.addEventListener("click", () => {
	const searchItemValue = searchItem.value.toLowerCase();
	const searchLocationValue = searchLocationDuplicate.value.toLowerCase();
	const isFullTimeOnly = fullTimeOnlyDuplicate.checked;

	handleSearch(searchItemValue, searchLocationValue, isFullTimeOnly);

	// Trigger click on filter button
	const filterButton = document.getElementById("filter") as HTMLButtonElement;
	filterButton.click();
});

function handleSearch(
	searchItemValue: string,
	searchLocationValue: string,
	isFullTimeOnly: boolean,
) {
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
}

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
		const positionLink = document.createElement("a");
		positionLink.textContent = item.position;
		positionLink.href = `details/?id=${item.id}`;
		position.appendChild(positionLink);
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
		logoImg.setAttribute("alt", `${item.company} logo`);
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

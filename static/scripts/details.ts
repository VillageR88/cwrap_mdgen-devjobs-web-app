import type { DataJson } from "./types";

const urlParams = new URLSearchParams(window.location.search);
const jobId = Number.parseInt(urlParams.get("id") || "0", 10);
const navCompany = document.getElementById("nav-company") as HTMLDivElement;

async function fetchJobDetails(): Promise<DataJson | undefined> {
	const response = await fetch("../static/data.json");
	const data: DataJson[] = await response.json();
	return data.find((item) => item.id === jobId);
}

fetchJobDetails().then((job) => {
	if (job) {
		console.log(job);
		const main = document.querySelector("main") as HTMLElement;

		// Set style of the first child div of navCompany
		const firstChildDiv = navCompany.querySelector(
			"div:nth-of-type(1)",
		) as HTMLDivElement;
		if (firstChildDiv) {
			firstChildDiv.style.backgroundColor = job.logoBackground;

			// Set src of the img inside the first child div
			const img = firstChildDiv.querySelector("img") as HTMLImageElement;
			if (img) {
				img.src = job.logo.replace("./assets", "../static/images");
			} else {
				console.error("Image not found");
			}
		} else {
			console.error("First child div not found");
		}

		// Set text content of h2 inside div:nth-of-type(2) > div
		const secondChildDiv = navCompany.querySelector(
			"div:nth-of-type(2) > div > h2",
		) as HTMLHeadingElement;
		const companyDuplicateElement = document.getElementById(
			"company-duplicate",
		) as HTMLHeadingElement;

		if (secondChildDiv) {
			secondChildDiv.textContent = job.company;
			if (companyDuplicateElement) {
				companyDuplicateElement.textContent = job.company;
			} else {
				console.error("Company duplicate element not found");
			}
		} else {
			console.error("Second child div h2 not found");
		}

		// Set text content of p inside div:nth-of-type(2) > div
		const secondChildDivParagraph = navCompany.querySelector(
			"div:nth-of-type(2) > div > p",
		) as HTMLParagraphElement;
		if (secondChildDivParagraph) {
			secondChildDivParagraph.textContent = job.website;
		} else {
			console.error("Second child div p not found");
		}

		// Set text content of p element with id posted-at
		const postedAtElement = document.getElementById(
			"posted-at",
		) as HTMLParagraphElement;
		if (postedAtElement) {
			postedAtElement.textContent = job.postedAt;
		} else {
			console.error("Posted at element not found");
		}

		// Set text content of p element with id contract
		const contractElement = document.getElementById(
			"contract",
		) as HTMLParagraphElement;
		if (contractElement) {
			contractElement.textContent = job.contract;
		} else {
			console.error("Contract element not found");
		}

		// Set text content of h2 element with id position
		const positionElement = document.getElementById(
			"position",
		) as HTMLHeadingElement;
		const positionDuplicateElement = document.getElementById(
			"position-duplicate",
		) as HTMLHeadingElement;

		if (positionElement) {
			positionElement.textContent = job.position;
			if (positionDuplicateElement) {
				positionDuplicateElement.textContent = job.position;
			} else {
				console.error("Position duplicate element not found");
			}
		} else {
			console.error("Position element not found");
		}

		// Set text content of p element with id location
		const locationElement = document.getElementById(
			"location",
		) as HTMLParagraphElement;
		if (locationElement) {
			locationElement.textContent = job.location;
		} else {
			console.error("Location element not found");
		}

		// Set text content of p element with id description
		const descriptionElement = document.getElementById(
			"description",
		) as HTMLParagraphElement;
		if (descriptionElement) {
			descriptionElement.textContent = job.description;
		} else {
			console.error("Description element not found");
		}

		// Set text content of p element with id requirements-content
		const requirementsContentElement = document.getElementById(
			"requirements-content",
		) as HTMLParagraphElement;
		if (requirementsContentElement) {
			requirementsContentElement.textContent = job.requirements.content;
		} else {
			console.error("Requirements content element not found");
		}

		// Append li elements to ul element with id requirements-items-container
		const requirementsItemsContainer = document.getElementById(
			"requirements-items-container",
		) as HTMLUListElement;
		if (requirementsItemsContainer) {
			for (const item of job.requirements.items) {
				const li = document.createElement("li");
				li.textContent = item;
				requirementsItemsContainer.appendChild(li);
			}
		} else {
			console.error("Requirements items container not found");
		}

		// Set text content of p element with id role-content
		const roleContentElement = document.getElementById(
			"role-content",
		) as HTMLParagraphElement;
		if (roleContentElement) {
			roleContentElement.textContent = job.role.content;
		} else {
			console.error("Role content element not found");
		}

		// Append li elements to ul element with id role-items-container
		const roleItemsContainer = document.getElementById(
			"role-items-container",
		) as HTMLUListElement;
		if (roleItemsContainer) {
			for (const item of job.role.items) {
				const li = document.createElement("li");
				li.textContent = item;
				roleItemsContainer.appendChild(li);
			}
		} else {
			console.error("Role items container not found");
		}
	} else {
		console.error("Job not found");
	}
});

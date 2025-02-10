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
		if (secondChildDiv) {
			secondChildDiv.textContent = job.company;
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
	} else {
		console.error("Job not found");
	}
});

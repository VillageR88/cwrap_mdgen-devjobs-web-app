import type { DataJson } from "./types";

const urlParams = new URLSearchParams(window.location.search);
const jobId = parseInt(urlParams.get("id") || "0", 10);

async function fetchJobDetails(): Promise<DataJson | undefined> {
	const response = await fetch("../static/data.json");
	const data: DataJson[] = await response.json();
	return data.find((item) => item.id === jobId);
}

fetchJobDetails().then((job) => {
	if (job) {
		const main = document.querySelector("main") as HTMLElement;
		main.innerHTML = `<pre>${JSON.stringify(job, null, 2)}</pre>`;
	} else {
		console.error("Job not found");
	}
});

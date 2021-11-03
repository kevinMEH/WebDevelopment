import { Swappable } from "@shopify/draggable";

const initializeSwappable = () => {
	console.log("Initializing");
	const containerSelector = ".BlockLayout";
	const containers = document.querySelectorAll(containerSelector);

	if (containers.length === 0) {
		console.log("Container length 0");
		return false;
	}

	const swappable = new Swappable(containers, {
		draggable: ".Block--isDraggable",
		mirror: {
			appendTo: containerSelector,
			constrainDimensions: true,
		}
	});

	console.log("Swappable Success.");

	swappable.on("swappable:start", () => console.log("swappable:start"));
	swappable.on("swappable:swapped", () => console.log("swappable:swapped"));
	swappable.on("swappable:stop", () => console.log("swappable:stop"));

	return swappable;
};

export default initializeSwappable;

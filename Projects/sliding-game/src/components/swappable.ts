import { Plugins, Swappable } from "@shopify/draggable";

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
		},
		plugins: [Plugins.ResizeMirror],
	});

	console.log("Swappable Success.");
	
	let sourceContainer: HTMLElement;
	
	swappable.on("drag:start", (event) => {
		sourceContainer = event.source;
	})
	
	swappable.on("swappable:swap", (event) => {
		// User is using empty block
		if(sourceContainer.classList.contains("Block--isEmpty")) return;
		
		// User is using numbered block and swapping with empty
		if(event.over.classList.contains("Block--isEmpty")) return;
		
		// Else if user is swapping numbered with numbered cancel.
		event.cancel();
	});
	
	// swappable.on("swappable:swapped", (event) => {
	// 	event.swappedElement.
	// })

	swappable.on("swappable:start", () => console.log("swappable:start"));
	swappable.on("swappable:swapped", () => console.log("swappable:swapped"));
	swappable.on("swappable:stop", () => console.log("swappable:stop"));

	return swappable;
};

export default initializeSwappable;

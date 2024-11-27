const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

const gridContainer = document.querySelector(".grid-container");

// Variables named x and y to represent the position of the grid cards on an
// xy plane with the top left corner being (0, 0)
for (let y = 0; y < GRID_HEIGHT; y++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridRow.style.height = `${100 / GRID_HEIGHT}%`;
    gridRow.style.display = "flex";

    for (let x = 0; x < GRID_WIDTH; x++) {
	const gridCard = document.createElement("div");
	gridCard.classList.add("grid-card");
	gridCard.style.flex = "auto";
	gridRow.appendChild(gridCard);
    }

    gridContainer.appendChild(gridRow);
}

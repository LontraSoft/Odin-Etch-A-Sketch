const GRID_SIZE_BASE = 16;
const COLOR_BASE = "white";

const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector("#resize-btn");
const resetButton = document.querySelector("#reset-btn");

function changeBackgroundColor(event) {
    const COLOR_TO_APPLY = "red";
    
    event.target.style.backgroundColor = COLOR_TO_APPLY;
}

function resetGrid() {
    const gridCards = document.querySelectorAll(".grid-card");
    for (const gridCard of gridCards) {
	gridCard.style.backgroundColor = COLOR_BASE;
    }
}

function createGrid(sideLength = GRID_SIZE_BASE) {
    // Variables named x and y to represent the position of the grid cards on an
    // xy plane with the top left corner being (0, 0)
    for (let y = 0; y < sideLength; y++) {
	const gridRow = document.createElement("div");
	gridRow.classList.add("grid-row");
	gridRow.style.height = `${100 / sideLength}%`;
	gridRow.style.display = "flex";
	
	for (let x = 0; x < sideLength; x++) {
	    const gridCard = document.createElement("div");
	    gridCard.classList.add("grid-card");
	    gridCard.style.flex = "auto";
	gridRow.appendChild(gridCard);
	}
	
	gridContainer.appendChild(gridRow);
    }
}

function resizeGrid() {
    const gridRows = document.querySelectorAll(".grid-row");
    let newGridSize = prompt("Enter new grid width and height");

    newGridSize = (newGridSize < 1) ? 1 : newGridSize;
    newGridSize = (newGridSize > 100) ? 100 : newGridSize;

    for (const gridRow of gridRows) {
	const gridCards = gridRow.querySelectorAll(".grid-card");
	for (const gridCard of gridCards) {
	    gridCard.remove();
	}
	gridRow.remove();
    }

    createGrid(newGridSize);
}

createGrid(GRID_SIZE_BASE);

gridContainer.addEventListener("mouseover", changeBackgroundColor);
resetButton.addEventListener("click", resetGrid);
resizeButton.addEventListener("click", resizeGrid);


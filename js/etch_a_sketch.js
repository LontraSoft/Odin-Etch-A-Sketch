const GRID_SIZE_BASE = 16;
const COLOR_BASE = "hsl(0, 0%, 100%)";
const COLOR_TO_APPLY = "hsl(0, 0%, 0%)";
const BRIGHTEST_LUMINOSITY_FOR_FULL_COLOR = 50;

const cardLuminosityMap = new WeakMap();

const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector("#resize-btn");
const resetButton = document.querySelector("#reset-btn");

function changeBackgroundColor(event) {
    let newHue = Math.floor(Math.random() * 360);
    const FULL_SATURATION = 100;
    const STEPS_TO_BLACK = 10;
    const LUMINOSITY_STEP_SIZE =
	  BRIGHTEST_LUMINOSITY_FOR_FULL_COLOR / STEPS_TO_BLACK;
    let newLuminosity =
	cardLuminosityMap.get(event.target) - LUMINOSITY_STEP_SIZE;
    
    cardLuminosityMap.set(event.target, newLuminosity);

    event.target.style.backgroundColor =
	`hsl(${newHue}, ${FULL_SATURATION}%, ${newLuminosity}%)`;
}

function resetGrid() {
    const gridCards = document.querySelectorAll(".grid-card");
    for (const gridCard of gridCards) {
	gridCard.style.backgroundColor = COLOR_BASE;
	cardLuminosityMap.set(gridCard, BRIGHTEST_LUMINOSITY_FOR_FULL_COLOR);
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
	    gridCard.style.backgroundColor = COLOR_BASE;
	    cardLuminosityMap.set(gridCard, BRIGHTEST_LUMINOSITY_FOR_FULL_COLOR);
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


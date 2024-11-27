const GRID_SIZE_BASE = 16;

const gridContainer = document.querySelector(".grid-container");

function changeBackgroundColor(event) {
    const COLOR_TO_APPLY = "red";
    
    event.target.style.backgroundColor = COLOR_TO_APPLY;
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
    }

    gridContainer.appendChild(gridRow);
}

createGrid(GRID_SIZE_BASE);

gridContainer.addEventListener("mouseover", changeBackgroundColor);

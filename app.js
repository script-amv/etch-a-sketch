const grid = document.querySelector(".grid");
let dimension = 16;
for (let i = 1; i <= dimension**2; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell")
    cell.style.width = `calc(var(--grid-width)/${dimension})`
    grid.appendChild(cell)
}
const cells = grid.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("mouseenter", colorCell));

function colorCell(event) {
    event.currentTarget.style.background = "blue";
}
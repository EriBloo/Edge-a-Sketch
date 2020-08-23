function generateSq(sq) {
    if (sq < 2 || sq > 128) {
        return
    }

    const container = document.querySelector(".container");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    container.style["grid-template-rows"] = `repeat(${sq}, ${768/sq}px)`;
    container.style["grid-template-columns"] = `repeat(${sq}, ${768/sq}px)`;

    for (i = 0; i < Math.pow(sq, 2); i++) {
        div = document.createElement("div");
        div.style["background-color"] = "rgba(0, 0, 0, 0.2)";
        container.appendChild(div);
    }

    addMousoverEffect(container);
}

function addColor(e) {
    if (getComputedStyle(e.target)["background-color"] === "rgba(0, 0, 0, 0.2)") {
        e.target.style["background-color"] = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
    }
    else {
        const oldColor = getComputedStyle(e.target)["background-color"];
        const colorValues = oldColor.slice(5, -1).split(", ");
        const newColor = `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, ${parseFloat(colorValues[3]) + 0.2})`
        e.target.style["background-color"] = newColor;
    }
}

function addMousoverEffect(parent) {
    for (const square of Array.from(parent.children)) {
        square.addEventListener("mouseover", addColor);
    }
}

generateSq(32);

document.querySelector(".generate").addEventListener("click", () => {
    generateSq(document.querySelector(".input").value);
})
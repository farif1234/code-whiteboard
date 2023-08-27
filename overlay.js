const canvas = document.getElementById("whiteboard");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

canvas.addEventListener("mousedown", (event) => {
    drawing = true;
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("mousemove", (event) => {
    if (!drawing) return;

    context.lineTo(event.clientX, event.clientY);
    context.stroke();
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    context.closePath();
});

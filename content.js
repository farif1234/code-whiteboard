// // This script will be injected into the LeetCode website
// console.log("LeetCode Overlay Extension loaded");

// // Calculate the vertical center of the page
// const verticalCenter = window.innerHeight / 2;

// // Create overlay div
// const overlay = document.createElement("div");
// overlay.id = "leetcode-overlay";
// overlay.style.position = "fixed";
// overlay.style.top = `${verticalCenter}px`; // Position the overlay halfway down
// overlay.style.right = "10px"; // Position the overlay 10px from the left
// overlay.style.background = "rgba(255, 0, 0, 0.7)";
// overlay.style.color = "white";
// overlay.style.padding = "5px";
// overlay.style.zIndex = "9999";
// overlay.textContent = "LeetCode Overlay";

// // Add overlay only if it doesn't already exist
// if (!document.getElementById("leetcode-overlay")) {
//     document.body.appendChild(overlay);
// }
// This script will be injected into the LeetCode website
// This script will be injected into the LeetCode website
// This script will be injected into the LeetCode website
console.log("LeetCode Whiteboard Extension loaded");

// Create button element
const button = document.createElement("button");
button.id = "whiteboard-button";
button.style.position = "fixed";
button.style.top = "100px";
button.style.right = "10px";
button.textContent = "Open Whiteboard";
button.style.zIndex = "700"; // Ensure the button is on top of everything

// Add button to the page
document.body.appendChild(button);

// Create overlay div (whiteboard)
// const overlay = document.createElement("div");
// overlay.id = "leetcode-overlay";
// overlay.style.position = "fixed";
// overlay.style.top = "50%";
// overlay.style.left = "50%";
// overlay.style.width = "500px"; // Set the width to 500px
// overlay.style.height = "500px"; // Set the height to 500px
// overlay.style.transform = "translate(-50%, -50%)";
// // overlay.style.background = "trans";
// overlay.style.border = "2px solid black";
// overlay.style.zIndex = "10"; // Ensure the overlay is on top of everything
// overlay.style.display = "none"; // Start with overlay hidden

const canvas = document.createElement("canvas");
canvas.id = "whiteboard";
// Set canvas properties and styles as needed
canvas.style.position = "fixed"; // or any positioning you prefer
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "500";
canvas.style.display = "none";

// overlay.appendChild(canvas);

// Add overlay only if it doesn't already exist
if (!document.getElementById("whiteboard")) {
    document.body.appendChild(canvas);
}

// Handle button click event
button.addEventListener("click", () => {
    // Toggle overlay visibility
    canvas.style.display = canvas.style.display === "none" ? "block" : "none";
});

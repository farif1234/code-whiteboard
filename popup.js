const toggleButton = document.getElementById("toggle-button");

// Send a message to the background script to toggle the whiteboard overlay
toggleButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "toggleWhiteboard" });
});

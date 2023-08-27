// Service worker script (background.js)

chrome.runtime.onInstalled.addListener(() => {
    console.log("LeetCode Whiteboard Extension installed");
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleWhiteboard") {
        chrome.action.setBadgeText({ text: message.isActive ? "ON" : "" });
        chrome.action.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
    }
    sendResponse({ success: true });
});

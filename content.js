chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  debugger;
  if (message.userInput) {
    // Use the received input here
    const userInput = message.userInput;
    console.log("Received input from popup:", userInput);

    // You can now use the 'userInput' variable in your content script as needed.
    var titleElement = document.querySelector(
      ".style-scope.ytd-watch-metadata yt-formatted-string"
    );
    // Check if the element exists
    if (titleElement) {
      // Change the title text
      titleElement.textContent = userInput;
    }
  }
});

console.log("content.js loaded");

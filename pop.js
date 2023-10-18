document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function () {
    const inputText = userInput.value;
    console.log("Sending input to content script:", inputText);
    // Send the input to the content script
    chrome.tabs.query({}, function (tabs) {
      if (tabs.length === 0) return;
     
      const activeTab = tabs.find(function (tab) {
        if (tab.url.includes("youtube.com/watch?v=")) {
          return tab;
        }
      });
      chrome.tabs.sendMessage(activeTab.id, { userInput: inputText });
    });
  });
});

console.log("popup.js loaded");

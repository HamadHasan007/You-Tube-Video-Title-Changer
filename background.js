console.log("background.js loaded");

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install" || details.reason === "update") {
    // Extension was just installed
    refreshAllTabs();
  }
});

function refreshAllTabs() {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.reload(tab.id);
    });
  });
}

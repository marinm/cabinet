// Toolbar button clicked
browser.browserAction.onClicked.addListener(function(tab, OnClickData) {
    browser.tabs.create({
        active: true,
        url: '/cabinet.html'
    });
});
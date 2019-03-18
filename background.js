chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: `
        let videos = document.getElementsByTagName("video");
        if (videos.length < 1) {
            alert("No video found.");
        } else {
            videos[0].requestPictureInPicture();
        }
        `
    });
});
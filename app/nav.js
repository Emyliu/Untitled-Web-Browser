// Back, Forward, Refresh.
let browser = {
    currentHistory = [],
    currentPosition = -1
}

document.getElementById("mainFrame").addEventListener("beforeunload", function(event) {
// Really, not the best way to do this - but all I have for now.
push(document.getElementById("mainFrame").src)
});

function push(url) {
    browser.currentHistory.push(url)
}


function refreshPage() {
    let ref = document.getElementById("mainFrame").src
    document.getElementById("mainFrame").src = ref
}

// IPC returns the correct page, don't change it if nothing to change.
// Button SHOULD be disabled if we're at the limit.
function back() {
    if (browser.currentPosition <= 0) {
        // do nothing.
    } else {
        currentPosition = currentPosition - 1
        document.getElementById("mainFrame").src = currentHistory[browser.currentPosition]
    }
}

function forward() {
    if (browser.currentPosition + 1 >= browser.currentHistory.length) {
        // do nothing.
    } else {
        currentPosition = currentPosition + 1
        document.getElementById("mainFrame").src = currentHistory[browser.currentPosition]
    }
}
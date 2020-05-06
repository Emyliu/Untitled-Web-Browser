const {ipcRenderer, remote} = require("electron")

function search() {
    let url = document.getElementById("omnibox").value;
    let parsedUrl = urlParser(url)
    if (parsedUrl == "") {
        parsedUrl = generateSearchLink(url);
    }
    document.getElementById("mainFrame").setAttribute('src', parsedUrl);
    return false
} 

// Input: String
// Output: if it is not an url, then returns an empty string.
// if it is a properly formatted url, then returns the original
// if it is something like "google.ca", it returns "http://www.google.ca"
function urlParser(url) {
    // 1) Check if it begins with "http://www. or https://www."
    if (url.indexOf("https://www.") > -1 || url.indexOf("http://www.") > -1) {
        return url
    }
    // 2) It doesn't have a http:// or https://, so next see if it contains a www.
    else if  (url.indexOf("www.") > -1) {
        return "http://" + url
    } 
    // 3) See if it has a TLD in there.
    else if (url.indexOf(".com") > -1 || url.indexOf(".ca") > -1 || url.indexOf(".org") > -1) {
        return "http://www." + url
    }
    return ""
}

// Input: String
// Output: Searches for it on Google, or some other platform?
function generateSearchLink(term) {
    // Need to replace all the bad characters with good ones.
    return "https://www.google.com/search?q=" + term
    // This will break, but fix later I guess.
}

function ipcCall() {
    ipcRenderer.send("inc")
}

ipcRenderer.on("inc-reply", (event, arg) => {
    document.getElementById("ipcTest").innerHTML = arg
})

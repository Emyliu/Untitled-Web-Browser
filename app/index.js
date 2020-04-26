function search() {
    let url = document.getElementById("omnibox").value;
    document.getElementById("omnibox").focus();
    document.getElementById("omnibox").value = url;
    document.getElementById("mainFrame").setAttribute('src', url);
    return false
} 
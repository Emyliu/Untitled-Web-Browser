function search() {
    let url = document.getElementById("omnibox").value;
    alert("The form was submitted with " + url);
    document.getElementById("mainFrame").setAttribute('src', url);
    return false
} 
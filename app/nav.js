// Back, Forward, Refresh.

// Back and Forward are going to need IPC w/ the database so just begin with the refresh

function refreshPage() {
    let ref = document.getElementById("mainFrame").src
    document.getElementById("mainFrame").src = ref
}
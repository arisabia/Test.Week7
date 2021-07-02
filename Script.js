function subscribe() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    try {
        storage.setItem(key, value);
    } catch (e) {
        alert("Impossibile salvare i dati richiesti");
    }
}

function getStorage() {

    let storageName = (document.getElementById("local").checked) ? "localStorage" : "sessionStorage";
    try {
        return (storageName in window && window[storageName] != null) ? window[storageName] : null;
    } catch (e) {
        return null;
    }
}


function IscrizioneCompletata() {
    alert("Iscrizione completata correttamente!");
}
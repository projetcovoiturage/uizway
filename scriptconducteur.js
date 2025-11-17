document.addEventListener("DOMContentLoaded", () => {
    const nom = localStorage.getItem("nomConducteur") || "";
    const prenom = localStorage.getItem("prenomConducteur") || "";
    const photo = localStorage.getItem("photoConducteur");

    document.getElementById("nomConducteur").textContent = `${prenom} ${nom}`.trim();

    const imgElt = document.getElementById("photoConducteur");
    if (photo) {
        imgElt.src = photo; // chemin relatif correct
        imgElt.style.display = "block";
    } else {
        imgElt.style.display = "none";
    }
});

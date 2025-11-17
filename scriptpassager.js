document.addEventListener("DOMContentLoaded", () => {
    // Récupérer nom et prénom du passager
    const nom = localStorage.getItem("nomSeulPassager") || "";
    const prenom = localStorage.getItem("prenomPassager") || "";
    const photo = localStorage.getItem("photoPassager");

    // Afficher nom complet
    const nomElement = document.getElementById("nomPassager");
    nomElement.textContent = `${prenom} ${nom}`.trim() || "Passager";

    // Afficher photo
    const imgElt = document.getElementById("photoPassager");
    if (photo) {
        imgElt.src = photo;
        imgElt.style.display = "block";
    } else {
        imgElt.src = "passager.png"; // image par défaut
        imgElt.style.display = "block";
    }

    // Bouton : redirection vers demande de course
    const btnDemande = document.getElementById("demandeBtn");
    if (btnDemande) {
        btnDemande.addEventListener("click", () => {
            window.location.href = "Formulaire de Demande de course.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche l'envoi

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;

        localStorage.setItem("nomConducteur", nom);
        localStorage.setItem("prenomConducteur", prenom);

        // Image aléatoire
        const imagesAleatoires = ["conducteur.jpg"];
        const photoAleatoire = imagesAleatoires[Math.floor(Math.random() * imagesAleatoires.length)];
        localStorage.setItem("photoConducteur", photoAleatoire);

        // Redirection
        location.href = "accueil_conducteur.html";
    });
});

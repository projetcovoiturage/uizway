document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // empêche le rechargement

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();

        localStorage.setItem("nomSeulPassager", nom);
        localStorage.setItem("prenomPassager", prenom);
        localStorage.setItem("nomPassager", prenom + " " + nom); // nom complet

        const photoInput = document.getElementById("photo");
        if (photoInput && photoInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function () {
                localStorage.setItem("photoPassager", reader.result);
                // Redirection correcte
                location.href = "accueil_passager.html";
            };
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            const imagesAleatoires = ["passager.png"];
            const photoAleatoire = imagesAleatoires[Math.floor(Math.random() * imagesAleatoires.length)];
            localStorage.setItem("photoPassager", photoAleatoire);

            // Redirection correcte
            location.href = "accueil_passager.html";
        }
    });
});

const wrapper = document.querySelector('.cards-wrapper');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');

btnRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: 220, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    wrapper.scrollBy({ left: -220, behavior: 'smooth' });
});

const toggle = document.getElementById("titleForm");
    const form = document.getElementById("commentForm");
    const success = document.getElementById("successMessage");

    // Afficher / cacher le formulaire
    toggle.addEventListener("click", () => {
        if (form.style.display === "none" || form.style.display === "") {
            form.style.display = "flex";
            success.style.display = "none"; // On cache le message si on réouvre
        } else {
            form.style.display = "none";
        }
    });

    // Quand on clique sur PUBLIIER
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // empêche la page de se recharger
        form.style.display = "none"; // on cache le formulaire
        success.style.display = "block"; // on affiche le message
    });


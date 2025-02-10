document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");

    // Vérifie que les éléments existent avant d'ajouter l'événement
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

document.querySelector(".hamburger").click(); // Simule un clic sur le bouton

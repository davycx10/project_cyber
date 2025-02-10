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


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptCookies() {
    setCookie("cookiesAccepted", "true", 30);
    document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
    setCookie("cookiesAccepted", "false", 30);
    document.getElementById("cookieBanner").style.display = "none";
}

window.onload = function() {
    if (getCookie("cookiesAccepted") === null) {
        document.getElementById("cookieBanner").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // ✅ Gestion du menu burger (mode mobile)
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");

    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        navLinks.classList.toggle("active");

        // Bloque le scroll quand le menu est ouvert
        document.body.classList.toggle("no-scroll", navLinks.classList.contains("active"));
    });

    // ✅ Gestion des sous-menus déroulants
    const accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const currentDropdown = this.nextElementSibling;

            // Ferme tous les autres sous-menus
            document.querySelectorAll(".dropdown-content").forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.style.display = "none";
                }
            });

            // Alterne l'affichage du sous-menu
            currentDropdown.style.display = (currentDropdown.style.display === "block") ? "none" : "block";
        });
    });

    // ✅ Ferme le menu burger si on clique en dehors
    // document.addEventListener("click", function () {
        // navLinks.classList.remove("active");
        // document.body.classList.remove("no-scroll");
        // 
        // Ferme aussi tous les sous-menus
        // document.querySelectorAll(".dropdown-content").forEach(dropdown => {
            // dropdown.style.display = "none";
        // });
    // });

    // ✅ Empêche la fermeture immédiate du menu si on clique à l'intérieur
    document.querySelectorAll(".dropdown-content").forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // ✅ Empêche la fermeture immédiate lorsqu'on clique sur un lien du sous-menu
    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
});



// ✅ Gestion des cookies
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




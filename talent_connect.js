$(document).ready(function () {
    // ✅ Gestion du menu burger (mode mobile)
    $(".hamburger").click(function (event) {
        event.stopPropagation();
        $(".nav_links").toggleClass("active");
    });

    // ✅ Gestion des sous-menus déroulants
    $(".accordion-toggle").click(function (event) {
        event.preventDefault();
        event.stopPropagation();

        // ✅ Ferme tous les autres sous-menus avant d'ouvrir celui-ci
        $(".dropdown-content").not($(this).next()).slideUp();

        // ✅ Alterne l'affichage du sous-menu
        $(this).next(".dropdown-content").slideToggle();
    });

    // ✅ Empêche la fermeture immédiate du menu si on clique à l'intérieur
    $(".dropdown-content").click(function (event) {
        event.stopPropagation();
    });

    // ✅ Empêche la fermeture immédiate lorsqu'on clique sur un lien du sous-menu
    $(".dropdown-content a").click(function (event) {
        event.stopPropagation();
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




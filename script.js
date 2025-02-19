<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Talent Connect </title>
    <link rel="stylesheet" href="talent_connect.css"> 
</head>

<body >

    <script>
        
        
// cela garantit que tous les éléments HTML sont bien chargés avant d’attacher des événements.
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");
    const dropdowns = document.querySelectorAll(".dropdown");

    // ✅ Menu burger cliquable
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", (event) => {
            event.stopPropagation();  // Empêche de fermer en cliquant ailleurs
            navLinks.classList.toggle("active");
        });
    }

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".accordion-toggle");
        const content = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", (event) => {
            event.stopPropagation();

            // ✅ Ferme les autres sous-menus avant d'ouvrir celui-ci
            document.querySelectorAll(".dropdown-content").forEach(menu => {
                if (menu !== content) {
                    menu.style.display = "none";
                }
            });

            // ✅ Bascule l'affichage du sous-menu cliqué
            content.style.display = (content.style.display === "block") ? "none" : "block";

            // ✅ Assure que le menu principal est toujours scrollable
            navLinks.style.overflowY = "auto";
        });
    });

    // ✅ Empêche le scroll sur les boutons de sous-menus en mode PC
    if (window.innerWidth > 768) { 
        document.querySelectorAll(".accordion-toggle").forEach(button => {
            button.style.pointerEvents = "none"; 
        });
    }

    document.querySelectorAll(".dropdown > .accordion-toggle").forEach(button => {
    button.addEventListener("click", (event) => {
        if (window.innerWidth <= 768) { // ✅ Vérifie que l'on est bien en mode mobile
            event.preventDefault(); // ❌ Empêche l'ouverture du lien
            const dropdownContent = button.nextElementSibling; // ✅ Récupère le sous-menu associé
            
            if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
                dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block"; 
            }
        }
    });
});




});

const navLinks = document.querySelector(".nav_links");

    // ✅ Ferme tout si on clique ailleurs
    document.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
        document.querySelectorAll(".dropdown-content").forEach(menu => {
            menu.style.display = "none";
        });
    });




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


    </script>
    

    <header class="navbar">
        <div class="nav_logo">
            <img src="logo2.svg" alt="talent_connect">
        </div>
    
        <ul>
            <button class="hamburger">☰</button>
    
            <div class="nav_links">
                <li><a href="talent_connect_1.html">Accueil</a></li>
    
                <!-- Ajout des flèches 🔻 -->
                <li class="dropdown">
                    <button class="accordion-toggle" >Curriculum 🔻</button>
                    <div class="dropdown-content">
                        <a href="talent_connect_cv.html" target="_blank">Dave</a>
                        <a href="" target="_blank">Chahrazed</a>
                        <a href="" target="_blank">Ibtihel</a>
                        <a href="" target="_blank">Loïc</a>
                        <a href="" target="_blank">Chahinez</a>
                    </div>
                </li>
    
                <li class="dropdown">
                    <button class="accordion-toggle">Portfolios 🔻</button>
                    <div class="dropdown-content">
                        <a href="portfolio_dave.html" target="_blank">Dave</a>
                        <a href="" target="_blank">Chahrazed</a>
                        <a href="" target="_blank">Ibtihel</a>
                        <a href="" target="_blank">Loïc</a>
                        <a href="" target="_blank">Chahinez</a>
                    </div>
                </li>
    
                <li><a href="" target="_blank">Contact</a></li>
            </div>
        </ul>
    </header>
    



<!-- row page -->
   <div class="page">

   <!-- col content -->
     <div class="content_text"> 
      
        <p>
            <h2>Bienvenue sur notre site</h2> 
            Nous sommes un collectif de cinq étudiants passionnés, réunis par l'envie de créer et d'innover.
            À travers ce site, nous vous présentons nos CV et portfolios, reflets de nos parcours, 
            de nos compétences et de nos aspirations. En adoptant la méthodologie agile Scrum, 
            nous avons collaboré étroitement pour donner vie à cet espace, symbole de notre esprit d'équipe 
            et de notre engagement envers l'excellence.
         </p> 

     </div>     

 <!-- col logo -->
   <div class="logo" >
        <img class="l" src="logotalentconnect3.svg" alt="talent_connect" >
   </div>

</div>

<div class="cookie-banner" id="cookieBanner">
    Ce site utilise des cookies pour améliorer votre expérience. Acceptez-vous l'utilisation des cookies ?
    <button onclick="acceptCookies()">Accepter</button>
    <button onclick="declineCookies()">Refuser</button>
</div>

</body>
</html>
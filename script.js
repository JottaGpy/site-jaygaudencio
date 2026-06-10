/*=========================================
EFEITOS VISUAIS E SCROLL
=========================================*/
document.addEventListener('DOMContentLoaded', () => {
    
    // Animação da Navbar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(248,247,244,.96)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.05)";
        } else {
            navbar.style.background = "rgba(248,247,244,.85)";
            navbar.style.boxShadow = "none";
        }
    });

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".about,.services,.process,.portfolio,.testimonials,.faq,.cta").forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Botão Voltar ao Topo
    const topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.className = "topButton";
    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topButton.classList.add("visible");
        } else {
            topButton.classList.remove("visible");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Efeito de Entrada
    document.body.classList.add("loaded");

    /*=========================================
    MENU MOBILE CORRIGIDO
    =========================================*/
    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar nav");

    if (menu && nav) {
        menu.addEventListener("click", () => {
            nav.classList.toggle("active");
            // Troca o ícone
            menu.innerHTML = nav.classList.contains("active") ? "✕" : "☰";
        });

        // Fecha ao clicar num link
        document.querySelectorAll(".navbar nav a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menu.innerHTML = "☰";
            });
        });
    } else {
        console.error("Erro: Classes .menu-toggle ou .navbar nav não encontradas no HTML.");
    }
});
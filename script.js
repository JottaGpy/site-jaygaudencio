```javascript
/*=========================================
ANIMAÇÃO DA NAVBAR
=========================================*/

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


/*=========================================
SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});


document.querySelectorAll(

".about,.services,.process,.portfolio,.testimonials,.faq,.cta"

).forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


```javascript
/*=========================================
FAQ
=========================================*/

const botoesFaq = document.querySelectorAll(".item button");

botoesFaq.forEach(function(botao){

    botao.onclick = function(){

        const resposta = this.nextElementSibling;

        if(resposta.style.display === "block"){

            resposta.style.display = "none";

        }else{

            document.querySelectorAll(".content").forEach(function(item){

                item.style.display = "none";

            });

            resposta.style.display = "block";

        }

    };

});
```



/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

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

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
EFEITO DE ENTRADA DA PÁGINA
=========================================*/

window.onload = () => {

    document.body.classList.add("loaded");

};
```

// Menu desplegable (solo si existe)

let lanzador = "#menu-link";
let desplegable = ".main-menu";
let despliegaClase = "dropdown-menu";

function nav(){
    const lanz = document.querySelector(lanzador);
    if(!lanz) return;                     // si no hay botón, no hacemos nada

    lanz.addEventListener("click", function(e){
        e.preventDefault();
        despliegaMenu();
    });
}

function despliegaMenu(){
    const despl = document.querySelector(desplegable);
    if(!despl) return;                    // si no hay menú móvil, salir
    despl.classList.toggle(despliegaClase);
}

nav();

// Cookies 

const popup = document.getElementById("cookiePopup");
const btn = document.getElementById("acceptCookies");

if (popup && !localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn?.addEventListener("click", function(){
    localStorage.cookiesAccepted = "true";
    popup?.classList.remove("show");
});

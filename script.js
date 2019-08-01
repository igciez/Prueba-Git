/**
 * Subir todo el trabajo en un branch nuevo y pushearlo a un repo en GitHub 
 * 
 * 1) Hacer una etiqueta <a> en HTMl
 * 2) Agarrarla con JS
 * 3) Asignarle un evento de "click"
 * 4) El callback del click tiene que poder crear un elemento <p> y dos <button>, todo adentro de un <div> (Se crean con JS)
 * 5) El <p> tiene que decir "Esta seguro que quiere abandonar la página" y los botones "aceptar" y "cancelar", respectivamente
 * 6) Si se hace click en aceptar , se tiene que redirigir al usuario al href del <a>
 * 7) Si se hace click en cancelar, se tiene que borrar el mensaje
 * 
 */
var a;
let f;  
let div;
let p;
let btnAceptar;
let btnCancelar;
let flagInterna;
let flagExterna=true;

f=document.createDocumentFragment(); 
a=document.querySelector("a");

a.addEventListener("click", e => { 
    flagInterna=true;
    e.preventDefault();   

    if (e.target.id === "btnAceptar") {
        flag=false;
        window.location=a.href;
    }
    else if (e.target.id === "btnCancelar") {
        a.removeChild(div);
        flagInterna=false;
        flagExterna=true; //bandera para poder volver a entrar desde Opciones
    }
    if(flagInterna && flagExterna){ 
        div = document.createElement("div");        
        p = document.createElement("p");
        p.innerText = "Esta seguro que quiere abandonar la pagina?";        
        div.appendChild(p);         
        btnAceptar = document.createElement("button");
        btnAceptar.innerText = "Aceptar";
        btnAceptar.id = "btnAceptar";
        div.appendChild(btnAceptar);
        btnCancelar = document.createElement("button");
        btnCancelar.innerText = "Cancelar";
        btnCancelar.id = "btnCancelar";
        div.appendChild(btnCancelar);        
        a.appendChild(div);
        flagExterna=false; 
    }         
});



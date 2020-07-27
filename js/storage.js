var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registrar = document.getElementById("registrar");
var usuar = document.getElementById("usuar");


//-------funciones--------
var prueba 

function resgistro () {
    let user = prompt ("Registra tu usuario");
    let pass = prompt ("Registra tu contraseña");
    localStorage.setItem ('usuario', user);
    localStorage.setItem ('clave', pass);
    alert ("registo exitoso");
}
function loginUsuario () {
    let user = prompt ("Ingresa tu usuario");
    let pass = prompt ("Ingresa tu contraseña");
    
    if (user == localStorage.getItem ('usuario') && pass == localStorage.getItem ('clave')) {
        alert ("login exitoso");
        usuar.innerHTML = "Salir";
    } else {
        alert ("Error en el login");
    }
}
function salirPag () {
    let user = "";
    localStorage.setItem ('usuario', user);
    let pass = "";
    localStorage.setItem ('clave', pass);
    usuar.innerHTML = "Salir";
}
//------Usuario en secion-----

if (localStorage.getItem('usuario')) {
    let usuarioStorage = localStorage.getItem ('usuario');
    usuar.innerHTML= "Salir";
}

//--------onclicks----------


login.onclick = function () {
    // funcion login
    loginUsuario ();
}
salir.onclick = function () {
    // funcion salir
    salirPag ();
}
registrar.onclick = function () {
    // funcion login
    resgistro ();
}
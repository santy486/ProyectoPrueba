var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var letrasGuardadas = "";
var numerosGuardados = "";
var a1 = document.getElementById("a1");
var b2 = document.getElementById("b2");
var c3 = document.getElementById("c3");
var d4 = document.getElementById("d4");
var e5 = document.getElementById("e5");
var f6 = document.getElementById("f6");
var g7 = document.getElementById("g7");
var h8 = document.getElementById("h8");
var i9 = document.getElementById("i9");

//-------Funciones---------

function btnA1() {
    if (letrasGuardadas == "A B C D E F G H I") {
        numeros.innerHTML = "1";
        numerosGuardados = "1";
    } else {
        if (letrasGuardadas == "") {
            letras.innerHTML = "A";
           letrasGuardadas = "A";
        }
    }
    
}


function btnB2() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1") {
        numeros.innerHTML = "1 2";
        numerosGuardados = "1 2";
    } else {
        if (letrasGuardadas == "A") {
            letras.innerHTML = "A B";
            letrasGuardadas = "A B";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}

function btnC3() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2") {
        numeros.innerHTML = "1 2 3";
        numerosGuardados = "1 2 3";
    } else {
        if (letrasGuardadas == "A B") {
            letras.innerHTML = "A B C";
            letrasGuardadas = "A B C";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}


function btnD4() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3") {
        numeros.innerHTML = "1 2 3 4";
        numerosGuardados = "1 2 3 4";
    } else {
        if (letrasGuardadas == "A B C") {
            letras.innerHTML = "A B C D";
            letrasGuardadas = "A B C D";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}
function btnE5() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3 4") {
        numeros.innerHTML = "1 2 3 4 5";
        numerosGuardados = "1 2 3 4 5";
    } else {
        if (letrasGuardadas == "A B C D") {
            letras.innerHTML = "A B C D E";
            letrasGuardadas = "A B C D E";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}
function btnF6() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3 4 5") {
        numeros.innerHTML = "1 2 3 4 5 6";
        numerosGuardados = "1 2 3 4 5 6";
    } else {
        if (letrasGuardadas == "A B C D E") {
            letras.innerHTML = "A B C D E F";
            letrasGuardadas = "A B C D E F";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}
function btnG7() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3 4 5 6") {
        numeros.innerHTML = "1 2 3 4 5 6 7";
        numerosGuardados = "1 2 3 4 5 6 7";
    } else {
        if (letrasGuardadas == "A B C D E F") {
            letras.innerHTML = "A B C D E F G";
            letrasGuardadas = "A B C D E F G";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}
function btnH8() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3 4 5 6 7") {
        numeros.innerHTML = "1 2 3 4 5 6 7 8";
        numerosGuardados = "1 2 3 4 5 6 7 8";
    } else {
        if (letrasGuardadas == "A B C D E F G") {
            letras.innerHTML = "A B C D E F G H";
            letrasGuardadas = "A B C D E F G H";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}
function btnI9() {
    if (letrasGuardadas == "A B C D E F G H I" && numerosGuardados == "1 2 3 4 5 6 7 8") {
        numeros.innerHTML = "1 2 3 4 5 6 7 8 9";
        numerosGuardados = "1 2 3 4 5 6 7 8 9";
    } else {
        if (letrasGuardadas == "A B C D E F G H") {
            letras.innerHTML = "A B C D E F G H I";
            letrasGuardadas = "A B C D E F G H I";
        } else {
            alert("Revisa el orden de las letras");
        }
    }
}



//----onclick------


a1.onclick = function() {
    btnA1();
}
b2.onclick = function() {
    btnB2();
}
c3.onclick = function() {
    btnC3();
}
d4.onclick = function() {
    btnD4();
}
e5.onclick = function() {
    btnE5();
}
f6.onclick = function() {
    btnF6();
}
g7.onclick = function() {
    btnG7();
}
h8.onclick = function() {
    btnH8();
}
i9.onclick = function() {
    btnI9();
}
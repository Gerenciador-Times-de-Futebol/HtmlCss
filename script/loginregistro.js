function checkLoginAndPassword() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if (login == "") {
        alert("Por favor, digite o seu usuário");
        return false;
    }
    if (password == "") {
        alert("Por favor, digite a sua senha");
        return false;
    }
    return true;
}

function goToInicial() {
    if (checkLoginAndPassword()) {
        window.location.href = "Inicial.html";
    }
}


function goToRegistro() {
    window.location.href = "registro.html";
}

function goToLogin() {
    window.location.href = "login.html";
}

function goToLoginAfterCheck() {
    if (checkRegistro()) {
        window.location.href = "login.html";
    }
}

//function to check if inputs are empty in registro.html
function checkRegistro() {
    var nome = document.getElementById("nomeregistro").value;
    var email = document.getElementById("emailregistro").value;
    var usuario = document.getElementById("usuarioregistro").value;
    var password = document.getElementById("senharegistro").value;
    var clube = document.getElementById("cluberegistro").value;
    if (nome == "") {
        alert("Por favor, digite o seu nome");
        return false;
    }
    if (usuario == "") {
        alert("Por favor, digite o seu usuário");
        return false;
    }
    if (clube == "") {
        alert("Por favor, digite o seu clube");
        return false;
    }
    if (email == "") {
        alert("Por favor, digite o seu email");
        return false;
    }
    if (password == "") {
        alert("Por favor, digite a sua senha");
        return false;
    }

    return true;
}

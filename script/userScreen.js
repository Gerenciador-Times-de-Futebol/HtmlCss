function validarNovoUsername() {
    let username = document.getElementById("username");

    if (username.value == "") {
        alert("É obrigatório preencher o campo de novo username!!");
        username.style.borderColor = "red";
        return false;
    } else {
        username.style.borderColor = "white";
    }

    if (username.value != "") {
        return true;
    }
}

function validarNovaSenha() {
    let senha = document.getElementById("senha");

    if (senha.value == "") {
        alert("É obrigatório preencher o campo de nova senha!!");
        senha.style.borderColor = "red";
        return false;
    } else {
        senha.style.borderColor = "white";
    }

    if (senha.value != "") {
        return true;
    }
}

function validarNovoEmail() {
    let newmail = document.getElementById("newmail");

    if (newmail.value == "") {
        alert("É obrigatório preencher o campo de novo e-mail!!");
        newmail.style.borderColor = "red";
        return false;
    } else {
        newmail.style.borderColor = "white";
    }

    if (newmail.value != "") {
        return true;
    }
}

function novoUsername() {
    if (validarNovoUsername()) {
        document.forms[0].submit();
    }
}

function novaSenha() {
    if (validarNovaSenha()) {
        document.forms[1].submit();
    }
}

function novoEmail() {
    if (validarNovoEmail()) {
        document.forms[2].submit();
    }
}
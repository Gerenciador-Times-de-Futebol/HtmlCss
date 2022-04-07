function validarNovoTreino() {
    let data = document.getElementById("data");
    let hora = document.getElementById("hora");
    let tipo = document.getElementById("tipo");
    let local = document.getElementById("local");

    if (data.value == "") {
        alert("É obrigatório preencher o campo data!!");
        data.style.borderColor = "red";
        return false;
    } else {
        data.style.borderColor = "white";
    }

    if (hora.value == "") {
        alert("É obrigatório preencher o campo hora!!");
        hora.style.borderColor = "red";
        return false;
    } else {
        hora.style.borderColor = "white";
    }

    if (tipo.value == "") {
        alert("É obrigatório preencher o campo tipo!!");
        tipo.style.borderColor = "red";
        return false;
    } else {
        tipo.style.borderColor = "white";
    }

    if (local.value == "") {
        alert("É obrigatório preencher o campo local!!");
        local.style.borderColor = "red";
        return false;
    } else {
        local.style.borderColor = "white";
    }

    if (data.value != "" && hora.value != "" && tipo.value != "" && local.value != "") {
        return true;
    }
}

function novoTreino() {
    if (validarNovoTreino()) {
        document.forms[0].submit();
        window.location.href = "treinos-tecnico.html";
    }
}
function validarNovoFuncionario() {
    let nome = document.getElementById("nome");
    let cargo = document.getElementById("cargo");
    let genero = document.getElementById("genero");
    let salario = document.getElementById("salario");
    let data = document.getElementById("nascimento");

    if (nome.value == "") {
        alert("É obrigatório preencher o campo nome!!");
        nome.style.borderColor = "red";
        return false;
    } else {
        nome.style.borderColor = "white";
    }

    if (cargo.value == "") {
        alert("É obrigatório preencher o campo cargo!!");
        cargo.style.borderColor = "red";
        return false;
    } else {
        cargo.style.borderColor = "white";
    }

    if (genero.value == "" || genero.value == "...") {
        alert("É obrigatório selecionar o campo genero!!");
        genero.style.borderColor = "red";
        return false;
    } else {
        genero.style.borderColor = "white";
    }

    if (salario.value == "") {
        alert("É obrigatório preencher o campo salario!!");
        salario.style.borderColor = "red";
        return false;
    } else {
        salario.style.borderColor = "white";
    }

    if (data.value == "") {
        alert("É obrigatório preencher o campo data!!");
        data.style.borderColor = "red";
        return false;
    } else {
        data.style.borderColor = "white";
    }

    if (nome.value != "" && cargo.value != "" && genero.value != "" && salario.value != "" && data.value != "") {
        console.log("ultimo if");
        return true;
    }
}

function newEmployee() {
    if (validarNovoFuncionario()) {
        console.log("Entrando na segunda função");
        document.forms[0].submit();
    }
}
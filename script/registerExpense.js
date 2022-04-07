function validarNovaExpense() {
    let nome = document.getElementById("nome");
    let valor = document.getElementById("valor");
    let data = document.getElementById("data");
    let lucro = document.getElementById("lucro"); // lucro no radio
    let despesa = document.getElementById("gasto"); // despesa no radio 

    if (nome.value == "") {
        alert("É obrigatório preencher o campo nome!!");
        nome.style.borderColor = "red";
        return false;
    } else {
        nome.style.borderColor = "white";
    }

    if (valor.value == "") {
        alert("É obrigatório preencher o campo valor!!");
        valor.style.borderColor = "red";
        return false;
    } else {
        valor.style.borderColor = "white";
    }

    if (data.value == "") {
        alert("É obrigatório preencher o campo data!!");
        data.style.borderColor = "red";
        return false;
    } else {
        data.style.borderColor = "white";
    }

    if (nome.value != "" && valor.value != "" && data.value != "") {
        console.log("ultimo if");
        return true;
    }
}

function newExpense() {
    if (validarNovaExpense()) {
        console.log("Entrando na segunda função");
        document.forms[0].submit();
    }
}
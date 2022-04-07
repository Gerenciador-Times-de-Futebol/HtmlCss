function checkInput(inputId) {
  const input = document.getElementById(inputId).value;

  if (input === "") {
    alert(`Preencha o dado ${inputId}`);
    return false;
  }
  return true;
}

function checkForm() {
  const inputs = [
    "nome",
    "posicao",
    "contrato",
    "salario",
    "nascimento",
    "email",
  ];

  const result = inputs.reduce((acc, curr) => acc && checkInput(curr), true);

  if (result) {
    jogadores();
  }
}

function jogadores() {
  window.location.href = "jogadores.html";
}

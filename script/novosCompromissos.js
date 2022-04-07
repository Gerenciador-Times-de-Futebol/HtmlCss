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
    "torneio",
    "anfitriao",
    "visitante",
    "local",
    "data",
    "horario",
  ];

  const result = inputs.reduce((acc, curr) => acc && checkInput(curr), true);

  if (result) {
    compromissos();
  }
}

function compromissos() {
  window.location.href = "compromissos.html";
}

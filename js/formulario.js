const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const telefoneInput = document.getElementById("telefone");

  const typeSelecionados = document.querySelectorAll(".selected");

  let sucesso = true; // Flag para rastrear o resultado das verificações

  const contagem = typeSelecionados.length;
  if (contagem < 1) {
    sucesso = false; // Verificação falhou, define a flag como false
    const tipoCarneContainer = document.querySelector(".dropdown");
    showError(
      tipoCarneContainer,
      "Selecione ao menos um tipo de carne favorita."
    );
  } else {
    const tipoCarneContainer = document.querySelector(".dropdown");
    hideError(tipoCarneContainer);
  }

  const selectedValueElement = document.querySelector(".selected-value");
  const tipoSelecionado = selectedValueElement.textContent;

  if (tipoSelecionado === "Selecionar") {
    sucesso = false; // Verificação falhou, define a flag como false
    const preferenciaContainer = document.querySelector(".preferencia");
    showError(preferenciaContainer, "Selecione ao menos uma preferência.");
  } else {
    const preferenciaContainer = document.querySelector(".preferencia");
    hideError(preferenciaContainer);
  }

  const inputField = document.querySelector(".input-field");
  const mensagemContainer = document.querySelector(".text-area");
  const mensagem = inputField.innerHTML;

  if (mensagem.length < 5) {
    sucesso = false; // Verificação falhou, define a flag como false
    showError(
      mensagemContainer,
      "A mensagem deve possuir pelo menos 5 caracteres."
    );
  } else {
    hideError(mensagemContainer);
  }

  const texto = document.querySelector(".area-texto-normais");
  const nome = nomeInput.value.trim();
  if (nome === "" || nome.split(" ").length < 2) {
    sucesso = false; // Verificação falhou, define a flag como false
    showError(texto, "O nome deve ter pelo menos dois nomes");
  } else {
    hideError(texto);
  }

  const textoEmail = document.querySelector(".area-texto-normais-email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    sucesso = false; // Verificação falhou, define a flag como false
    showError(textoEmail, "Adicione um e-mail válido.");
  } else {
    hideError(textoEmail);
  }

  const textoTelefone = document.querySelector(".area-texto-normais-telefone");
  const telefone = telefoneInput.value.replace(/[\s()\-]/g, "");
  if (telefone.length !== 11) {
    sucesso = false; // Verificação falhou, define a flag como false
    showError(textoTelefone, "Adicione um número de celular válido.");
  } else {
    hideError(textoTelefone);
  }

  if (sucesso) {
    alert(`Enviado com sucesso!`);
  }
});

const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const telefoneInput = document.getElementById("telefone");

nomeInput.addEventListener("blur", validarNome);
emailInput.addEventListener("blur", validarEmail);
telefoneInput.addEventListener("blur", validarTelefone);

function validarNome() {
  const texto = document.querySelector(".area-texto-normais");
  const nome = nomeInput.value.trim();
  if (nome === "" || nome.split(" ").length < 2) {
    showError(texto, "O nome deve ter pelo menos dois nomes");
  } else {
    hideError(texto);
  }
}

function validarEmail() {
  const textoEmail = document.querySelector(".area-texto-normais-email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError(textoEmail, "Adicione um e-mail válido.");
  } else {
    hideError(textoEmail);
  }
}

function validarTelefone() {
  const textoTelefone = document.querySelector(".area-texto-normais-telefone");
  const telefone = telefoneInput.value.replace(/[\s()\-]/g, "");
  if (telefone.length !== 11) {
    showError(textoTelefone, "Adicione um número de celular válido.");
  } else {
    hideError(textoTelefone);
  }
}

function showError(element, message) {
  const errorElement = element.querySelector(".error-message");
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  } else {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = message;
    element.appendChild(errorElement);
  }
}

function hideError(element) {
  const errorElement = element.querySelector(".error-message");
  if (errorElement) {
    errorElement.style.display = "none";
  }
}

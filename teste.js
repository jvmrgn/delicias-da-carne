const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const telefoneInput = document.getElementById("telefone");
  const preferenciaOptions = document.querySelectorAll(
    ".preferencia .radio-option input[type='radio']"
  );
  const tipoCarneOptions = document.querySelectorAll(
    ".dropdown-options .dropdown-option input[type='checkbox']"
  );
  const mensagemInput = document.querySelector(".text-area .input-field");

  const nomeValue = nomeInput.value.trim();
  const emailValue = emailInput.value.trim();
  const telefoneValue = telefoneInput.value.replace(/[\s()-]/g, "");
  const mensagemValue = mensagemInput.textContent.trim();

  let isValidForm = true;

  if (nomeValue === "" || nomeValue.split(" ").length < 2) {
    showError(
      nomeInput,
      "O campo de nome não pode estar em branco e deve possuir pelo menos 2 nomes."
    );
    isValidForm = false;
  } else {
    hideError(nomeInput);
  }

  if (!isValidEmail(emailValue)) {
    showError(emailInput, "O campo de email deve ser válido.");
    isValidForm = false;
  } else {
    hideError(emailInput);
  }

  if (telefoneValue.length !== 11) {
    showError(telefoneInput, "O campo de telefone deve possuir 11 caracteres.");
    isValidForm = false;
  } else {
    hideError(telefoneInput);
  }

  if (!isPreferenciaSelected(preferenciaOptions)) {
    const preferenciaContainer = document.querySelector(".preferencia");
    showError(preferenciaContainer, "Selecione ao menos uma preferência.");
    isValidForm = false;
  } else {
    hideError(preferenciaContainer);
  }

  if (!isTipoCarneSelected(tipoCarneOptions)) {
    const tipoCarneContainer = document.querySelector(".dropdown");
    showError(
      tipoCarneContainer,
      "Selecione ao menos um tipo de carne favorita."
    );
    isValidForm = false;
  } else {
    hideError(tipoCarneContainer);
  }

  if (mensagemValue.length < 5) {
    const mensagemContainer = document.querySelector(".text-area");
    showError(
      mensagemContainer,
      "A mensagem deve possuir pelo menos 5 caracteres."
    );
    isValidForm = false;
  } else {
    hideError(mensagemContainer);
  }

  if (isValidForm) {
    // Envio do formulário
    // ...

    // Exibir alerta de sucesso
    alert("Mensagem enviada com sucesso!");
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPreferenciaSelected(options) {
  return Array.from(options).some(
    (option) => option.querySelector("input[type='radio']").checked
  );
}

function isTipoCarneSelected(options) {
  return Array.from(options).some(
    (option) => option.querySelector("input[type='checkbox']").checked
  );
}

function showError(element, message) {
  const errorElement = element.querySelector(".error-message");
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  } else {
    const errorElement = document.createElement("span");
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

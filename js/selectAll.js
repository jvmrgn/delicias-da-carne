const todosOsMeiosCheckbox = document.getElementById("todos_os_meios");
const smsCheckbox = document.getElementById("sms");
const emailMarketingCheckbox = document.getElementById("email_marketing");
const whatsappCheckbox = document.getElementById("whatsapp");

// Função para verificar se todos os checkboxes de opção estão desmarcados
function checkAllUnchecked() {
  if (
    !smsCheckbox.checked &&
    !emailMarketingCheckbox.checked &&
    !whatsappCheckbox.checked
  ) {
    todosOsMeiosCheckbox.checked = false;
  }
}

// Event listener para o checkbox "todos os meios"
todosOsMeiosCheckbox.addEventListener("change", function () {
  if (this.checked) {
    smsCheckbox.checked = true;
    emailMarketingCheckbox.checked = true;
    whatsappCheckbox.checked = true;
  } else {
    smsCheckbox.checked = false;
    emailMarketingCheckbox.checked = false;
    whatsappCheckbox.checked = false;
  }
});

// Event listeners para os checkboxes de opção
smsCheckbox.addEventListener("change", function () {
  checkAllUnchecked();
  if (!this.checked) {
    todosOsMeiosCheckbox.checked = false;
    this.classList.add("removed");
    setTimeout(() => this.classList.remove("removed"), 500);
  }
});

emailMarketingCheckbox.addEventListener("change", function () {
  checkAllUnchecked();
  if (!this.checked) {
    todosOsMeiosCheckbox.checked = false;
    this.classList.add("removed");
    setTimeout(() => this.classList.remove("removed"), 500);
  }
});

whatsappCheckbox.addEventListener("change", function () {
  checkAllUnchecked();
  if (!this.checked) {
    todosOsMeiosCheckbox.checked = false;
    this.classList.add("removed");
    setTimeout(() => this.classList.remove("removed"), 500);
  }
});

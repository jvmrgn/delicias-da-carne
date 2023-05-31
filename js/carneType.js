const buttons = document.querySelectorAll(".radio-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    const selectedValue = button.dataset.value;
    console.log("Opção selecionada:", selectedValue);

    if (selectedValue === "ambas") {
      buttons.forEach((btn) => btn.classList.add("selected"));
    }
  });
});

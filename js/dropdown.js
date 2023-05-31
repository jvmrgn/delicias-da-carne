const dropdownTrigger = document.querySelector(".dropdown-trigger");
const dropdownOptions = document.querySelector(".dropdown-options");
const dropdown = document.querySelector(".dropdown");

dropdownTrigger.addEventListener("click", () => {
  dropdownOptions.classList.toggle("show");
  dropdown.classList.toggle("open");
});

const dropdownOptionItems = document.querySelectorAll(".dropdown-option");
dropdownOptionItems.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedValue = option.dataset.value;
    const selectedText = option.textContent;
    const selectedValueElement = document.querySelector(".selected-value");
    selectedValueElement.textContent = selectedText;
    dropdownOptions.classList.remove("show");
    dropdown.classList.remove("open");
    console.log("Opção selecionada:", selectedValue);
  });
});

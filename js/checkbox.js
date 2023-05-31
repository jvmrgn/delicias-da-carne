const checkboxes = document.querySelectorAll(".checkbox");
const allMeiosCheckbox = document.querySelector("#todos-meios");

allMeiosCheckbox.addEventListener("click", () => {
  const isChecked = allMeiosCheckbox.classList.toggle("checked");
  checkboxes.forEach((checkbox) => {
    checkbox.classList.toggle("checked", isChecked);
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("checked");
    const allChecked = Array.from(checkboxes).every(
      (checkbox) =>
        checkbox === allMeiosCheckbox || checkbox.classList.contains("checked")
    );
    allMeiosCheckbox.classList.toggle("checked", allChecked);
  });
});

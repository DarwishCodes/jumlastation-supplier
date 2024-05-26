document.addEventListener("DOMContentLoaded", () => {
  const textFieldElements = document.querySelectorAll(".mdc-text-field");
  textFieldElements.forEach((textFieldElement) => {
    mdc.textField.MDCTextField.attachTo(textFieldElement);
  });
});

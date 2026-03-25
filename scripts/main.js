const dialog = document.querySelector(".dialog");
const saveButton = document.querySelector(".save-button");
const dialogButton = document.querySelector(".dialog__button");

saveButton.addEventListener("click", () => dialog.showModal());
dialogButton.addEventListener("click", () => dialog.close());

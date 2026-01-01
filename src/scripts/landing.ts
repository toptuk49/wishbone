import { ButtonComponent } from "@components/button";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button[data-modal-target]").forEach((button) => {
    new ButtonComponent(button as HTMLButtonElement);
  });
});

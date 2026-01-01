class ButtonComponent {
  private element: HTMLButtonElement;

  constructor(element: HTMLButtonElement) {
    this.element = element;
    this.init();
  }

  private init() {
    const modalId = this.element.dataset.modalTarget;

    if (modalId) {
      this.element.addEventListener("click", () => {
        this.openModal(modalId);
      });
    }
  }

  private openModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (!modal) {
      console.warn(`Modal #${modalId} not found`);
      return;
    }

    modal.classList.add("modal-active");
    document.body.classList.add("modal-open");

    const closeButton = modal.querySelector(".modal__close");
    const overlay = modal.querySelector(".modal__overlay");

    const closeModal = () => {
      modal.classList.remove("modal-active");
      document.body.classList.remove("modal-open");
    };

    closeButton?.addEventListener("click", closeModal);
    overlay?.addEventListener("click", closeModal);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    modal.addEventListener("keydown", handleEscape);
  }
}

export { ButtonComponent };

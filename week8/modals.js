const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#open-modal"); // Assume you have a button to open the modal
const closeModalButton = document.querySelector(".close-button");

function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false"); // Make modal accessible to screen readers
}

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    // close the modal when user clicks outside of the .modal-content
    if (event.target === modal) {
        closeModal();
    }
});
// allow the esc key to close the modal as well.
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
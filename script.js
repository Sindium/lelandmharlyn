// Open modal when clicking a card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
  });
});

// Close modal when clicking X
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside content
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
// adada
//dadada
//dadada


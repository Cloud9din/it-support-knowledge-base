const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

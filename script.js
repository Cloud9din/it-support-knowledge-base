const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const guideButtons = document.querySelectorAll(".guide-btn");
const guidePanel = document.getElementById("guidePanel");
const guideContent = document.getElementById("guideContent");
const closeGuide = document.getElementById("closeGuide");
const categoriesSection = document.querySelector(".categories");

const guides = {
  "password-reset": `
    <h2>Password Reset</h2>
    <ol>
      <li>Confirm the user's identity before making account changes.</li>
      <li>Check that the account is active and not disabled.</li>
      <li>Use the approved password reset process.</li>
      <li>Ask the user to create a strong new password.</li>
      <li>Confirm the user can sign in successfully.</li>
    </ol>
  `,

  "account-locked": `
    <h2>Account Locked</h2>
    <ol>
      <li>Confirm the user's identity.</li>
      <li>Check whether the account is locked.</li>
      <li>Unlock the account using the approved support process.</li>
      <li>Check for repeated failed login attempts.</li>
      <li>Confirm the user can sign in again.</li>
    </ol>
  `,

  "sign-in": `
    <h2>Unable to Sign In</h2>
    <ol>
      <li>Check that the username is correct.</li>
      <li>Confirm the internet connection is working.</li>
      <li>Check whether the account is locked or disabled.</li>
      <li>Try signing in from another browser or device.</li>
      <li>Escalate the issue if it cannot be resolved.</li>
    </ol>
  `
};

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.classList.remove("hidden");
      visibleCards++;
    } else {
      card.classList.add("hidden");
    }
  });

  const existingMessage = document.querySelector(".no-results");

  if (existingMessage) {
    existingMessage.remove();
  }

  if (visibleCards === 0) {
    const message = document.createElement("div");
    message.classList.add("no-results");
    message.textContent = "No troubleshooting guides found.";
    categoriesSection.appendChild(message);
  }

  guidePanel.classList.add("hidden");
});

guideButtons.forEach(button => {
  button.addEventListener("click", function () {
    const guideName = button.dataset.guide;

    if (guides[guideName]) {
      guideContent.innerHTML = guides[guideName];
      guidePanel.classList.remove("hidden");

      guidePanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

closeGuide.addEventListener("click", function () {
  guidePanel.classList.add("hidden");
});

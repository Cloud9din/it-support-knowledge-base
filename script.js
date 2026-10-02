const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

const guideButtons = document.querySelectorAll(".guide-btn");
const guidePanel = document.getElementById("guidePanel");
const guideContent = document.getElementById("guideContent");
const closeGuide = document.getElementById("closeGuide");

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

const guides = {
  "password-reset": `
    <h2>Password Reset</h2>
    <ol>
      <li>Confirm the user's identity.</li>
      <li>Check whether the account is active.</li>
      <li>Use the approved password reset process.</li>
      <li>Ask the user to create a strong new password.</li>
      <li>Confirm the user can sign in successfully.</li>
    </ol>
  `,

  "account-locked": `
    <h2>Account Locked</h2>
    <ol>
      <li>Confirm the user's identity.</li>
      <li>Check whether the account has been locked.</li>
      <li>Unlock the account using the approved admin process.</li>
      <li>Check for repeated failed login attempts.</li>
      <li>Confirm the user can sign in again.</li>
    </ol>
  `,

  "sign-in": `
    <h2>Unable to Sign In</h2>
    <ol>
      <li>Check the username and password.</li>
      <li>Check the internet connection.</li>
      <li>Confirm the account is not locked.</li>
      <li>Try signing in from another browser or device.</li>
      <li>Escalate if the issue cannot be resolved.</li>
    </ol>
  `
};

guideButtons.forEach(button => {
  button.addEventListener("click", function () {
    const guideName = button.dataset.guide;

    guideContent.innerHTML = guides[guideName];
    guidePanel.classList.remove("hidden");
  });
});

closeGuide.addEventListener("click", function () {
  guidePanel.classList.add("hidden");
});

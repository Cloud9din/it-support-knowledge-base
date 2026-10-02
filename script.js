const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const guideButtons = document.querySelectorAll(".guide-btn");
const guidePanel = document.getElementById("guidePanel");
const guideContent = document.getElementById("guideContent");
const closeGuide = document.getElementById("closeGuide");
const categoriesSection = document.querySelector(".categories");

const guides = {
  "slow-computer": `
    <h2>Slow Computer</h2>
    <ol>
      <li>Check Task Manager for high CPU, memory or disk usage.</li>
      <li>Close unnecessary applications and browser tabs.</li>
      <li>Check available disk space.</li>
      <li>Restart the computer if it has been running for a long time.</li>
      <li>Check for pending Windows updates.</li>
      <li>Escalate if performance remains poor.</li>
    </ol>
  `,

  "windows-update": `
    <h2>Windows Update Issues</h2>
    <ol>
      <li>Confirm the device has an internet connection.</li>
      <li>Open Settings and check Windows Update.</li>
      <li>Restart the computer and try again.</li>
      <li>Check whether there is enough free disk space.</li>
      <li>Run the Windows Update troubleshooter if available.</li>
      <li>Escalate persistent update failures.</li>
    </ol>
  `,

  "app-not-responding": `
    <h2>Application Not Responding</h2>
    <ol>
      <li>Wait briefly to see if the application recovers.</li>
      <li>Open Task Manager and check the application status.</li>
      <li>End the task if it remains unresponsive.</li>
      <li>Restart the application.</li>
      <li>Restart the computer if the problem continues.</li>
      <li>Check for application updates or escalate if needed.</li>
    </ol>
  `,

  "outlook-not-opening": `
    <h2>Outlook Not Opening</h2>
    <ol>
      <li>Confirm the user has an internet connection.</li>
      <li>Close Outlook completely and reopen it.</li>
      <li>Restart the computer.</li>
      <li>Check whether Microsoft 365 is working in the browser.</li>
      <li>Check for Office updates.</li>
      <li>Escalate if Outlook still does not open.</li>
    </ol>
  `,

  "cannot-send-email": `
    <h2>Cannot Send Email</h2>
    <ol>
      <li>Check the internet connection.</li>
      <li>Confirm the recipient email address is correct.</li>
      <li>Check the Outbox for stuck messages.</li>
      <li>Check whether the mailbox is full.</li>
      <li>Try sending from Outlook on the web.</li>
      <li>Escalate if the issue continues.</li>
    </ol>
  `,

  "teams-sign-in": `
    <h2>Teams Sign-In Problem</h2>
    <ol>
      <li>Confirm the username and password are correct.</li>
      <li>Check the internet connection.</li>
      <li>Close and reopen Microsoft Teams.</li>
      <li>Try signing in through the browser.</li>
      <li>Restart the computer.</li>
      <li>Escalate if the account still cannot sign in.</li>
    </ol>
  `,

  "no-internet": `
    <h2>No Internet Connection</h2>
    <ol>
      <li>Check whether Wi-Fi or Ethernet is connected.</li>
      <li>Check whether other websites or services are working.</li>
      <li>Run ipconfig to review network information.</li>
      <li>Ping a known address to test connectivity.</li>
      <li>Restart the network adapter or reconnect to Wi-Fi.</li>
      <li>Escalate if the connection remains unavailable.</li>
    </ol>
  `,

  "wifi-disconnecting": `
    <h2>Wi-Fi Disconnecting</h2>
    <ol>
      <li>Check Wi-Fi signal strength.</li>
      <li>Disconnect and reconnect to the wireless network.</li>
      <li>Restart the computer.</li>
      <li>Forget the Wi-Fi network and reconnect if appropriate.</li>
      <li>Check for wireless adapter driver updates.</li>
      <li>Escalate repeated connection drops.</li>
    </ol>
  `,

  "ip-troubleshooting": `
    <h2>IP Address Troubleshooting</h2>
    <ol>
      <li>Open Command Prompt.</li>
      <li>Run ipconfig /all.</li>
      <li>Check the IPv4 address, gateway and DNS information.</li>
      <li>Look for a 169.254.x.x address, which may indicate a DHCP problem.</li>
      <li>Try ipconfig /release followed by ipconfig /renew where appropriate.</li>
      <li>Escalate if a valid address cannot be obtained.</li>
    </ol>
  `,

  "printer-offline": `
    <h2>Printer Offline</h2>
    <ol>
      <li>Check that the printer is powered on.</li>
      <li>Check USB, network or Wi-Fi connectivity.</li>
      <li>Confirm the correct printer is selected.</li>
      <li>Check the printer queue.</li>
      <li>Restart the printer and computer.</li>
      <li>Escalate if the printer remains offline.</li>
    </ol>
  `,

  "print-queue": `
    <h2>Print Queue Stuck</h2>
    <ol>
      <li>Open the printer queue.</li>
      <li>Cancel any stuck print jobs.</li>
      <li>Try printing a new test document.</li>
      <li>Restart the Print Spooler service if permitted.</li>
      <li>Restart the printer.</li>
      <li>Escalate if jobs continue to remain stuck.</li>
    </ol>
  `,

  "printer-not-detected": `
    <h2>Printer Not Detected</h2>
    <ol>
      <li>Check that the printer is switched on.</li>
      <li>Check the USB or network connection.</li>
      <li>Open Windows printer settings.</li>
      <li>Try adding the printer again.</li>
      <li>Check whether the required driver is installed.</li>
      <li>Escalate if Windows still cannot detect the printer.</li>
    </ol>
  `,

  "password-reset": `
    <h2>Password Reset</h2>
    <ol>
      <li>Confirm the user's identity before making account changes.</li>
      <li>Check that the account is active.</li>
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
      <li>Unlock it using the approved support process.</li>
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
      <li>Escalate if the issue cannot be resolved.</li>
    </ol>
  `,

  "keyboard-not-working": `
    <h2>Keyboard Not Working</h2>
    <ol>
      <li>Check the cable or wireless connection.</li>
      <li>Try another USB port if applicable.</li>
      <li>Restart the computer.</li>
      <li>Check Device Manager for errors.</li>
      <li>Test with another keyboard if available.</li>
      <li>Escalate if the hardware appears faulty.</li>
    </ol>
  `,

  "monitor-not-detected": `
    <h2>Monitor Not Detected</h2>
    <ol>
      <li>Check that the monitor is powered on.</li>
      <li>Check the display cable connection.</li>
      <li>Try another cable or port if available.</li>
      <li>Use Windows display settings to detect the monitor.</li>
      <li>Restart the computer.</li>
      <li>Escalate if the monitor is still not detected.</li>
    </ol>
  `,

  "usb-not-recognised": `
    <h2>USB Device Not Recognised</h2>
    <ol>
      <li>Disconnect and reconnect the USB device.</li>
      <li>Try another USB port.</li>
      <li>Restart the computer.</li>
      <li>Check Device Manager for errors.</li>
      <li>Test the USB device on another computer if possible.</li>
      <li>Escalate if the device continues to fail.</li>
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

const alerts = [
  "🔐 Major data breach at a social platform affecting 2M users.",
  "💸 New phishing scam pretending to be your bank detected.",
  "⚠️ Fake antivirus software spreading via email attachments.",
  "🕵️‍♀️ Cyber criminals targeting students with fake internship offers.",
  "🚨 Malware hidden inside free game downloads reported.",
  "📧 Fake government tax refund emails circulating online.",
  "🤖 AI-generated scam messages detected on messaging apps."
];

function showAlerts() {
  const container = document.getElementById("alerts-container");
  container.innerHTML = "";
  const shuffled = alerts.sort(() => 0.5 - Math.random());
  shuffled.slice(0, 4).forEach(alert => {
    const div = document.createElement("div");
    div.className = "alert-box";
    div.textContent = alert;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showAlerts();
  document.getElementById("refresh-btn").addEventListener("click", showAlerts);

  // Checklist progress tracker
  const checkboxes = document.querySelectorAll(".chk");
  const progressBar = document.getElementById("progress-bar");

  function updateProgress() {
    const total = checkboxes.length;
    const checked = [...checkboxes].filter(c => c.checked).length;
    const percent = (checked / total) * 100;
    progressBar.style.width = percent + "%";
  }

  checkboxes.forEach(chk => chk.addEventListener("change", updateProgress));
});

function checkPassword() {
  const pwd = document.getElementById("pwdInput").value;
  const strength = document.getElementById("pwdStrength");
  const suggestions = document.getElementById("pwdSuggestions");
  let msg = "Weak 🔴";
  let advice = "";

  if (pwd.length > 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd) && /\W/.test(pwd)) {
    msg = "Strong 🟢";
    advice = "✅ Great! Your password looks strong. Keep it private and unique.";
  } else if (pwd.length >= 6) {
    msg = "Medium 🟡";
    advice = "⚠️ Add capital letters, symbols, and numbers to make it stronger.";
  } else {
    msg = "Weak 🔴";
    advice = "❌ Use at least 8+ characters with mix of A-Z, a-z, 0-9, and symbols.";
  }

  strength.textContent = `Password Strength: ${msg}`;
  suggestions.textContent = advice;
}

// Sample data – in real use, this could come from an API
const alerts = [
  "🔐 Major data breach at social media platform affecting 2M users.",
  "💸 New phishing scam pretending to be your bank detected.",
  "⚠️ Fake antivirus software spreading via email attachments.",
  "🕵️‍♀️ Cyber criminals targeting students with fake internship offers.",
  "🚨 Malware hidden inside free game downloads reported.",
  "📧 Government warns about fake income tax refund emails.",
  "🧠 AI-generated scam messages detected on messaging apps."
];

function showAlerts() {
  const container = document.getElementById("alerts-container");
  container.innerHTML = ""; // clear previous alerts

  // Shuffle alerts randomly
  const shuffled = alerts.sort(() => 0.5 - Math.random());

  shuffled.slice(0, 5).forEach((alert, i) => {
    const div = document.createElement("div");
    div.className = "bg-gray-800 text-left p-3 rounded-xl text-gray-200 border border-purple-700 hover:bg-gray-700 transition fade-in";
    div.style.animationDelay = `${i * 0.1}s`;
    div.textContent = alert;
    container.appendChild(div);
  });
}

// Show alerts automatically on page load
showAlerts();

// Add refresh functionality
document.getElementById("refresh-btn").addEventListener("click", showAlerts);

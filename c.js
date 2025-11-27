const password = document.getElementById("password");
const bar = document.getElementById("strength-bar");
const text = document.getElementById("strength-text");

password.addEventListener("input", () => {
    const value = password.value;
    let strength = 0;

    if (value.length > 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    updateStrength(strength);
});

function updateStrength(strength) {
    bar.style.width = (strength * 20) + "%";

    if (strength <= 2) {
        bar.style.background = "red";
        text.innerText = "Weak password";
    } 
    else if (strength === 3) {
        bar.style.background = "orange";
        text.innerText = "Medium password";
    } 
    else {
        bar.style.background = "green";
        text.innerText = "Strong password 🔒";
    }
}

function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let strongPass = "";

    for (let i = 0; i < 12; i++) {
        strongPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("suggested").value = strongPass;
}
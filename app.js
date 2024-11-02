function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
}

function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[A-Za-z]/.test(password);
}

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        displayMessage("Logging in...", "blue");

        // In a real application, you'd send data to the server here
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            displayMessage("Login successful!", "green");
        } else {
            displayMessage("Login failed. Check credentials.", "red");
        }
    } else {
        displayMessage("Please enter both email and password.", "red");
    }
}

async function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validatePassword(password)) {
        displayMessage("Signing up...", "blue");

        // Send data to the backend to store securely
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            displayMessage("Signup successful!", "green");
        } else {
            displayMessage("Signup failed. Try again.", "red");
        }
    } else {
        displayMessage("Password too weak!", "red");
    }
}

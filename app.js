const users = [
    { email: "user@example.com", password: "Password123" },
    { email: "test@gmail.com", password: "TestPass456" }
];

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

        // Simulate login checking against hard-coded users
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
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

        // Simulate a successful signup response
        users.push({ email, password }); // Add to the list of users for testing
        displayMessage("Signup successful!", "green");
    } else {
        displayMessage("Password too weak!", "red");
    }
}

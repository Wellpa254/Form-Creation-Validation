document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset feedback
        feedback.style.display = 'none';
        feedback.textContent = '';
        feedback.style.color = '';
        const messages = [];
        let isValid = true;

        // Retrieve input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Validation logic
        if (username === '') {
            messages.push('Username is required.');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            messages.push('Invalid email format.');
            isValid = false;
        }

        if (password.length < 6) {
            messages.push('Password must be at least 6 characters long.');
            isValid = false;
        }

        // Feedback display logic
        feedback.style.display = 'block';
        if (isValid) {
            feedback.textContent = "Registration successful!";
            feedback.style.color = "#28a745";
        } else {
            feedback.innerHTML = messages.join('<br>');
            feedback.style.color = "#dc3545";
        }
    });
});

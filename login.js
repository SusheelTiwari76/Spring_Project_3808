// login.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredEmail = document.getElementById('email').value;
        const enteredPassword = document.getElementById('password').value;

        // Check for specific credentials (test values)
        const validEmail = 'test@gmail.com';
        const validPassword = '1234';

        if (enteredEmail === validEmail && enteredPassword === validPassword) {
            // Redirect to customer list page on successful login
            window.location.href = './customer-list.html';
            // Updated path
        } else {
            // Display an error message or handle authentication failure
            alert('Invalid email or password. Please try again.');
        }
    });
});

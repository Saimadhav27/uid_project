document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    loginForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which would reload the page)
        event.preventDefault();

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        let isValid = true; // Flag to track overall form validity
        let firstErrorMessage = ''; // To store the first error message for a single alert

        // --- Username Validation ---
        const username = usernameInput.value.trim();
        // Regular expression for only letters (words)
        // ^[a-zA-Z]+$: Starts with (^) one or more (+) letters (a-z, A-Z) and ends ($) with a letter.
        const usernameRegex = /^[a-zA-Z]+$/;

        if (username === '') {
            usernameError.textContent = 'Username is required.';
            if (!firstErrorMessage) firstErrorMessage = 'Username is required.';
            isValid = false;
        } else if (!usernameRegex.test(username)) {
            usernameError.textContent = 'Username can only contain letters.';
            if (!firstErrorMessage) firstErrorMessage = 'Username can only contain letters.';
            isValid = false;
        }

        // --- Password Validation ---
        const password = passwordInput.value.trim(); // Trim password for emptiness check, but regex handles leading/trailing if numeric
        // Regular expression for only numbers (digits)
        // ^[0-9]+$: Starts with (^) one or more (+) digits (0-9) and ends ($) with a digit.
        const passwordRegex = /^[0-9]+$/;

        if (password === '') {
            passwordError.textContent = 'Password is required.';
            if (!firstErrorMessage) firstErrorMessage = 'Password is required.';
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password can only contain numbers.';
            if (!firstErrorMessage) firstErrorMessage = 'Password can only contain numbers.';
            isValid = false;
        }
        // You can add more complex password validation, e.g., length
        // else if (password.length < 4) {
        //     passwordError.textContent = 'Password must be at least 4 digits long.';
        //     if (!firstErrorMessage) firstErrorMessage = 'Password must be at least 4 digits long.';
        //     isValid = false;
        // }


        // --- Alert the first error message if validation failed ---
        if (!isValid && firstErrorMessage) {
            alert('Validation Error:\n' + firstErrorMessage);
            // Optionally, focus on the first invalid field
            if (usernameError.textContent) {
                usernameInput.focus();
            } else if (passwordError.textContent) {
                passwordInput.focus();
            }
        }


        // If all validations pass
        if (isValid) {
            console.log('Form is valid. Submitting...');
            // In a real application, you would send this data to a server for authentication.
            // For this example, we'll just redirect if validation passes.
            window.location.href = 'PROO.html';
        }
    });
});

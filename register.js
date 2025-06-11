document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const regUsernameInput = document.getElementById('regUsername');
    const regEmailInput = document.getElementById('regEmail');
    const regPasswordInput = document.getElementById('regPassword');
    const regConfirmPasswordInput = document.getElementById('regConfirmPassword');

    const regUsernameError = document.getElementById('regUsername-error');
    const regEmailError = document.getElementById('regEmail-error');
    const regPasswordError = document.getElementById('regPassword-error');
    const regConfirmPasswordError = document.getElementById('regConfirmPassword-error');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        regUsernameError.textContent = '';
        regEmailError.textContent = '';
        regPasswordError.textContent = '';
        regConfirmPasswordError.textContent = '';

        let isValid = true;
        let firstErrorMessage = '';

        const username = regUsernameInput.value.trim();
        const email = regEmailInput.value.trim();
        const password = regPasswordInput.value;
        const confirmPassword = regConfirmPasswordInput.value;

        const usernameRegex = /^[a-zA-Z0-9_]+$/;

        if (username === '') {
            firstErrorMessage = 'Username is required.';
            regUsernameError.textContent = firstErrorMessage;
            isValid = false;
        } else if (username.length < 3) {
            if (!firstErrorMessage) firstErrorMessage = 'Username must be at least 3 characters long.';
            regUsernameError.textContent = 'Username must be at least 3 characters long.';
            isValid = false;
        } else if (!usernameRegex.test(username)) {
            if (!firstErrorMessage) firstErrorMessage = 'Username can only contain letters, numbers, and underscores.';
            regUsernameError.textContent = 'Username can only contain letters, numbers, and underscores.';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            if (!firstErrorMessage) firstErrorMessage = 'Email is required.';
            regEmailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            if (!firstErrorMessage) firstErrorMessage = 'Please enter a valid email address.';
            regEmailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
;

        if (password === '') {
            if (!firstErrorMessage) firstErrorMessage = 'Password is required.';
            regPasswordError.textContent = 'Password is required.';
            isValid = false;
        } else if (password.length < 8) {
            if (!firstErrorMessage) firstErrorMessage = 'Password must be at least 8 characters long.';
            regPasswordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else if (!passwordStrengthRegex.test(password)) {
            if (!firstErrorMessage) firstErrorMessage = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).';
            regPasswordError.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).';
            isValid = false;
        }

        if (confirmPassword === '') {
            if (!firstErrorMessage) firstErrorMessage = 'Confirm password is required.';
            regConfirmPasswordError.textContent = 'Confirm password is required.';
            isValid = false;
        } else if (password !== confirmPassword) {
            if (!firstErrorMessage) firstErrorMessage = 'Passwords do not match.';
            regConfirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        if (!isValid && firstErrorMessage) {
            alert('Registration Error:\n' + firstErrorMessage);
            if (regUsernameError.textContent) {
                regUsernameInput.focus();
            } else if (regEmailError.textContent) {
                regEmailInput.focus();
            } else if (regPasswordError.textContent) {
                regPasswordInput.focus();
            } else if (regConfirmPasswordError.textContent) {
                regConfirmPasswordInput.focus();
            }
        }

        if (isValid) {
            console.log('Registration Form is valid. Registering user...');
            alert('Registration successful! Redirecting to login page.');
            window.location.href = 'PROO.html';
        } else {
            console.log('Form is NOT valid. Please fix errors above.');
        }
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const firstName = sanitizeInput(document.getElementById('firstName').value);
    const lastName = sanitizeInput(document.getElementById('lastName').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const password = sanitizeInput(document.getElementById('password').value);
    const confirmPassword = sanitizeInput(document.getElementById('confirmPassword').value);
    const errorMessages = [];

    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessages.push('Please fill in all fields');
    }

    if (!isValidEmail(email)) {
        errorMessages.push('Please enter a valid email address');
    }

    if (password !== confirmPassword) {
        errorMessages.push('Passwords do not match');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        alert(errorMessages.join('\n'));
    }
});

function sanitizeInput(input) {
    // Replace potentially malicious characters with safe equivalents
    return input.replace(/[&<>"'/]/g, function(match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;'
        }[match];
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

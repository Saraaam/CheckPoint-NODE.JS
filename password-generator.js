// password-generator.js

const generatePassword = require('generate-password'); // Import the generate-password module

// Generate a random password with 10 characters
const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
});

console.log('Generated password:', password);

// email-sender.js

const nodemailer = require('nodemailer'); // Import nodemailer

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // For Gmail, use 'gmail' service
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password'    // Replace with your email password (or app password)
    }
});

// Set up email data
const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'your-email@gmail.com',   // Receiver address (can be your own for testing)
    subject: 'Test Email',        // Subject line
    text: 'Hello, this is a test email from Node.js!' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

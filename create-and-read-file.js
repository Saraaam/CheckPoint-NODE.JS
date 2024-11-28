// create-and-read-file.js

const fs = require('fs'); // Require the file system module

// 1. Create a file named 'welcome.txt' with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File has been created');

    // 2. Read the content from 'welcome.txt' and log it
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Content of welcome.txt:', data);
    });
});

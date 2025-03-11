// This file contains the JavaScript code for the website. It handles interactivity, animations, and any dynamic content that may be required.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interaction
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'Button clicked! Welcome to the single-page site.';
    });

    // Add any additional interactivity or animations here
});
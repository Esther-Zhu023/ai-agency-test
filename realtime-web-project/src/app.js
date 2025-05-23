// src/app.js
import { generateRandomData } from './utils/dataGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const updateButton = document.getElementById('update-button');
    const dataContainer = document.getElementById('data-container');

    // Function to apply the saved theme
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode'); // Default to light
        }
    };

    // Function to toggle theme and save preference
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Apply saved theme on initial load
    applySavedTheme();

    // Event listener for the toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }

    // Event listener for the update data button
    if (updateButton && dataContainer) {
        const displayData = () => { // Renamed to avoid conflict if updateStatus was global
            const newData = generateRandomData(); // Using the imported function
            dataContainer.innerHTML = `<pre>${JSON.stringify(newData, null, 2)}</pre>`;
        };
        
        updateButton.addEventListener('click', displayData);
        displayData(); // Also display data on initial load
    }
});
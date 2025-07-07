const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setTheme('light-mode');
    } else {
        setTheme('dark-mode');
    }
});

// Check for saved theme in localStorage or user's preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark-mode');
    } else {
        setTheme('light-mode');
    }
});

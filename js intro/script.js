const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check if user preference exists in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    // Store user preference in local storage
    if (body.classList.contains('darkMode')) {
        localStorage.setItem('theme', 'darkMode');
    } else {
        localStorage.setItem('theme', '');
    }
});

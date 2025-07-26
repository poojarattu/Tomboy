// Theme switcher logic const themeSwitcher = document.getElementById('themeSwitcher');

if (themeSwitcher) { themeSwitcher.addEventListener('change', function () { document.body.className = this.value; localStorage.setItem('selectedTheme', this.value); });

// Load saved theme on page load 
const savedTheme = localStorage.getItem('selectedTheme'); if (savedTheme) { document.body.className = savedTheme; themeSwitcher.value = savedTheme; } }

// Optional: Dropdown hover for mobile-friendly toggle (if needed) 
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {
     drop.addEventListener('click', () => {
         drop.classList.toggle('open');
     });
});
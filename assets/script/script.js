function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event Listener for Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Create and inject modal into the DOM
const modal = document.createElement('div');
modal.id = 'imageModal';
document.body.appendChild(modal);

modal.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.innerHTML = '';
});

// Attach preview functionality to all images inside project gallery
document.querySelectorAll('.project-gallery img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        modal.classList.add('active');
        const enlarged = document.createElement('img');
        enlarged.src = img.src;
        modal.appendChild(enlarged);
    });
});

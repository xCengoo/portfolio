// Initial profile image flip animation
document.addEventListener('DOMContentLoaded', () => {
    const profileWrapper = document.querySelector('.profile-image-wrapper');
    // Kleine Verzögerung, damit die Animation nach dem Laden der Seite startet
    setTimeout(() => {
        profileWrapper.classList.add('initial-flip');
        // Entferne die Klasse nach der Animation, damit der Hover-Effekt normal funktioniert
        profileWrapper.addEventListener('animationend', () => {
            profileWrapper.classList.remove('initial-flip');
        }, { once: true });
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add shadow to navigation on scroll and handle scroll to top button visibility
const scrollToTopButton = document.getElementById('getUpButton');
let isScrolling = false;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }

    // Throttle the scroll event
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Scroll to top function that can be called from HTML
window.scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Scroll to top button click handler
scrollToTopButton.addEventListener('click', scrollToTop);

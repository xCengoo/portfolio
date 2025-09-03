// Smooth // Add// Smooth scrolling for navigationdocument.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const getUpButton = document.getElementById('getUpButton');
    
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }

    if (window.scrollY > 300) {
        getUpButton.style.display = 'block';
    } else {
        getUpButton.style.display = 'none';
    }
});

document.getElementById('getUpButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});erySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add shadow to navigation on scroll and handle get up button visibility
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const getUpButton = document.getElementById('getUpButton');
    
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }

    if (window.scrollY > 300) {
        getUpButton.style.display = 'block';
    } else {
        getUpButton.style.display = 'none';
    }
});

// Get up button click handler
document.getElementById('getUpButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});on on scroll and handle get up button visibility
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const getUpButton = document.getElementById('getUpButton');
    
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }

    if (window.scrollY > 300) {
        getUpButton.style.display = 'block';
    } else {
        getUpButton.style.display = 'none';
    }
}); for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add shadow to navigation on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
});

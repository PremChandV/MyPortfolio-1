// ==================== Navbar Toggle Icon ====================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ==================== Scroll Sections Active Link ====================
let sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // Highlight the active link in the navbar
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
    // ==================== Sticky Navbar ====================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // ==================== Remove Toggle Icon and Navbar When Clicked ====================
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
// ==================== Dark/Light Theme Toggle ====================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(isLight) {
    document.body.classList.toggle('light-theme', isLight);
    themeIcon.classList.toggle('fa-moon', isLight);
    themeIcon.classList.toggle('fa-sun', !isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    setTheme(true);
} else {
    setTheme(false); // Apply dark theme as default
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-theme');
    setTheme(isLight);
});
// ==================== Scroll Reveal ====================
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ==================== Typed.js ====================
document.addEventListener("DOMContentLoaded", function () {
    // Typewriting effect for name
    var nameTyped = new Typed('.name-text', {
        strings: ['Prem Chand'],
        typeSpeed: 100,
        showCursor: true,
        loop: false
    });
    // Typewriting effect for multiple roles
    var typed = new Typed('.multiple-text', {
        strings: ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Youtuber'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// ==================== Show Footer-Top Icon on Scroll Into About Section ====================
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const iconTop = document.querySelector(".footer-iconTop");

    function getCurrentSection() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
        return sections[index].id;
    }

    function toggleIconBasedOnSection() {
        const current = getCurrentSection();

        if (current !== "home") {
            iconTop.classList.add("show");
        } else {
            iconTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleIconBasedOnSection);
    window.addEventListener("load", toggleIconBasedOnSection);
});

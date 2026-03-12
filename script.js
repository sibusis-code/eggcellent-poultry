// ===== Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animation class to elements
document.querySelectorAll('.about-card, .product-card, .feature-item, .contact-form, .contact-info-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ===== WhatsApp Form Submission =====
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const location = document.getElementById('location').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('message').value.trim();

    // Build WhatsApp message
    let waMessage = `New Order from Eggcellent Poultry Website\n\n`;
    waMessage += `Name: ${name}\n`;
    waMessage += `Phone: ${phone}\n`;

    if (location) {
        waMessage += `Location: ${location}\n`;
    }

    waMessage += `Product: ${product}\n`;

    if (quantity) {
        waMessage += `Quantity: ${quantity}\n`;
    }

    if (message) {
        waMessage += `Message: ${message}\n`;
    }

    // waMessage += `\n---\nSent from eggcellentpoultry.co.za`;

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappURL = `https://wa.me/27738590036?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
});

// ===== Smooth scroll for Safari =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

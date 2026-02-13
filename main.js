// Smooth Reveal on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 2rem';
        nav.style.background = 'rgba(5, 7, 10, 0.95)';
    } else {
        nav.style.padding = '1.5rem 2rem';
        nav.style.background = 'rgba(5, 7, 10, 0.7)';
    }
});

// Log for verification
console.log('Invisible Bookkeeping site initialized.');

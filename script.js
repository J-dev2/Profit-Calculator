function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) { // Check if the element exists
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent successfully!');
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll behavior
    let previousScrollPosition = 0;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > 50 && previousScrollPosition <= 50) {
            navbar.classList.add('compact');
        } else if (currentScrollPosition <= 50 && previousScrollPosition > 50) {
            navbar.classList.remove('compact');
        }
        previousScrollPosition = currentScrollPosition;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function opencalc() {
    window.location.href = "Calculator/calculator.html";
}

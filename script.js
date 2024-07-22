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
});

function opencalc() {
    location.href = "/Calc/calculator.html";
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scroll Behavior for Navigation (Scroll Behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile nav if open
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Mobile Navigation Toggle (Hamburger)
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // 3. Form Usability - Basic Form Submission (Client-side validation & alert)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields before submitting.');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // If valid, simulate submission
            alert('Thank you for your message! We will get back to you shortly.');
            this.reset(); // Clear the form
        });
    }
});
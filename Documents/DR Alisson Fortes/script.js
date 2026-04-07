document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(faq => faq.classList.remove('active'));
                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // Countdown Timer (24 hours demo)
    const countdownItems = document.querySelectorAll('.cd-number');
    if (countdownItems.length === 4) {
        let time = 24 * 60 * 60; // 24 hours in seconds
        setInterval(() => {
            if (time > 0) time--;
            const d = Math.floor(time / (24 * 3600));
            const h = Math.floor((time % (24 * 3600)) / 3600);
            const m = Math.floor((time % 3600) / 60);
            const s = time % 60;
            
            countdownItems[0].textContent = d.toString().padStart(2, '0');
            countdownItems[1].textContent = h.toString().padStart(2, '0');
            countdownItems[2].textContent = m.toString().padStart(2, '0');
            countdownItems[3].textContent = s.toString().padStart(2, '0');
        }, 1000);
    }
});

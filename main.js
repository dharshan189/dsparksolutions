document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const statCards = document.querySelectorAll('.stat-card');
    const revealOnScroll = () => {
        // Handle reveal elements
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });

        // Handle stat cards independently for counting
        statCards.forEach(card => {
            const elementTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                if (!card.classList.contains('counted')) {
                    card.classList.add('counted');
                    const counter = card.querySelector('.stat-number');
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const isFloat = target % 1 !== 0;
                        const currentVal = progress * target;
                        const current = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);
                        const suffix = counter.getAttribute('data-suffix') || '';
                        counter.innerText = current + (progress === 1 ? suffix : '');
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + suffix;
                        }
                    };
                    requestAnimationFrame(updateCounter);
                }
            }
        });
    };

    // Preloader removal
    const preloader = document.getElementById('preloader');
    const preloaderContent = document.querySelector('.preloader-content');
    const startBtn = document.getElementById('start-btn');

    const startRevealSequence = () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(revealOnScroll, 500);
    };

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Instant UI feedback
            startBtn.style.opacity = '0';
            startBtn.style.pointerEvents = 'none';
            
            if (preloaderContent) {
                preloaderContent.style.transition = 'opacity 1s ease';
                preloaderContent.style.opacity = '0';
            }
            
            // Faster reveal now that BGM is removed
            preloader.style.transition = 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            preloader.style.opacity = '0';
            
            setTimeout(startRevealSequence, 1500);
        });
    }

    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Our Work Slideshow Logic
    const slides = document.querySelectorAll('.work-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    let slideInterval = setInterval(nextSlide, 4000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            slideInterval = setInterval(nextSlide, 4000);
        });
    });

    // Modal Logic
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    const showSuccessPopup = () => {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Optional: reset and show form again or redirect
            const form = document.getElementById('contact-form');
            if (form) {
                form.reset();
                form.style.display = 'flex';
                const successStatus = document.getElementById('form-status-success');
                if (successStatus) successStatus.style.display = 'none';
            }
        });
    }

    // Contact form handling with Formspree
    if (window.formspree) {
        window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
        formspree('initForm', { 
            formElement: '#contact-form', 
            formId: 'xwvyjnaj',
            onSuccess: (data) => {
                showSuccessPopup();
            }
        });
    } else {
        // Fallback or wait for script to load
        window.addEventListener('load', () => {
            if (window.formspree) {
                formspree('initForm', { 
                    formElement: '#contact-form', 
                    formId: 'xwvyjnaj',
                    onSuccess: (data) => {
                        showSuccessPopup();
                    }
                });
            }
        });
    }
});

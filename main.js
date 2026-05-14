document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    // Preloader removal and Opening Sound
    const preloader = document.getElementById('preloader');
    const preloaderContent = document.querySelector('.preloader-content');
    const openingSound = document.getElementById('opening-sound');
    const startBtn = document.getElementById('start-btn');

    const startRevealSequence = () => {
        // Reveal site fully after exactly 8 seconds of the sound playing
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(revealOnScroll, 500);
        }, 8000);
    };

    const playOpeningSound = () => {
        if (openingSound) {
            openingSound.volume = 1.0;
            openingSound.play().then(() => {
                // Start reveal sequence only AFTER sound successfully starts
                startRevealSequence();
                
                // Stop sound after 8 seconds
                setTimeout(() => {
                    openingSound.pause();
                    openingSound.currentTime = 0;
                }, 8000);
            }).catch((error) => {
                console.error("Playback failed:", error);
            });
        }
    };

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // 1. Instant sound trigger
            if (openingSound) {
                openingSound.volume = 1.0;
                openingSound.play();
                
                // Start professional fade out at 6 seconds, finish at 8 seconds
                setTimeout(() => {
                    const fadeInterval = setInterval(() => {
                        if (openingSound.volume > 0.05) {
                            openingSound.volume -= 0.05;
                        } else {
                            openingSound.volume = 0;
                            openingSound.pause();
                            openingSound.currentTime = 0;
                            clearInterval(fadeInterval);
                        }
                    }, 100); // Fade every 100ms
                }, 6000); 
            }
            
            // 2. Instant reveal sequence start
            startRevealSequence();
            
            // 3. Instant UI feedback
            startBtn.style.opacity = '0';
            startBtn.style.pointerEvents = 'none';
            
            if (preloaderContent) {
                preloaderContent.style.transition = 'opacity 1s ease';
                preloaderContent.style.opacity = '0';
            }
            
            preloader.style.transition = 'opacity 8s cubic-bezier(0.4, 0, 0.2, 1)';
            preloader.style.opacity = '0.4';
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

    // Contact form handling with Formspree
    if (window.formspree) {
        window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
        formspree('initForm', { 
            formElement: '#contact-form', 
            formId: 'xwvyjnaj',
            onSuccess: (data) => {
                const form = document.getElementById('contact-form');
                form.style.display = 'none';
                document.getElementById('form-status-success').style.display = 'block';
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
                        const form = document.getElementById('contact-form');
                        form.style.display = 'none';
                        document.getElementById('form-status-success').style.display = 'block';
                    }
                });
            }
        });
    }
});

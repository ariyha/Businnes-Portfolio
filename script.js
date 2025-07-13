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

        // Enhanced navbar scroll effect with dynamic colors
        function updateNavbarTheme() {
            const navbar = document.getElementById('navbar');
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // Offset for navbar height
            
            // Remove all theme classes
            navbar.classList.remove('hero-nav', 'about-nav', 'services-nav', 'projects-nav', 'contact-nav', 'scrolled');
            
            // Check which section is currently in view
            let currentSection = 'hero';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            // Apply appropriate theme based on current section
            switch(currentSection) {
                case 'home':
                    navbar.classList.add('hero-nav');
                    break;
                case 'about':
                    navbar.classList.add('about-nav');
                    break;
                case 'services':
                    navbar.classList.add('services-nav');
                    break;
                case 'projects':
                    navbar.classList.add('projects-nav');
                    break;
                case 'contact':
                    navbar.classList.add('contact-nav');
                    break;
                default:
                    navbar.classList.add('scrolled');
            }
        }

        // Update navbar on scroll
        window.addEventListener('scroll', updateNavbarTheme);
        
        // Initialize navbar theme on page load
        document.addEventListener('DOMContentLoaded', updateNavbarTheme);

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Update active nav link based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Create floating particles
        function createParticles() {
            const hero = document.querySelector('.hero');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 10 + 5 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                hero.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });

        // Service cards stagger animation
        window.addEventListener('scroll', () => {
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        });

        // Initialize service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
        });

        // Typing effect for hero text (enhanced version)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Enhanced hover effects for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple form validation
            if (!data.firstName || !data.lastName || !data.email || !data.projectType || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                closeModal();
            }, 1500);
        });

        // Modal functions
        function openModal() {
            document.getElementById('contactModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('contactModal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Form input animations
        document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });

        // Smooth reveal animation for contact items
        const contactItems = document.querySelectorAll('.contact-item');
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        });

        contactItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            contactObserver.observe(item);
        });

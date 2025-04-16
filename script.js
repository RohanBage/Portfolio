// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Skill tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillLists = document.querySelectorAll('.skills-list');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and skill lists
            tabBtns.forEach(b => b.classList.remove('active'));
            skillLists.forEach(list => list.classList.remove('active'));
            
            // Add active class to clicked button and corresponding skill list
            this.classList.add('active');
            const target = this.getAttribute('data-target');
            document.querySelector(target).classList.add('active');
        });
    });

    // Projects filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide project cards based on filter
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Project Modal
    const projectModal = document.querySelector('.project-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    
    // Project details content
    const projectDetails = {
        draupadi: {
            title: 'DraupadiAI - Women Safety System',
            description: `DraupadiAI is an innovative real-time voice anomaly detection system designed to enhance women's safety. The system detects keywords like "help me" and recognizes screams with 92% accuracy, triggering automatic safety protocols.`,
            features: [
                'Real-time voice anomaly detection using advanced AI algorithms',
                'Automatic alerts with GPS location and audio clips to nearby volunteers',
                'Safety modules including "I Am Safe" mode for quick status updates',
                'Crime hotspot mapping to identify and avoid dangerous areas',
                'Crisis-response chatbot built with the LLaMA model for immediate guidance',
                'Continuous ML-based audio surveillance with minimal device performance impact',
                'Gesture recognition as a non-verbal emergency trigger'
            ],
            technologies: ['Python', 'Librosa', 'PyAudio', 'TensorFlow', 'ReactJS'],
            image: 'assets/projects/draupadi-detail.jpg',
            links: {
                github: 'https://github.com/RohanBage/Draupadi_AI-main',
                demo: 'https://www.youtube.com/watch?v=3h29y_wQwsY'
            }
        },
        wildlife: {
            title: 'Wildlife Detection System',
            description: `The Wildlife Detection System is a Streamlit-based web application designed for real-time wildlife monitoring and conservation. It uses YOLOv5 object detection to identify various animal species with high accuracy.`,
            features: [
                'Real-time wildlife detection with 30% improved accuracy',
                'Custom-trained YOLOv5 model for detecting lions, tigers, elephants, and other wildlife',
                'Optimized video processing using OpenCV for efficient frame analysis',
                'User-friendly Streamlit interface for easy access and operation',
                'Enhanced monitoring efficiency by 60% for conservation efforts'
            ],
            technologies: ['Python', 'Streamlit', 'YOLOv5', 'OpenCV'],
            image: 'assets/projects/wildlife-detail.jpg',
            links: {
                github: 'https://github.com/RohanBage/Wildlife-Detection-System'
            }
        },
        rainvision: {
            title: 'RainVision - Weather Prediction App',
            description: `RainVision is an innovative weather prediction application that provides accurate rainfall forecasts and interactive visualizations. The project has been officially copyrighted and offers 35% improved forecasting accuracy.`,
            features: [
                'Real-time weather prediction with 5-day rainfall forecasts',
                'Interactive map-based visualization using Leaflet.js',
                'Integration with OpenWeather API for reliable weather data',
                'Geolocation tracking with 20% improved location accuracy',
                'Optimized UI with 40% reduced load time for better user experience',
                'Copyrighted technology with verified accuracy improvements'
            ],
            technologies: ['Python', 'Streamlit', 'OpenWeather API', 'Leaflet.js'],
            image: 'assets/projects/rainvision-detail.jpg',
            links: {
                github: 'https://github.com/RohanBage/RainVision',
                certificate: 'https://drive.google.com/file/d/1j-26peR6X0U3sg59-p9lXjIZFLcg6U_I/view'
            }
        }
    };
    
    // Open modal with project details
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const project = this.getAttribute('data-project');
            const details = projectDetails[project];
            
            if (details) {
                let githubLink = '';
                let demoLink = '';
                let certLink = '';
                
                if (details.links.github) {
                    githubLink = `<a href="${details.links.github}" target="_blank" class="btn primary-btn"><i class="fab fa-github"></i> GitHub</a>`;
                }
                
                if (details.links.demo) {
                    demoLink = `<a href="${details.links.demo}" target="_blank" class="btn secondary-btn"><i class="fab fa-youtube"></i> Demo</a>`;
                }
                
                if (details.links.certificate) {
                    certLink = `<a href="${details.links.certificate}" target="_blank" class="btn secondary-btn"><i class="fas fa-certificate"></i> Certificate</a>`;
                }
                
                const featuresHTML = details.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('');
                const techHTML = details.technologies.map(tech => `<span>${tech}</span>`).join('');
                
                modalBody.innerHTML = `
                    <div class="modal-header">
                        <h2>${details.title}</h2>
                    </div>
                    <div class="modal-img">
                        <img src="${details.image || `assets/projects/${project}.jpg`}" alt="${details.title}">
                    </div>
                    <div class="modal-desc">
                        <h3>Description</h3>
                        <p>${details.description}</p>
                    </div>
                    <div class="modal-features">
                        <h3>Key Features</h3>
                        <ul>
                            ${featuresHTML}
                        </ul>
                    </div>
                    <div class="modal-tech">
                        <h3>Technologies Used</h3>
                        <div class="tech-tags">
                            ${techHTML}
                        </div>
                    </div>
                    <div class="modal-actions">
                        ${githubLink}
                        ${demoLink}
                        ${certLink}
                    </div>
                `;
                
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal on clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // // Form validation
    // const contactForm = document.getElementById('contact-form');
    
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
            
    //         // Get form inputs
    //         const nameInput = document.getElementById('name');
    //         const emailInput = document.getElementById('email');
    //         const subjectInput = document.getElementById('subject');
    //         const messageInput = document.getElementById('message');
            
    //         // Validate inputs
    //         let valid = true;
            
    //         if (nameInput.value.trim() === '') {
    //             showError(nameInput, 'Name is required');
    //             valid = false;
    //         } else {
    //             removeError(nameInput);
    //         }
            
    //         if (emailInput.value.trim() === '') {
    //             showError(emailInput, 'Email is required');
    //             valid = false;
    //         } else if (!isEmailValid(emailInput.value)) {
    //             showError(emailInput, 'Invalid email format');
    //             valid = false;
    //         } else {
    //             removeError(emailInput);
    //         }
            
    //         if (subjectInput.value.trim() === '') {
    //             showError(subjectInput, 'Subject is required');
    //             valid = false;
    //         } else {
    //             removeError(subjectInput);
    //         }
            
    //         if (messageInput.value.trim() === '') {
    //             showError(messageInput, 'Message is required');
    //             valid = false;
    //         } else {
    //             removeError(messageInput);
    //         }
            
    //         // If form is valid, submit
    //         if (valid) {
    //             // Show success message
    //             const formMessage = document.createElement('div');
    //             formMessage.className = 'form-message success';
    //             formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
    //             contactForm.appendChild(formMessage);
                
    //             // Reset form
    //             contactForm.reset();
                
    //             // Remove success message after 3 seconds
    //             setTimeout(() => {
    //                 formMessage.remove();
    //             }, 3000);
                
    //             // Here you can add code to send the form data to a server
    //             // For example, using fetch API or FormData
    //         }
    //     });
    // }
    
    // Email validation function
    function isEmailValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Show error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('error');
        
        let errorMessage = formControl.querySelector('.error-message');
        
        if (!errorMessage) {
            errorMessage = document.createElement('span');
            errorMessage.className = 'error-message';
            formControl.appendChild(errorMessage);
        }
        
        errorMessage.innerText = message;
    }
    
    // Remove error message
    function removeError(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
        
        const errorMessage = formControl.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate');
    
    function checkInView() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;
        
        animatedElements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const elementBottom = elementTop + elementHeight;
            
            // Check if element is in viewport
            if (elementBottom > windowTop && elementTop < windowBottom) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkInView);

    // Testimonial Slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialItems.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Dot click handlers
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Show slide function
    function showSlide(index) {
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonialItems[index].classList.add('active');
        testimonialDots[index].classList.add('active');
    }

    // TypeWriter effect for hero section
    const typeWriter = document.getElementById('typewriter');
    
    if (typeWriter) {
        const titles = ["Web Developer", "ML Engineer", "Data Scientist", "UI/UX Designer"];
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                // Deleting text
                typeWriter.innerText = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Typing text
                typeWriter.innerText = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Transition to deleting if done typing
            if (!isDeleting && charIndex === currentTitle.length) {
                isDeleting = true;
                setTimeout(type, 1500); // Wait before deleting
            } 
            // Transition to next title if done deleting
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(type, 500); // Wait before typing new title
            }
            // Continue typing or deleting
            else {
                setTimeout(type, isDeleting ? 100 : 200); // Typing is slower than deleting
            }
        }
        
        // Start the type effect
        setTimeout(type, 1000);
    }
    
    // CountUp animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsObserver;
    
    if (statNumbers.length > 0) {
        statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const targetNumber = parseInt(target.getAttribute('data-count'));
                    let currentNumber = 0;
                    const duration = 2000; // 2 seconds
                    const increment = targetNumber / (duration / 20);
                    
                    const counterInterval = setInterval(() => {
                        currentNumber += increment;
                        
                        if (currentNumber >= targetNumber) {
                            target.innerText = targetNumber.toLocaleString();
                            clearInterval(counterInterval);
                        } else {
                            target.innerText = Math.ceil(currentNumber).toLocaleString();
                        }
                    }, 20);
                    
                    // Unobserve after animation starts
                    statsObserver.unobserve(target);
                }
            });
        });
        
        statNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });
    }
});
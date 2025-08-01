// Configuración global y utilidades
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 100,
    typingSpeed: 50,
    observerThreshold: 0.1
};

// Utilidades
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    lerp: (start, end, factor) => {
        return start + (end - start) * factor;
    },
    
    clamp: (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    },
    
    getRandomBetween: (min, max) => {
        return Math.random() * (max - min) + min;
    }
};

// Gestión de navegación
class NavigationManager {
    constructor() {
        this.nav = document.querySelector('.floating-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.currentSection = 'inicio';
        
        this.init();
    }
    
    init() {
        this.setupScrollSpy();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupMobileMenu();
    }
    
    setupScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNav(entry.target.id);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        });
        
        this.sections.forEach(section => observer.observe(section));
    }
    
    updateActiveNav(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
                this.currentSection = sectionId;
            }
        });
    }
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Solo prevenir comportamiento por defecto para enlaces internos
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    this.scrollToSection(targetId);
                }
                // Para enlaces externos (como proyectos.html), permitir navegación normal
            });
        });
    }
    
    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        
        const handleScroll = utils.debounce(() => {
            const currentScrollY = window.scrollY;
            
            // Efecto de parallax en el hero
            if (currentScrollY < window.innerHeight) {
                const parallaxElements = document.querySelectorAll('.floating-shape');
                parallaxElements.forEach((el, index) => {
                    const speed = 0.5 + (index * 0.1);
                    el.style.transform = `translateY(${currentScrollY * speed}px) rotate(${currentScrollY * 0.1}deg)`;
                });
            }
            
            // Efecto de navegación flotante
            if (currentScrollY > 100) {
                this.nav.style.background = 'rgba(255, 255, 255, 0.15)';
                this.nav.style.backdropFilter = 'blur(30px)';
            } else {
                this.nav.style.background = 'rgba(255, 255, 255, 0.1)';
                this.nav.style.backdropFilter = 'blur(20px)';
            }
            
            // Ocultar/mostrar navegación en scroll
            const isMobile = window.innerWidth <= 768;
            
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                if (isMobile) {
                    this.nav.style.transform = 'translateY(-100px)';
                } else {
                    this.nav.style.transform = 'translateX(-50%) translateY(-100px)';
                }
                this.nav.style.opacity = '0';
            } else {
                if (isMobile) {
                    this.nav.style.transform = 'translateY(0)';
                } else {
                    this.nav.style.transform = 'translateX(-50%) translateY(0)';
                }
                this.nav.style.opacity = '1';
            }
            
            lastScrollY = currentScrollY;
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
        
        // Manejar redimensionamiento de ventana
        window.addEventListener('resize', utils.debounce(() => {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                this.nav.style.transform = 'translateY(0)';
            } else {
                this.nav.style.transform = 'translateX(-50%) translateY(0)';
            }
        }, 100));
    }
    
    setupMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
                toggle.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic en un enlace
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (menu.classList.contains('active')) {
                        menu.classList.remove('active');
                        toggle.classList.remove('active');
                    }
                });
            });
            
            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }
    }
    
    scrollToSection(sectionId) {
        const target = document.getElementById(sectionId);
        if (target) {
            const offsetTop = target.offsetTop - CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Gestión de animaciones
class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.init();
    }
    
    init() {
        this.setupIntersectionObservers();
        this.setupTypingAnimation();
        this.setupCounterAnimations();
        this.setupProgressBars();
        this.setupTechOrbs();
    }
    
    setupIntersectionObservers() {
        // Observer para elementos que aparecen al hacer scroll
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: CONFIG.observerThreshold,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Aplicar a elementos que necesitan animación de entrada
        const animatedElements = document.querySelectorAll(`
            .text-block, .stat-item, .project-highlight, 
            .tech-category, .contact-item, .social-link
        `);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            fadeInObserver.observe(el);
        });
        
        this.observers.set('fadeIn', fadeInObserver);
    }
    
    setupTypingAnimation() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;
        
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderRight = '3px solid var(--primary)';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, CONFIG.typingSpeed);
            } else {
                // Parpadeo del cursor
                setInterval(() => {
                    typingElement.style.borderRightColor = 
                        typingElement.style.borderRightColor === 'transparent' 
                            ? 'var(--primary)' 
                            : 'transparent';
                }, 750);
            }
        };
        
        // Iniciar animación después de un delay
        setTimeout(typeWriter, 1500);
    }
    
    setupCounterAnimations() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const originalText = counter.textContent;
                    
                    // Verificar si tiene data-count (formato del index.html)
                    const dataCount = counter.dataset.count;
                    let target = null;
                    let shouldAnimate = false;
                    
                    if (dataCount) {
                        // Formato del index.html: usa data-count
                        target = parseInt(dataCount);
                        shouldAnimate = !isNaN(target);
                    } else {
                        // Formato de proyectos.html: busca números en el texto
                        const numberMatch = originalText.match(/(\d+)/);
                        if (numberMatch) {
                            target = parseInt(numberMatch[1]);
                            shouldAnimate = !isNaN(target);
                        }
                    }
                    
                    if (shouldAnimate && target > 0) {
                        let current = 0;
                        const increment = target / 60; // 60 frames para 1 segundo
                        
                        const updateCounter = () => {
                            if (current < target) {
                                current += increment;
                                
                                if (dataCount) {
                                    // Para elementos con data-count, mostrar solo el número
                                    counter.textContent = Math.ceil(current);
                                } else {
                                    // Para elementos sin data-count, mantener el formato original
                                    const newText = originalText.replace(/\d+/, Math.ceil(current));
                                    counter.textContent = newText;
                                }
                                
                                requestAnimationFrame(updateCounter);
                            } else {
                                if (dataCount) {
                                    counter.textContent = target;
                                } else {
                                    counter.textContent = originalText;
                                }
                            }
                        };
                        
                        updateCounter();
                    }
                    
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        // Observar todos los contadores
        document.querySelectorAll('.stat-number').forEach(counter => {
            const dataCount = counter.dataset.count;
            const text = counter.textContent;
            
            // Animar si tiene data-count O si el texto contiene números
            if (dataCount || /\d+/.test(text)) {
                counterObserver.observe(counter);
            }
        });
    }
    
    setupProgressBars() {
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressFill = entry.target.querySelector('.progress-fill');
                    if (progressFill) {
                        const width = progressFill.dataset.width;
                        setTimeout(() => {
                            progressFill.style.width = `${width}%`;
                        }, 200);
                    }
                }
            });
        }, { threshold: 0.3 });
        
        document.querySelectorAll('.progress-item').forEach(item => {
            progressObserver.observe(item);
        });
    }
    
    setupTechOrbs() {
        const techOrbs = document.querySelectorAll('.tech-orb');
        
        techOrbs.forEach((orb, index) => {
            // Animación de entrada escalonada
            orb.style.opacity = '0';
            orb.style.transform = 'scale(0.5)';
            orb.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                orb.style.opacity = '1';
                orb.style.transform = 'scale(1)';
            }, index * 100);
            
            // Efecto de hover mejorado
            orb.addEventListener('mouseenter', () => {
                orb.style.transform = 'translateY(-10px) scale(1.1)';
                orb.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.4)';
                
                // Animación del ícono
                const img = orb.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1.2) rotate(5deg)';
                }
            });
            
            orb.addEventListener('mouseleave', () => {
                orb.style.transform = 'translateY(0) scale(1)';
                orb.style.boxShadow = '';
                
                const img = orb.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }
}

// Gestión de efectos de partículas
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.canvas = null;
        this.ctx = null;
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.setupMouseTracking();
        this.createParticles();
        this.animate();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.3';
        
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    setupMouseTracking() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    createParticles() {
        const particleCount = Math.min(50, window.innerWidth / 20);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3,
                color: `hsl(${utils.getRandomBetween(250, 300)}, 70%, 60%)`
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Actualizar posición
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Efecto de atracción al mouse
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100 * 0.01;
                particle.vx += dx * force;
                particle.vy += dy * force;
            }
            
            // Límites de pantalla
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Dibujar partícula
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            
            // Conectar partículas cercanas
            this.particles.slice(index + 1).forEach(otherParticle => {
                const dx2 = particle.x - otherParticle.x;
                const dy2 = particle.y - otherParticle.y;
                const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                
                if (distance2 < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = particle.color;
                    this.ctx.globalAlpha = (120 - distance2) / 120 * 0.2;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(() => this.animate());
    }
}

// Gestión de interacciones UI
class UIManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupCTAButtons();
        this.setupFormHandling();
        this.setupScrollIndicator();
        this.setupThemeToggle();
        this.setupKeyboardNavigation();
    }
    
    setupCTAButtons() {
        const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
        
        ctaButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });
            
            button.addEventListener('click', (e) => {
                // Efecto de ripple
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Añadir animación CSS para el ripple
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;
        
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const opacity = Math.max(0, 1 - scrolled / 300);
            indicator.style.opacity = opacity;
            indicator.style.transform = `translateY(${scrolled * 0.3}px)`;
        };
        
        window.addEventListener('scroll', utils.debounce(handleScroll, 10));
    }
    
    setupFormHandling() {
        // Manejar clics en enlaces de contacto
        const contactLinks = document.querySelectorAll('.social-link, .contact-item');
        
        contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.href === '#' || !link.href.startsWith('http')) {
                    e.preventDefault();
                    this.showNotification('¡Conecta tus enlaces reales aquí!', 'info');
                }
            });
        });
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.navigateSections(-1);
                    }
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.navigateSections(1);
                    }
                    break;
                case 'Home':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.scrollToTop();
                    }
                    break;
                case 'End':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.scrollToBottom();
                    }
                    break;
            }
        });
    }
    
    navigateSections(direction) {
        const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
        const currentIndex = sections.indexOf(navigationManager.currentSection);
        const newIndex = utils.clamp(currentIndex + direction, 0, sections.length - 1);
        
        if (newIndex !== currentIndex) {
            navigationManager.scrollToSection(sections[newIndex]);
        }
    }
    
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-weight: 500;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar notificación
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Funciones globales
function scrollToSection(sectionId) {
    if (window.navigationManager) {
        window.navigationManager.scrollToSection(sectionId);
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos los gestores
    window.navigationManager = new NavigationManager();
    window.animationManager = new AnimationManager();
    window.uiManager = new UIManager();
    
    // Inicializar sistema de partículas solo en desktop
    if (window.innerWidth > 1024) {
        window.particleSystem = new ParticleSystem();
    }
    
    // Inicialización completada
    console.log('🚀 Portfolio inicializado correctamente');
    
    // Preloader (opcional)
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Manejo de redimensionamiento de ventana
window.addEventListener('resize', utils.debounce(() => {
    // Reinicializar elementos que dependen del tamaño de ventana
    if (window.innerWidth <= 1024 && window.particleSystem) {
        window.particleSystem.canvas.remove();
        window.particleSystem = null;
    } else if (window.innerWidth > 1024 && !window.particleSystem) {
        window.particleSystem = new ParticleSystem();
    }
}, 250));

// Performance y optimización
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Tareas de baja prioridad aquí
        console.log('Optimizaciones de performance aplicadas');
    });
}
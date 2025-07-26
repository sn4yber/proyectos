// Smooth scrolling para los enlaces del navbar
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0)';
    }
});

// Animate progress bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                bar.style.animation = 'fillProgress 2s ease forwards';
            });
        }
    });
}, observerOptions);

const techSection = document.querySelector('.tech-stack');
if (techSection) {
    observer.observe(techSection);
}

// Efectos adicionales para mejorar la interactividad
document.addEventListener('DOMContentLoaded', function() {
    // Añadir efecto de typing al título principal
    const title = document.querySelector('.hero h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Iniciar el efecto después de un pequeño delay
        setTimeout(typeWriter, 500);
    }
    
    // Animación de las cards cuando entran en vista
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
});

// Función para mostrar notificación al hacer click en contacto
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Si no tiene href válido, prevenir default y mostrar mensaje
        if (this.href === '#' || !this.href) {
            e.preventDefault();
            
            // Crear notificación temporal
            const notification = document.createElement('div');
            notification.textContent = '¡Próximamente! Conecta tus enlaces reales aquí.';
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--primary);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: var(--shadow);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                font-weight: 500;
            `;
            
            // Añadir animación CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(notification);
            
            // Quitar la notificación después de 3 segundos
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
    });
});

// Carrusel simple para las cards principales
function initCarousel() {
    const cardsCarousel = document.querySelector('.cards-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!cardsCarousel) return;

    const cards = cardsCarousel.querySelectorAll('.card');
    let currentIndex = 0;
    const totalCards = cards.length;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });

        // Hacer scroll a la card activa
        const activeCard = cards[currentIndex];
        if (activeCard) {
            activeCard.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }

        // Actualizar estado de botones
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalCards - 1;
    }

    function nextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Event listeners para botones
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        }
    });

    // Inicializar el carrusel
    updateCarousel();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCarousel);
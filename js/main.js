// main.js - Funcionalidades principales del sitio

document.addEventListener('DOMContentLoaded', function() {
    console.log('HJSuite Solutions - Sitio cargado correctamente');
    
    // 1. Actualizar año actual en footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // 2. Efecto hover para tarjetas de sistemas
    const sistemaCards = document.querySelectorAll('.sistema-card');
    sistemaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 3. Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 4. Contador de clientes (efecto visual)
    const clientCountElement = document.getElementById('client-count');
    if (clientCountElement) {
        let count = 0;
        const targetCount = 150; // Cambia este número según tus clientes reales
        const interval = setInterval(() => {
            count += 5;
            clientCountElement.textContent = count + '+';
            if (count >= targetCount) {
                clearInterval(interval);
                clientCountElement.textContent = targetCount + '+';
            }
        }, 50);
    }
    
    // 5. Validación básica de formulario (si existe)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (nombre && email && mensaje) {
                // Aquí iría la lógica para enviar el formulario
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos requeridos.');
            }
        });
    }
    
    // 6. Detectar scroll para efectos
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // 7. Botón de WhatsApp flotante
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/50212345678'; // Reemplaza con tu número
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-float';
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappButton.title = 'Chatear por WhatsApp';
    
    // Estilos para el botón de WhatsApp
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: #25D366;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            z-index: 999;
            transition: all 0.3s;
            text-decoration: none;
        }
        
        .whatsapp-float:hover {
            background: #128C7E;
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(whatsappButton);
    
    // 8. Mostrar mensaje de bienvenida en consola
    console.log('%c🚀 HJSuite Solutions 🚀', 'color: #2196f3; font-size: 16px; font-weight: bold;');
    console.log('%cSistemas POS e Inventarios para tu negocio', 'color: #666; font-size: 14px;');
});
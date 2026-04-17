document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle da Barra de Navegação no Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 40px rgba(122, 139, 98, 0.08)';
            navbar.style.padding = '12px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });

    // 2. Menu Mobile "Amigável"
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('active');
            
            if (!isOpen) {
                navLinks.classList.add('active');
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--bg-cream)';
                navLinks.style.padding = '30px';
                navLinks.style.gap = '20px';
                navLinks.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                navLinks.style.borderRadius = '0 0 40px 40px';
                navLinks.style.animation = 'slideDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
            } else {
                navLinks.classList.remove('active');
                // Pequeno delay para a animação de saída se fosse implementada
                setTimeout(() => {
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
    }

    // 3. Efeito Bouncy Extra nos Botões (Opcional, o CSS já faz muito)
    const bouncyButtons = document.querySelectorAll('.bouncy');
    bouncyButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'none'; // Reseta animação se houver
        });
    });

    // 4. Revelação Suave ao Rolar (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.benefit-card, .cloud-card, .author-card, .purchase-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // 5. Ajuste de Links Internos para Fechar Menu Mobile
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
            }
        });
    });
});

// Estilos de animação dinâmicos
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

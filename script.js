document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggles
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Contact form submission stub
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Отправка...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      
      // Simulate network request
      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem;">
            <div style="font-size: 3rem; color: var(--raspberry); margin-bottom: 1rem;">✓</div>
            <h3 style="margin-bottom: 0.5rem; color: var(--text-color);">Заявка успешно отправлена</h3>
            <p style="color: var(--text-muted);">Мы свяжемся с вами в ближайшее время для обсуждения деталей вашего проекта.</p>
          </div>
        `;
      }, 1500);
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll Animations (Framer Motion replica)
  const observerOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-section').forEach(el => {
    const delay = el.getAttribute('data-delay') || '0';
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });
});

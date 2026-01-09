document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // staggered animations
        if (entry.target.classList.contains('scroll-animate-stagger')) {
          const children = Array.from(entry.target.children);
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
        
        // featured cards
        if (entry.target.classList.contains('featured-grid')) {
          const cards = Array.from(entry.target.querySelectorAll('.featured-card'));
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 100);
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // observe scroll elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-fade, .scroll-animate-slide-up, .scroll-animate-stagger, .featured-grid').forEach(el => {
    observer.observe(el);
  });

  // observe section titles
  document.querySelectorAll('.section-title, .about-preview h2').forEach(el => {
    const parent = el.closest('.scroll-animate, .featured-section, .about-preview');
    if (parent) {
      observer.observe(parent);
    }
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // navbar height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

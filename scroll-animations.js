document.addEventListener('DOMContentLoaded', function() {
  // Apple-like scroll animation observer with refined settings
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animate class immediately for CSS transitions to handle timing
        entry.target.classList.add('animate');
        
        // Handle staggered child animations
        if (entry.target.classList.contains('scroll-animate-stagger')) {
          const children = Array.from(entry.target.children);
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
        
        // Handle featured cards with staggered animation
        if (entry.target.classList.contains('featured-grid')) {
          const cards = Array.from(entry.target.querySelectorAll('.featured-card'));
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 100);
          });
        }
        
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll animation elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-fade, .scroll-animate-slide-up, .scroll-animate-stagger, .featured-grid').forEach(el => {
    observer.observe(el);
  });

  // Observe section titles and about preview headings
  document.querySelectorAll('.section-title, .about-preview h2').forEach(el => {
    const parent = el.closest('.scroll-animate, .featured-section, .about-preview');
    if (parent) {
      observer.observe(parent);
    }
  });

  // Add smooth scroll behavior for anchor links with offset for navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Account for navbar height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
